import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 6500;
app.listen(PORT, () => console.log(`The app is running on PORT ${PORT}`));
