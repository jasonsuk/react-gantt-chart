import express from 'express';
// import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import taskRouter from './routes/taskRoute.js';
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
// app.disable('etag');

// Routes //
app.use('/api/tasks', taskRouter);

// Error handler //
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 6500;
app.listen(PORT, () => console.log(`The app is running on PORT ${PORT}`));
