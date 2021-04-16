import asyncHandler from 'express-async-handler';
import pool from '../db/db.js';

// @DESC: Get all records from db to the Gantt component
// @ROUTE: GET /api/records
// @ACCESS: Public

export const getTasks = asyncHandler(async (req, res) => {
    // Get the rows data
    const { rows } = await pool.query(
        'SELECT * FROM tasks ORDER BY task_id ASC'
    );

    res.status(200);
    res.json(rows);
});

// @DESC: Create a new task
// @ROUTE: POST /api/records
// @ACCESS: Public

export const createTask = asyncHandler(async (req, res) => {
    const defaultStartDate = new Date();
    const defaultEndDate = new Date(defaultStartDate + 1 * 24 * 60 * 60 * 10);
    const duration = defaultStartDate - defaultStartDate;

    const newTask = await pool.query(
        `INSERT INTO tasks (task_name, resource, start_date, end_date, duration, percent_complete, dependencies) 
        VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *;`,
        [
            'Sample task',
            'Resource for sample task',
            defaultStartDate,
            defaultEndDate,
            duration,
            0,
            null,
        ]
    );

    res.status(201).json(newTask.rows);
});
