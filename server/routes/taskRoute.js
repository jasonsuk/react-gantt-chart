import express from 'express';

import { createTask, getTasks } from '../controllers/taskController.js';

const router = express.Router();

router.route('/').get(getTasks).post(createTask);
// router.route('/:id/timeline').put(updateRecords);

export default router;
