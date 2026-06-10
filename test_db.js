const mysql = require('mysql2/promise');

async function testConnection() {
  try {
    const connection = await mysql.createConnection({
      host: 'mscostore.com',
      user: 'u741368736_promo_user',
      password: 'Mooha2711',
      database: 'u741368736_promo_db',
      connectTimeout: 10000
    });

    console.log('Connected to MySQL successfully!');

    // Create table if not exists
    await connection.query(`
      CREATE TABLE IF NOT EXISTS config (
        id INT AUTO_INCREMENT PRIMARY KEY,
        config_key VARCHAR(255) UNIQUE NOT NULL,
        config_value LONGTEXT,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    console.log('Table config ensured.');

    await connection.end();
  } catch (error) {
    console.error('MySQL Connection Error:', error.message);
  }
}

testConnection();
