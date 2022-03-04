require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const UserController = require('./controllers/User');
const UserMiddleware = require('./middlewares/User');
const errorMiddleware = require('./middlewares/error');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/user', [
  UserMiddleware.validateNewUser,
  rescue(UserController.create),
]);

app.get('/user', rescue(UserController.getAll));

app.get('/user/:id', rescue(UserController.getById));

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
