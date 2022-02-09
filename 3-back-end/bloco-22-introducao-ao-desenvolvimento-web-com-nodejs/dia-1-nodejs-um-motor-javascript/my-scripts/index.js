const { questionInt } = require('readline-sync');

console.log('Lista de scripts disponíveis:\n1. Calculadora de IMC,\n2. Calculadora de velocidade média,\n3. Sorteio de números de 0 a 10;');

const scriptNumber = questionInt('\nSelecione o número do script desejado: ');

switch (scriptNumber) {
  case 1:
    require('./imc');
    break;
  case 2:
    require('./velocidade');
    break;
  case 3:
    require('./sorteio');
}
