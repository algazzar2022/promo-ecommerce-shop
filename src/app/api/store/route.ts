import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export const dynamic = 'force-dynamic';

async function getConnection() {
  return await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    connectTimeout: 10000,
  });
}

export async function GET() {
  let connection;
  try {
    connection = await getConnection();

    // Ensure table exists
    await connection.query(`
      CREATE TABLE IF NOT EXISTS config (
        id INT AUTO_INCREMENT PRIMARY KEY,
        config_key VARCHAR(255) UNIQUE NOT NULL,
        config_value LONGTEXT,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    const [rows] = await connection.query(
      'SELECT config_value FROM config WHERE config_key = ? LIMIT 1',
      ['app_store_state']
    );

    if (Array.isArray(rows) && rows.length > 0) {
      const data = rows[0] as { config_value: string };
      // config_value might be stored as stringified JSON or directly depending on how we insert
      try {
        const parsed = JSON.parse(data.config_value);
        return NextResponse.json(parsed);
      } catch {
        return NextResponse.json(data.config_value || {});
      }
    }
    
    return NextResponse.json({});
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error';
    console.error('MySQL Load Error:', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  } finally {
    if (connection) await connection.end();
  }
}

export async function POST(request: Request) {
  let connection;
  try {
    const body = await request.json();
    const stringifiedBody = JSON.stringify(body);
    
    connection = await getConnection();

    // Ensure table exists
    await connection.query(`
      CREATE TABLE IF NOT EXISTS config (
        id INT AUTO_INCREMENT PRIMARY KEY,
        config_key VARCHAR(255) UNIQUE NOT NULL,
        config_value LONGTEXT,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    // Upsert equivalent in MySQL (INSERT ... ON DUPLICATE KEY UPDATE)
    await connection.query(
      `INSERT INTO config (config_key, config_value) 
       VALUES (?, ?) 
       ON DUPLICATE KEY UPDATE config_value = VALUES(config_value)`,
      ['app_store_state', stringifiedBody]
    );
    
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Unknown error';
    console.error('MySQL Save Error:', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  } finally {
    if (connection) await connection.end();
  }
}
