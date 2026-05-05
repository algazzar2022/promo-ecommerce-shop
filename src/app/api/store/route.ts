import mysql from 'mysql2/promise';
import { NextResponse } from 'next/server';

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false
  }
};

async function initDB() {
  const connection = await mysql.createConnection(dbConfig);
  await connection.execute(`
    CREATE TABLE IF NOT EXISTS app_config (
      id INT PRIMARY KEY DEFAULT 1,
      config_json LONGTEXT,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `);
  await connection.end();
}

export async function GET() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows]: any = await connection.execute('SELECT config_json FROM app_config WHERE id = 1');
    await connection.end();

    if (rows.length > 0) {
      return NextResponse.json(JSON.parse(rows[0].config_json));
    }
    return NextResponse.json({});
  } catch (error: any) {
    console.error('MySQL Load Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const configJson = JSON.stringify(body);

    await initDB();

    const connection = await mysql.createConnection(dbConfig);
    await connection.execute(
      'INSERT INTO app_config (id, config_json) VALUES (1, ?) ON DUPLICATE KEY UPDATE config_json = ?',
      [configJson, configJson]
    );
    await connection.end();

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('MySQL Save Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
