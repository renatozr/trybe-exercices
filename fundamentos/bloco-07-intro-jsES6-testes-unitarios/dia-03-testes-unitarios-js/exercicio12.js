const assert = require('assert');

const greaterThanTen = (array) => {
  let result = [];
  for (let num of array) {
    if (num > 10) {
      result.push(num);
    }
  }
  return result;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

assert.strictEqual(typeof greaterThanTen, 'function');
assert.ok(Array.isArray(greaterThanTen(parameter)));
assert.deepStrictEqual(greaterThanTen(parameter), result);