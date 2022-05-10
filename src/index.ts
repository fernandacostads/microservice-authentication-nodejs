import express from 'express';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

// Aplication Settings
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route Settings
app.use(usersRoute);

app.use(statusRoute);

// Server Startup
app.listen(3000, () => {
  console.log('Running aplication on port 3000!!!');
});
