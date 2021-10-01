const randomNumber = require('../src/exercicio1.js');

describe('função randomNumber', () => {
  const randomNumber = jest.fn()
    .mockImplementationOnce((a, b) => a / b)
    .mockReturnValue(10);

  it('mock', () => {
    expect(randomNumber(10, 2)).toBe(5);
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber()).toBe(10);
  });
});