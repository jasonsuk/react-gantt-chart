// import asyncHandler from 'express-async-handler'
import pool from '../db/db.js';

// @DESC: Get records
// @ROUTE: /api/records
// @ACCESS: Public
// @USE: Get all records from db to the Gantt component

export const getRecords = async (req, res) => {
    try {
        const rowRecords = await pool.query('SELECT * FROM records');
        const { rows } = rowRecords;

        res.status(200);
        res.json(rows);
        //
    } catch (error) {
        res.status(400);
        res.json({
            message: `ERROR: ${error.message}`,
        });
    }
};
