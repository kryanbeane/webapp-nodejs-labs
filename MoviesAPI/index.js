import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use('/api/movies', moviesRouter);

app.use(express.json());

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});