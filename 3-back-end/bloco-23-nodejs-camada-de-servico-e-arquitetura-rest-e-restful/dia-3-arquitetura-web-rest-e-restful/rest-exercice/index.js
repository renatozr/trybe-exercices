require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ProductsRouter = require('./routers/Products');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', ProductsRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
