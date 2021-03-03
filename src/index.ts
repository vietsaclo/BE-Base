import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRouter from './routes/user.routes';
import fromServerRouter from './fromServer';
import { createConnection } from "typeorm";
import { PORT } from './config_cho_tui';
import * as swaggerDocument from './swagger.json';
const swaggerUi = require('swagger-ui-express');

const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

createConnection();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Default Root:
app.use(fromServerRouter);

// Routes
app.use(userRouter);

app.listen(PORT, () => {
    console.log(`SERVER RUNNING IN: http://localhost:${PORT}`);
});
