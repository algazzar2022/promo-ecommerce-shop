import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const data = await kv.get('app_store_state');
    return NextResponse.json(data || {});
  } catch (error) {
    console.error('Failed to load store from KV:', error);
    return NextResponse.json({ error: 'Failed to load data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await kv.set('app_store_state', body);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to save store to KV:', error);
    return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
  }
}
