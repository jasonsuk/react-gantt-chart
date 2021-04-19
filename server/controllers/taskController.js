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

// @DESC: Edit task
// @ROUTE: PUT /api/tasks/:id/edit
// @ACCESS: Public

export const editTask = asyncHandler(async (req, res) => {
    const taskIdToSearch = parseInt(req.params.id);

    // Find task by id
    const { rows } = await pool.query(
        `SELECT * FROM tasks WHERE task_id = ${taskIdToSearch}`
    );

    const taskSearched = rows[0];

    if (taskSearched) {
        const {
            taskName,
            resource,
            startDate,
            endDate,
            percentComplete,
        } = req.body;

        const newData = [
            taskName || taskSearched.task_name,
            resource || taskSearched.resource,
            startDate || taskSearched.start_date,
            endDate || taskSearched.end_date,
            new Date(endDate) - new Date(startDate) ||
                taskSearched.end_date - taskSearched.start_date,
            parseInt(percentComplete) || taskSearched.percent_complete,
            null, // no dependencies functionality yet as not needed
        ];

        const { data } = await pool.query(
            `UPDATE tasks
            SET (task_name, resource, start_date, end_date, duration, percent_complete, dependencies) = ($1, $2, $3, $4, $5, $6, $7)
            WHERE task_id = ($8)`,
            [...newData, taskIdToSearch]
        );

        res.status(200).json(data);
        //
    } else {
        throw new Error(`ERROR: Task ${taskIdToSearch} not found`);
    }
});

// @DESC: Delete a task
// @ROUTE: DELETE /api/records/:id/delete
// @ACCESS: Public

export const deleteTask = asyncHandler(async (req, res) => {
    const taskIdToSearch = req.params.id;

    // Find task by id
    const { rows } = await pool.query(
        `SELECT * FROM tasks WHERE task_id = ${taskIdToSearch}`
    );

    const taskSearched = rows[0];

    if (taskSearched) {
        await pool.query(`DELETE FROM tasks WHERE task_id = $1`, [
            taskSearched.task_id,
        ]);
        res.status(200).json({
            message: `Successfully deleted Task# ${taskIdToSearch}`,
        });
    } else {
        throw new Error(`ERROR: Task ${taskIdToSearch} not found`);
    }
});
