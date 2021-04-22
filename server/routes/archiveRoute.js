import express from 'express';

import { getArchives } from '../controllers/archiveController.js';

const router = express.Router();

router.route('/').get(getArchives);

export default router;
