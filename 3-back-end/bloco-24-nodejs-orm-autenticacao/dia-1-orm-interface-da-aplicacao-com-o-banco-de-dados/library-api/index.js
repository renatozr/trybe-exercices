require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const bookRouter = require('./routers/book');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/ping', (_req, res) => res.status(200).json({ message: 'pong!' }));

app.use('/book', bookRouter);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
