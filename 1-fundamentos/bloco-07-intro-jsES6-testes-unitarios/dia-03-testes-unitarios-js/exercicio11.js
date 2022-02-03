const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  let result = '';
  let counter = 1;
  for (let letter of characters) {
    if (
      letter === 'a' ||
      letter === 'e' ||
      letter === 'i' ||
      letter === 'o' ||
      letter === 'u'
    ) {
      result += counter;
      counter += 1;
    } else {
      result += letter;
    }
  }
  return result;
};


const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(typeof removeVowels, 'function');
assert.strictEqual(typeof removeVowels(parameter), 'string');
assert.strictEqual(removeVowels(parameter), result);