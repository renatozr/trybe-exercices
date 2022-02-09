const { questionFloat } = require('readline-sync');

const weight = questionFloat('\nQual seu peso em quilogramas?\n');
const height = questionFloat('Qual sua altura em metros?\n');

const imc = (weight / height ** 2).toFixed(2);

const situation = (imc) => {
  if (imc < 18.5) {
    return 'Abaixo do peso (magreza)';
  }
  if (imc >= 18.5 && imc <= 24.9) {
    return 'Peso normal';
  }
  if (imc >= 25 && imc <= 29.9) {
    return 'Acima do peso (sobrepeso)';
  }
  if (imc >= 30 && imc <= 34.9) {
    return 'Obesidade grau I';
  }
  if (imc >= 35 && imc <= 39.9) {
    return 'Obesidade grau II';
  }
  return 'Obesidade graus III e IV';
};

console.log(`\nSeu IMC é ${imc}. Está na categoria: ${situation(imc)}.`);
