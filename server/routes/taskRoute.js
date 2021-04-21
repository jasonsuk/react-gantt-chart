import express from 'express';

import {
    getTasks,
    getSingleTask,
    createTask,
    editTask,
    deleteTask,
    archiveTask,
} from '../controllers/taskController.js';

const router = express.Router();

router.route('/').get(getTasks).post(createTask);
router.route('/:id').get(getSingleTask);
router.route('/:id/edit').put(editTask);
router.route('/:id/delete').delete(deleteTask);
router.route('/:id/archive').post(archiveTask);

export default router;
