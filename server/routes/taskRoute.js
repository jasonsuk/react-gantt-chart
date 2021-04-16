import express from 'express';

import {
    getTasks,
    createTask,
    editTask,
    deleteTask,
} from '../controllers/taskController.js';

const router = express.Router();

router.route('/').get(getTasks).post(createTask);
router.route('/:id/edit').put(editTask);
router.route('/:id/delete').delete(deleteTask);

export default router;
