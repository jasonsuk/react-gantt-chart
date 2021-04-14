import express from 'express';
// import cors from 'cors';
import dotenv from 'dotenv';

import recordRouter from './routes/recordRoute.js';

// Environmental variables
dotenv.config();

// Instantiate an express app
const app = express();

// Middlewares
// app.use(cors());
app.use(express.json());

// Routes
app.use('/api/records', recordRouter);

const PORT = process.env.PORT || 6500;
app.listen(PORT, () => console.log(`The app is running on PORT ${PORT}`));
