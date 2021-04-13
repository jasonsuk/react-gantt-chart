import path from 'path';
import pg from 'pg';
import dotenv from 'dotenv';

const __dirname = path.resolve();
dotenv.config({ path: path.join(__dirname, '.env') });

const pool = new pg.Pool({
    user: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
});

export default pool;
