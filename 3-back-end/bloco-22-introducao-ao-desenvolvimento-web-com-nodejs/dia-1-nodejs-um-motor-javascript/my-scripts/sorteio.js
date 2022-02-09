const { questionInt, question } = require('readline-sync');

const sorteio = () => {
  const chosenNumber = questionInt('\nEscolha um número de 0 a 10.\n');

  const numberDrawn = Math.floor(Math.random() * 11);

  if (chosenNumber === numberDrawn) {
    console.log('\nParabéns, número correto!');
  } else {
    console.log(`\nOpa, não foi dessa vez. O número era ${numberDrawn}.`);
  }

  const playAgain = question("\nDeseja jogar novamente? ('S' ou 'n') ");

  if (playAgain.match(/s/i) || playAgain === '') {
    sorteio();
  }
};

sorteio();
