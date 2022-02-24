const express = require('express');
const bodyParser = require('body-parser');

const getPing = require('./middlewares/getPing');
const postHello = require('./middlewares/postHello');
const postGreetings = require('./middlewares/postGreetings');
const putUsers = require('./middlewares/putUsers');
const simpsons = require('./middlewares/simpsons');
const notFound = require('./middlewares/notFound');
const error = require('./middlewares/error');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

app.get('/ping', getPing);

app.post('/hello', postHello);

app.post('/greetings', postGreetings);

app.put('/users/:name/:age', putUsers);

app.get('/simpsons', simpsons.getAll);

app.get('/simpsons/:id', simpsons.getById);

app.post('/simpsons', simpsons.addNew);

app.all('*', notFound);

app.use(error);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
