import express from 'express';

import {
    getTasks,
    createTask,
    editTask,
} from '../controllers/taskController.js';

const router = express.Router();

router.route('/').get(getTasks).post(createTask);
router.route('/:id/edit').put(editTask);

export default router;
