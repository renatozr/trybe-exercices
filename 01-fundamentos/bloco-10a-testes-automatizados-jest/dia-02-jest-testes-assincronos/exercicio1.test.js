// 1 - Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em 
// letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('Testando a função assíncrona uppercase', (done) => {
  uppercase('era uma vez', (result) => {
    try {
      expect(result).toBe('ERA UMA VEZ');
      expect(result).not.toBe('ERa UMA VEZ');
      done();
    } catch (error) {
      done(error);
    }
  });
});