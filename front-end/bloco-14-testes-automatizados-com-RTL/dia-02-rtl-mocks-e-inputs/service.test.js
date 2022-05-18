const { expect, it } = require('@jest/globals');
const service = require('./service');
jest.mock("./service");

describe('Testando funções do módulo "service.js"', () => {

  it('Testando a função "randomNumber"', () => {

    service.randomNumber.mockReturnValue(10);
    service.randomNumber();

    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalledTimes(2);

    service.randomNumber.mockReset();

    service.randomNumber.mockImplementationOnce((a, b) => a / b);

    expect(service.randomNumber(10, 2)).toBe(5);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber()).toBeUndefined();

    service.randomNumber.mockReset();

    service.randomNumber.mockImplementationOnce((a, b, c) => a * b * c);

    expect(service.randomNumber(2, 3, 4)).toBe(24);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledWith(2, 3, 4);
  });

  service.toUpperCase.mockImplementation((str) => str.toLowerCase());
  service.firstChar.mockImplementation((str) => str[str.length - 1]);
  service.concat.mockImplementation((str1, str2, str3) => str1 + str2 + str3);

  it('Testando a função "toUpperCase"', () => {

    service.toUpperCase('aAa')

    expect(service.toUpperCase).toHaveBeenCalled();
    expect(service.toUpperCase('TESTE')).toBe('teste');
    expect(service.toUpperCase).toHaveBeenCalledTimes(2);
    expect(service.toUpperCase).toHaveBeenCalledWith('TESTE');
  });

  it('Testando a função "firstChar"', () => {

    service.firstChar('aAa')

    expect(service.firstChar).toHaveBeenCalled();
    expect(service.firstChar('teste')).toBe('e');
    expect(service.firstChar).toHaveBeenCalledTimes(2);
    expect(service.firstChar).toHaveBeenCalledWith('teste');
  });

  it('Testando a função "concat"', () => {

    service.concat('aAa', 'bBb', 'cCc');

    expect(service.concat).toHaveBeenCalled();
    expect(service.concat('a', 'b', 'c')).toBe('abc');
    expect(service.concat).toHaveBeenCalledTimes(2);
    expect(service.concat).toHaveBeenCalledWith('a', 'b', 'c');
  });

  it('Testando "requestDogPictures"', () => {

    service.requestDogPictures
      .mockImplementation((url) => new Promise((resolve, reject) => {
      if (url === 'https://dog.ceo/api/breeds/image/random') {
        resolve('request sucess');
      } else {
        reject('request failed');
      }
    }));

    service.requestDogPictures();

    expect(service.requestDogPictures).toHaveBeenCalled();
    expect(service.requestDogPictures('https://dog.ceo/api/breeds/image/random'))
      .resolves
      .toBe('request sucess');
    expect(service.requestDogPictures).toHaveBeenCalledWith('https://dog.ceo/api/breeds/image/random');
    expect(service.requestDogPictures('https://github.com/'))
      .rejects
      .toBe('request failed');
    expect(service.requestDogPictures).toHaveBeenCalledWith('https://github.com/');
    expect(service.requestDogPictures).toHaveBeenCalledTimes(3);
  });
});