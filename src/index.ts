import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRouter from './routes/user.routes';
import { createConnection } from "typeorm";

const app = express();
createConnection();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use(userRouter);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`SERVER RUNNING IN: http://localhost:${PORT}`);
});