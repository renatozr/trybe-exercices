const { questionInt } = require('readline-sync');

const n = questionInt('\nInforme quantos elementos da sequência de Fibonacci serão exibidos.\n');

if (n < 1) {
  console.log('\nNúmero inválido.');
} else if (n === 1) {
  console.log('1.');
} else {
  const arrSequence = [1, 2];
  let strSequence = '\n1, 2';

  for (let i = 1; i <= n - 2; i++) {
    const sum = arrSequence[i - 1] + arrSequence[i];
    arrSequence.push(sum);
    strSequence += `, ${sum}`;
  }

  console.log(strSequence + '.');
}