const strFunc = require('../src/strFunc');

test('testando as funções do strFunc', () => {
  const upperCase = jest
    .spyOn(strFunc, 'upperCase')
    .mockImplementation((str) => str.toLowerCase());
  upperCase('ABC');

  expect(upperCase).toHaveBeenCalled();
  expect(upperCase).toHaveBeenCalledTimes(1);
  expect(upperCase).toHaveBeenCalledWith('ABC');
  expect(upperCase('ABC')).toBe('abc');


  upperCase.mockRestore();
  upperCase('abc');

  expect(upperCase).toHaveBeenCalled();
  expect(upperCase).toHaveBeenCalledTimes(1);
  expect(upperCase).toHaveBeenCalledWith('abc');
  expect(strFunc.upperCase('abc')).toBe('ABC');
});