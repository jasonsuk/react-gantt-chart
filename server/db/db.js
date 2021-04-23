import path from 'path';
import pg from 'pg';
import dotenv from 'dotenv';

const __dirname = path.resolve();
dotenv.config({ path: path.join(__dirname, '.env') });

const isProduction = process.env.NODE_ENV === 'production';
const devDBConfig = {
    user: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
};

const pool = new pg.Pool(
    isProduction ? { connectionString: process.env.DATABASE_URL } : devDBConfig
);

export default pool;
