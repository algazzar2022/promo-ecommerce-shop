import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('config')
      .select('value')
      .eq('key', 'app_store_state')
      .single();

    if (error) {
      if (error.code === 'PGRST116') { // Row not found
        return NextResponse.json({});
      }
      throw error;
    }
    
    return NextResponse.json(data?.value || {});
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error';
    console.error('Supabase Load Error:', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { error } = await supabase
      .from('config')
      .upsert({ 
        key: 'app_store_state', 
        value: body,
        updated_at: new Date().toISOString()
      }, { onConflict: 'key' });

    if (error) throw error;
    
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error';
    console.error('Supabase Save Error:', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
