const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrAnimals = Animals.filter((animal) => animal.age === age);
      if (arrAnimals.length === 0) {
        return reject('Nenhum animal com essa idade!');
      };

      return resolve(arrAnimals);
    }, 100);
  })
);

const getAnimal = (age) => (
  findAnimalByAge(age).then((animals) => animals)
);
// ---------------------

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animais com a idade procurada', () => {
    test('Retorne um array de objetos dos animais', () => {
      expect.assertions(1);
      return getAnimal(2).then(animals => {
        expect(animals).toEqual([{ name: 'Soneca', age: 2, type: 'Dog' }])
      });
    });
  });

  describe('Quando não existe o animal com a idade procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal(7).catch(error =>
        expect(error).toEqual('Nenhum animal com essa idade!')
      );
    });
  });
});