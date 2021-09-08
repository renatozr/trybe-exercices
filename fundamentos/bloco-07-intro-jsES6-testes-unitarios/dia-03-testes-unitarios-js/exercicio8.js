const assert = require('assert');
// escreva a função sumAllNumbers aqui
const sumAllNumbers = (arr) => {
  let result = 0;
  for (let num of arr) {
    result += num;
  }
  return result;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);