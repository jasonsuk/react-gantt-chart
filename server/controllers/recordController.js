import asyncHandler from 'express-async-handler';
import pool from '../db/db.js';

// @DESC: GET records
// @ROUTE: GET /api/records
// @ACCESS: Public
// @USE: Get all records from db to the Gantt component

export const getRecords = asyncHandler(async (req, res) => {
    // Get the rows data
    const { rows } = await pool.query(
        'SELECT * FROM records ORDER BY task_id ASC'
    );

    res.status(200);
    res.json(rows);
});

// @DESC: UPDATE timeline
// @ROUTE: PUT /api/records/:id/timeline
// @ACCESS: Public
// @USE: Update timelines of a project record to mark a change in progress / plan in Gantt component

// export const updateRecords = async (req, res) => {
//     try {
//     } catch (error) {}
// };
