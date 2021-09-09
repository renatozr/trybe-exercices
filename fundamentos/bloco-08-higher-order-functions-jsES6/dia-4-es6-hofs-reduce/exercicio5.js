const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  // return names.map(elm => elm.split('').reduce((acc, cur) => cur.toLowerCase() === 'a' ? acc += 1 : acc,0)).reduce((acc, cur) => acc + cur);
  return names.reduce((acc, cur) => acc + cur.split('').reduce((acc, cur) => cur.toLowerCase() === 'a' ? acc += 1 : acc, 0), 0);
}

assert.deepStrictEqual(containsA(), 20);