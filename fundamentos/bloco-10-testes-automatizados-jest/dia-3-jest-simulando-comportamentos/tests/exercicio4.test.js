const strFunc = require('../src/strFunc');
jest.mock('../src/strFunc');

test('testando as funções do strFunc', () => {

  strFunc.upperCase.mockImplementation((str) => str.toLowerCase());
  strFunc.upperCase('ABC');

  expect(strFunc.upperCase).toHaveBeenCalled();
  expect(strFunc.upperCase).toHaveBeenCalledTimes(1);
  expect(strFunc.upperCase).toHaveBeenCalledWith('ABC');
  expect(strFunc.upperCase('ABC')).toBe('abc');


  strFunc.firstLetter.mockImplementation((str) => str[str.length - 1]);
  strFunc.firstLetter('era uma vez');

  expect(strFunc.firstLetter).toHaveBeenCalled();
  expect(strFunc.firstLetter).toHaveBeenCalledTimes(1);
  expect(strFunc.firstLetter).toHaveBeenCalledWith('era uma vez');
  expect(strFunc.firstLetter('era uma vez')).toBe('z');


  strFunc.concat.mockImplementation((str1, str2, str3) => str1 + str2 + str3);
  strFunc.concat('um', 'dois', 'três');

  expect(strFunc.concat).toHaveBeenCalled();
  expect(strFunc.concat).toHaveBeenCalledTimes(1);
  expect(strFunc.concat).toHaveBeenCalledWith('um', 'dois', 'três');
  expect(strFunc.concat('um', 'dois', 'três')).toBe('umdoistrês');
});