import express from 'express';
// import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import recordRouter from './routes/recordRoute.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';

// Environmental variables
dotenv.config();

// Instantiate an express app
const app = express();

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Middlewares //
// app.use(cors());
app.use(express.json());

// Routes //
app.use('/api/records', recordRouter);

// Error handler //
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 6500;
app.listen(PORT, () => console.log(`The app is running on PORT ${PORT}`));
