const assert = require('assert');

const greetPeople = (people) => {
  let result = [];
  
  for (let person of people) {
    result.push(`Hello ${person}`);
  }
  return result;
};  

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.strictEqual(typeof greetPeople, 'function');
assert.ok(Array.isArray(greetPeople(parameter)));
assert.deepStrictEqual(greetPeople(parameter), result);