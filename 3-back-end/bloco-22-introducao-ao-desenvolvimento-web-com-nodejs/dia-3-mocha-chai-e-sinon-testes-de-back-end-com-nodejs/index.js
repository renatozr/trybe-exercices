const fs = require('fs').promises;

const verifyNumber = (num) => {
  if (typeof num !== 'number') return 'o valor deve ser um número';

  if (num > 0) return 'positivo';
  if (num < 0) return 'negativo';
  if (num == 0) return 'neutro';
};

const writeContentInFile = async (fileName, content) => {
  try {
    await fs.writeFile(fileName, content);
    
    return 'ok';
  } catch (err) {
    console.error(err);
  }
};

module.exports = { verifyNumber, writeContentInFile };