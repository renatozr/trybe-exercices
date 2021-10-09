// Compare dois objetos para verificar se são idênticos ou não

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
describe('Comparando os objetos', () => {
  
  test('Comparando obj1 com obj2', () => {
    expect(obj1).toEqual(obj2);
  });

  test('Comparando obj1 com obj3', () => {
    expect(obj1).not.toEqual(obj3);
  });

  test('Comparando obj2 com obj3', () => {
    expect(obj2).not.toEqual(obj3);
  });
});