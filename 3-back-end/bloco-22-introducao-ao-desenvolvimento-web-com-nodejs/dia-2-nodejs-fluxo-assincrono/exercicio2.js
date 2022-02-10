const doMath = require('./exercicio1');

const randomNumber = () => Math.floor(Math.random() * 100 + 1);

doMath(randomNumber(), randomNumber(), randomNumber())
  .then((result) => console.log(result))
  .catch((error) => console.log(error));