// 2 - Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário 
// é encontrado, e também um teste para o caso em que o usuário não é encontrado.

const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) => new Promise((resolve, reject) => {
  const result = users.find((user) => user.id === id);

  if (result) {
    return resolve(result);
  }

  return reject(new Error(`User with ${id} not found.`));
});

const getUserName = (userId) => findUserById(userId).then((user) => user.name);

describe('Testando a função getUserName', () => {
  it('Teste com id existente', () => {
    return expect(getUserName(1)).resolves.toBe('Mark');
  });
  it('Teste com id não existente', () => {
    return expect(getUserName(3)).rejects.toEqual(new Error('User with 3 not found.'));
  });
});