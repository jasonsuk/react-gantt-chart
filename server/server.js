import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import asyncHandler from 'express-async-handler'

import pool from './db/db.js';

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/records', async (req, res) => {
    try {
        const rowRecords = await pool.query('SELECT * FROM records');
        res.status(200);

        const { rows } = rowRecords;
        res.json(rows);
        //
    } catch (error) {
        res.status(404);
        res.json({
            message: error.message,
        });
    }
});

const PORT = process.env.PORT || 6500;
app.listen(PORT, () => console.log(`The app is running on PORT ${PORT}`));
