const resultRaffle = (number, callback) => {
  const randomNumber = Math.floor(Math.random() * 5 + 1);
  return callback(number, randomNumber);
}

const checkNumber = (number1, number2) => number1 === number2 ? 'Parabéns você ganhou' : 'Tente novamente';

console.log(resultRaffle(5, checkNumber));