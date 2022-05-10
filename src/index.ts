import express, { Request, Response, NextFunction } from 'express';
import usersRoute from './routes/users.route';

const app = express();

// Aplication Settings
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route Settings
app.use(usersRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ foo: 'Sucess!' });
});

// Server Startup
app.listen(3000, () => {
  console.log('Running aplication on port 3000!!!');
});
