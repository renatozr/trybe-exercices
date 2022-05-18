const randomNumber = require('../src/exercicio1.js');

test('', () => {
  const randomNumber = jest.fn()
    .mockImplementation((a, b, c) => a * b * c);

  expect(randomNumber(2, 2, 2)).toBe(8);
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber).toHaveBeenCalledWith(2, 2, 2);

  randomNumber.mockReset();
  randomNumber.mockImplementation((a) => a * 2);

  expect(randomNumber(2)).toBe(4);
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber).toHaveBeenCalledWith(2);
});