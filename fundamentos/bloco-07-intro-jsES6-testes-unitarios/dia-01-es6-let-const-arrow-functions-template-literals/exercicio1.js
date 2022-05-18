const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  // console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
}
testingScope(true);


const oddsAndEvens = [13, 3, 4, 10, 7, 2, 23, 965, 1, 57, 0];

const sortNumbers = array => {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 1; j < array.length; j += 1) {
      if (array[j - 1] > array[j]) {
        let num = array[j];
        array[j] = array[j - 1];
        array[j - 1] = num;
      }
    }
  }
  return array;
}
console.log(`Os números ${sortNumbers(oddsAndEvens).join(',')} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

const sortNumbers2 = oddsAndEvens.sort((a, b) => a - b);
console.log(`Os números ${sortNumbers2.join(',')} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉
