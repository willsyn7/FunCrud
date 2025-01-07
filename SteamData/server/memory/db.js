import pg from 'pg';

const { Pool } = pg;

import postgres from 'postgres'


import dotenv from 'dotenv';
dotenv.config();
const connectionString = process.env.DATABASE_URL;

// const pool = new Pool({
//   connectionString: connectionString,
// });

// const checkDatabaseConnection = async () => {
//   try {
//     await pool.query('SELECT NOW()');
//     console.log('Connected to the PostgreSQL database.');
//   } catch (err) {
//     console.error('Failed to connect to the PostgreSQL database:', err);
//   }
// };

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not defined');
}

const sql = postgres(connectionString);

const checkDatabaseConnection = async () => {
  try {
    await sql`SELECT NOW()`;
    console.log('Connected to the PostgreSQL database.');
  } catch (err) {
    console.error('Failed to connect to the PostgreSQL database:', err);
    throw err;
  }
};

export { sql, checkDatabaseConnection };