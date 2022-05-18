const doMath = require('./exercicio1');

const randomNumber = () => Math.floor(Math.random() * 100 + 1);

const main = async () => {
  try {
    const result = await doMath(randomNumber(), randomNumber(), randomNumber());
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

main();