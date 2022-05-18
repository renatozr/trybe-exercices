const { questionInt } = require('readline-sync');

const number = questionInt('\nInforme um número inteiro maior que zero, para obter o fatorial.\n');

const factorial = (number) => {
  let result = 1;

  for (; number > 1; number--) {
    result *= number;
  }

  return result;
}

if (number > 0) {
  console.log(`\nResultado: ${factorial(number)}.`);
} else {
  console.log('\nNúmero inválido.');
}
