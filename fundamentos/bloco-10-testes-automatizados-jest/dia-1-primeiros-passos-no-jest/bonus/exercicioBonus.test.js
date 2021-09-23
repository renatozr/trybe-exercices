const { searchEmployee } = require('./exercicioBonus');

describe('Testa a função searchEmployee', () => {
  it('Testa se a função searchEmployee é definida', () => {
    expect(searchEmployee).toBeDefined();
  });
  it('Testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('Testa se searchEmployee retorna a informação consultada caso o parâmetros estejam corretos', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
    expect(searchEmployee('5569-4', 'lastName')).toBe('Jobs');
    expect(searchEmployee('4456-4', 'firstName')).toBe('Leila');
    expect(searchEmployee('1256-4', 'lastName')).toBe('Bezos');
    expect(searchEmployee('9852-2-2', 'specialities')).toEqual(['Ruby', 'SQL']);
    expect(searchEmployee('4678-2', 'specialities')).toEqual(['Backend']);
  });
  it("Testa se searchEmployee retorna o erro 'ID não identificada' caso o id passado não exista", () => {
    expect(() => { searchEmployee('1234', 'firstName') }).toThrowError(new Error('ID não identificada'));
  });
  it("Testa se searchEmployee retorna o erro 'Informação indisponível' caso a info requerida não exista", () => {
    expect(() => { searchEmployee('8579-6', 'nationality') }).toThrowError(new Error('Informação indisponível'));
  });
});