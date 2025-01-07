import pg from 'pg';

const { Pool } = pg;

// Corrected connection string format
const PG_URI = `postgresql://postgres.krpcfcxwnfhrnriwzfas:Potatoe123!@aws-0-us-west-1.pooler.supabase.com:6543/postgres`;

// DATABASE_URL=postgresql://postgres:Potatoe123!@db.krpcfcxwnfhrnriwzfas.supabase.co:5432/postgres
// DATABASE_URL=postgresql://postgres.krpcfcxwnfhrnriwzfas:Potatoe123!@aws-0-us-west-1.pooler.supabase.com:6543/postgres

const pool = new Pool({
  connectionString: PG_URI,
});

const checkDatabaseConnection = async () => {
  try {
    await pool.query('SELECT NOW()');
    console.log('Connected to the PostgreSQL database.');
  } catch (err) {
    console.error('Failed to connect to the PostgreSQL database:', err);
  }
};

export { pool, checkDatabaseConnection };