import express from 'express';
import healthzRouter from './routes/healthz';
import errorHandler from './middleware/errorHandler';

const app = express();
app.use(express.json());
app.use('/healthz', healthzRouter);
app.use(errorHandler);

export default app;
