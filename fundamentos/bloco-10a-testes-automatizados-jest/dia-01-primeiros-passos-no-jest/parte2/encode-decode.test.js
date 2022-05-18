const { it, expect } = require('@jest/globals');
const { encode, decode } = require('./encode-decode');

describe('Testando as funções encode e decode', () => {

  it('Teste se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });

  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  });

  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('b, v, d, q, t')).not.toBe('1, 2, 3, 4, 5');
    expect(decode('12, 32, 7, 4, 11')).not.toBe('a, e, i, o, u');
  });

  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('Era uma vez').length).toBe(11);
    expect(decode('2r1 5m1 v2z').length).toBe(11);
  });
});