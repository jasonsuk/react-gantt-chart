import asyncHandler from 'express-async-handler';
import pool from '../db/db.js';

// @DESC: Get all archives from db
// @ROUTE: GET /api/archives
// @ACCESS: Public

export const getArchives = asyncHandler(async (req, res) => {
    // Get the rows data
    const { rows } = await pool.query(
        'SELECT * FROM archives ORDER BY task_id ASC'
    );

    res.status(200);
    res.json(rows);
});
