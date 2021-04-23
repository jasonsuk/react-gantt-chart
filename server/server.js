import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import taskRouter from './routes/taskRoute.js';
import archiveRouter from './routes/archiveRoute.js';
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
app.use('/api/archives', archiveRouter);

// Deployment
const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')));

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    );
}

// Error handler //
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 6500;
app.listen(PORT, () => console.log(`The app is running on PORT ${PORT}`));
