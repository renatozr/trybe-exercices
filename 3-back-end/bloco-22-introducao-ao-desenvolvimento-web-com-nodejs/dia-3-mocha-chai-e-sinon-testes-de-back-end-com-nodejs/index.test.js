const { expect } = require('chai');
const verifyNumber = require('./index');

describe('Função "verifyNumber"', () => {
  describe('Quando o número passado é positivo', () => {
    it('retorna a string "positivo"', () => {
      const result = verifyNumber(5);

      expect(result).equals('positivo');
    });  
  });

  describe('Quando o número passado é negativo', () => {
    it('retorna a string "negativo"', () => {
      const result = verifyNumber(-5);

      expect(result).equals('negativo');
    });  
  });

  describe('Quando o número passado é zero', () => {
    it('retorna a string "neutro"', () => {
      const result = verifyNumber(0);

      expect(result).equals('neutro');
    }); 
  });

  describe('Quando o valor passado não é um número', () => {
    it('retorna a string "o valor deve ser um número"', () => {
      const result = verifyNumber({ });

      expect(result).equals('o valor deve ser um número');
    }); 
  });
});
