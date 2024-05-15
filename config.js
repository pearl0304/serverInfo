import dotenv from 'dotenv';
dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env.development',
});
import pkg from 'pg';
const { Pool } = pkg;


const pool = new Pool({
  user: process.env.PostgreSQL_USER,
  host: process.env.PostgreSQL_HOST,
  database: process.env.PostgreSQL_DATABASE,
  password: process.env.PostgreSQL_PASSWORD,
  port: process.env.PostgreSQL_PORT,
});

export const connectPostgres = async () => {
  try {
    const client = await pool.connect();
    console.log('Database Connected Successfully');
    client.release();
  } catch (e) {
    console.error(e.stack);
    throw e;
  }
};
