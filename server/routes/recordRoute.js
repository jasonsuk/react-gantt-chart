import express from 'express';

import { getRecords } from '../controllers/recordController.js';

const router = express.Router();

router.route('/').get(getRecords);

export default router;
