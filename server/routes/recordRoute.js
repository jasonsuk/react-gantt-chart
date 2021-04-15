import express from 'express';

import { getRecords } from '../controllers/recordController.js';

const router = express.Router();

router.route('/').get(getRecords);
// router.route('/:id/timeline').put(updateRecords);

export default router;
