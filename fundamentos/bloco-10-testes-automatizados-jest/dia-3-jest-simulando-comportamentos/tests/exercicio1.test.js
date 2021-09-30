const randomNumber = require('../src/exercicio1.js')

describe('randomNumber function', () => {
  randomNumber = jest.fn()
    .mockReturnValue(10);
  it('Foi chamada, quantas vezes e o seu retorno', () => {
    randomNumber();
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber()).toBe(10);
  });
});