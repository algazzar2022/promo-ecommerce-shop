import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SECRET_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Check 1: Are environment variables set?
  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({
      status: '❌ FAILED',
      reason: 'Environment variables missing',
      hasUrl: !!supabaseUrl,
      hasKey: !!supabaseKey,
    });
  }

  try {
    // Check 2: Can we connect and read from the database?
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { data, error } = await supabase.from('config').select('key').limit(1);

    if (error) {
      return NextResponse.json({
        status: '❌ DB ERROR',
        reason: error.message,
        code: error.code,
        hint: error.code === '42P01' 
          ? 'Table "config" does not exist. Please create it in Supabase SQL Editor.' 
          : 'Check credentials',
        urlPreview: supabaseUrl.substring(0, 40),
      });
    }

    // Check 3: Try to write a test record
    const { error: writeError } = await supabase
      .from('config')
      .upsert({ key: 'connection_test', value: { ok: true, time: new Date().toISOString() } }, { onConflict: 'key' });

    if (writeError) {
      return NextResponse.json({
        status: '⚠️ READ OK / WRITE FAILED',
        reason: writeError.message,
        rows: data,
      });
    }

    return NextResponse.json({
      status: '✅ CONNECTED',
      message: 'Database is working perfectly! Read and Write both successful.',
      urlPreview: supabaseUrl.substring(0, 40) + '...',
      existingRows: data?.length ?? 0,
    });

  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({
      status: '❌ EXCEPTION',
      reason: msg,
    });
  }
}
