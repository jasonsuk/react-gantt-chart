import express from 'express';

import {
    getTasks,
    getSingleTask,
    createTask,
    editTask,
    deleteTask,
} from '../controllers/taskController.js';

const router = express.Router();

router.route('/').get(getTasks).post(createTask);
router.route('/:id').get(getSingleTask);
router.route('/:id/edit').put(editTask);
router.route('/:id/delete').delete(deleteTask);

export default router;
