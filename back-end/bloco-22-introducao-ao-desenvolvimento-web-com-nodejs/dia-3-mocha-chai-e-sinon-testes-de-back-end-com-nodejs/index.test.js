const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs').promises;

const { verifyNumber, writeContentInFile } = require('./index');

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

describe('Função "writeContentInFile"', () => {
  describe('Quando passado o nome do arquivo e o conteúdo que será escrito', () => {
    before(() => {
      sinon.stub(fs, 'writeFile').resolves();
    });

    after(() => {
      fs.writeFile.restore();
    });

    it('escreve o arquivo e retorna uma string "ok"', async () => {
      const result = await writeContentInFile('./arquivo1.txt', 'conteúdo do arquivo1');

      expect(result).equals('ok');
    });
  });
});