import mysql from 'mysql2/promise';

// Create a MySQL connection pool
const poolConfig = {
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name',
  waitForConnections: true,
  connectionLimit: 10,
};

const pool = mysql.createPool(poolConfig);

export default pool;
