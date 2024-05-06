import { Pool } from 'pg';

export const pool = new Pool({
  user: process.env.PostgreSQL_USER,
  host: process.env.PostgreSQL_HOST,
  database: process.env.PostgreSQL_DATABSE,
  password: process.env.PostgreSQL_PASSWORD,
  port: process.env.PostgreSQL_PORT,
});
