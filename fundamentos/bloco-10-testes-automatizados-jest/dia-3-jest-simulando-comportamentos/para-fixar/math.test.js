const math = require('./math');

// 1 - Faça o mock da funcão subtrair e teste sua chamada.
test('testar chamada da função subtrair', () => {
  math.subtrair = jest.fn();

  math.subtrair();
  expect(math.subtrair).toHaveBeenCalled();

  math.subtrair.mockClear();
});

//  2 - Faça o mock da função multiplicar e implemente como retorno padrão o valor ‘10’. Teste a chamada e o retorno.
test('testar chamada e retorno padrão de valor 10 da função multiplicar', () => {
  math.multiplicar = jest.fn()
  .mockReturnValue(10);

  math.multiplicar();
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar()).toBe(10);
});

// 3 - Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. 
// Teste a chamada, o retorno e os parâmetros passados.
// test('testar chamada, retorno e parâmetros passados da função somar', async () => {
//   const mockSomar = jest.spyOn(math, 'somar');

//   mockSomar(2, 3);
//   expect(mockSomar).toHaveBeenCalled();
//   expect(mockSomar).toHaveBeenCalledTimes(1);
//   expect(mockSomar).toHaveBeenCalledWith(2, 3);
//   await expect(mockSomar(2, 3)).resolves.toBe(5);
// });

// 4 - Faça o mock da função dividir e implemente um retorno padrão com o valor ‘15’. Implemente também os seguintes valores 
// para a primeira e segunda chamadas: ‘2’ e ‘5’. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.
test('testar chamada, retorno, parâmetros passados e quantas vezes a função dividir foi chamda', () => {
  math.dividir = jest.fn()
  .mockReturnValue(15)
  .mockReturnValueOnce(2)
  .mockReturnValueOnce(5);

  expect(math.dividir(1, 1)).toBe(2);
  expect(math.dividir).toHaveBeenCalled();
  expect(math.dividir).toHaveBeenCalledTimes(1);
  expect(math.dividir).toHaveBeenCalledWith(1, 1);

  expect(math.dividir(2, 2)).toBe(5);
  expect(math.dividir).toHaveBeenCalled();
  expect(math.dividir).toHaveBeenCalledTimes(2);
  expect(math.dividir).toHaveBeenCalledWith(2, 2);

  expect(math.dividir(3, 3)).toBe(15);
  expect(math.dividir).toHaveBeenCalled();
  expect(math.dividir).toHaveBeenCalledTimes(3);
  expect(math.dividir).toHaveBeenCalledWith(3, 3);
});

// 5 - Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno 
// padrão o valor ‘20’. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.
test('mock da função subtrair de modo que possa restaurar sua implementação original', () => {
  const mockSubtrair = jest.spyOn(math, 'subtrair');
  mockSubtrair
  .mockImplementation((a, b) => a * b)
  .mockReturnValue(20)


  expect(mockSubtrair(2, 3)).toBe(20);
  expect(mockSubtrair).toHaveBeenCalled();
  expect(mockSubtrair).toHaveBeenCalledTimes(1);
  expect(mockSubtrair).toHaveBeenCalledWith(2, 3);

  mockSubtrair.mockRestore();
  mockSubtrair.mockReturnValue(10);

  expect(mockSubtrair(4, 1)).toBe(10);
  expect(mockSubtrair).toHaveBeenCalled();
  expect(mockSubtrair).toHaveBeenCalledTimes(1);
  expect(mockSubtrair).toHaveBeenCalledWith(4, 1);
});