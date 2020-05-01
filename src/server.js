import express from 'express';
import indexRouter from './routes/index.routes';
import taskRouter from './routes/task.routes';

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewars
app.use(express.json());

// Routes
app.use(indexRouter);
app.use('/task', taskRouter);

export default app;