const { questionInt } = require('readline-sync');

console.log('Lista de scripts disponíveis:\n1. Calculadora de IMC,\n2. Calcula a velocidade média de um objeto,\n3. Sorteia um número de 0 a 10,\n4. Calcula o fatorial do número inserido,\n5. Exibe a sequência de Fibonacci até a posição do número inserido;');

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
    break;
  case 4:
    require('./fatorial');
    break;
  case 5:
    require('./fibonacci');
}
