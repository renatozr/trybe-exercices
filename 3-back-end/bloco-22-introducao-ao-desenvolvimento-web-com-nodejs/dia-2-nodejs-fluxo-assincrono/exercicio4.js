const fs = require('fs').promises;

const getSimpsonsData = async () => {
  const jsonData = await fs.readFile('simpsons.json', 'utf8');

  const data = JSON.parse(jsonData);

  return data;
}

const printCharData = async () => {
  const data = await getSimpsonsData();

  data.forEach(({ id, name }) => {
    console.log(`${id} - ${name}`);
  });
};

const getChar = async (id) => {
  try {
    const data = await getSimpsonsData();

    const simpsonsChar = data.find((char) => char.id == id);

    if (!simpsonsChar) {
      throw new Error('id não encontrado');
    }

    console.log(simpsonsChar);
  } catch (err) {
    console.log(err);
  }
};

const removeChar6And10 = async () => {
  try {
    const data = await getSimpsonsData();

    const newData = data.filter(({ id }) => id !== '6' && id !== '10');

    const newDataJson = JSON.stringify(newData);

    fs.writeFile('simpsons.json', newDataJson);
  } catch (err) {
    console.log(err);
  }
};

const createSimpsonFamilyJson = async () => {
  try {
    const data = await getSimpsonsData();

    const newData = data.filter(({ id }) => ['1', '2', '3', '4'].includes(id));

    const newDataJson = JSON.stringify(newData);

    fs.writeFile('simpsonFamily.json', newDataJson);
  } catch (err) {
    console.log(err);
  }
}

const getSimpsonFamilyData = async () => {
  const jsonData = await fs.readFile('simpsonFamily.json', 'utf8');

  const data = JSON.parse(jsonData);

  return data;
}

const addNelsonToFamily = async () => {
  try {
    const simpsonsData = await getSimpsonsData();
    const familyData = await getSimpsonFamilyData();

    const nelsonData = simpsonsData.find(({ name }) => name === 'Nelson Muntz');

    const newData = [...familyData, nelsonData];

    const newDataJson = JSON.stringify(newData);

    fs.writeFile('simpsonFamily.json', newDataJson);
  } catch (err) {
    console.log(err);
  }
}

const replaceNelsonWithMaggie = async () => {
  try {
    const simpsonsData = await getSimpsonsData();
    const familyData = await getSimpsonFamilyData();

    const maggieData = simpsonsData.find(({ name }) => name === 'Maggie Simpson');

    const newData = familyData.map((char) => char.name === 'Nelson Muntz' ? maggieData : char);

    const newDataJson = JSON.stringify(newData);

    fs.writeFile('simpsonFamily.json', newDataJson);
  } catch (err) {
    console.log(err);
  }
}
