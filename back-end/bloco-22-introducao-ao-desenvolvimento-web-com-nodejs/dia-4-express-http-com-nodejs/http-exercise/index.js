const express = require('express');
const bodyParser = require('body-parser');

const ping = require('./middlewares/ping');
const hello = require('./middlewares/hello');
const greetings = require('./middlewares/greetings');
const users = require('./middlewares/users');
const simpsons = require('./middlewares/simpsons');
const notFound = require('./middlewares/notFound');
const error = require('./middlewares/error');
const auth = require('./middlewares/auth');
const signup = require('./middlewares/signup');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

app.post('/signup', signup);

app.use(auth);

app.get('/ping', ping);

app.post('/hello', hello);

app.post('/greetings', greetings);

app.put('/users/:name/:age', users);

app.get('/simpsons', simpsons.getAll);

app.get('/simpsons/:id', simpsons.getById);

app.post('/simpsons', simpsons.addNew);

app.all('*', notFound);

app.use(error);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
