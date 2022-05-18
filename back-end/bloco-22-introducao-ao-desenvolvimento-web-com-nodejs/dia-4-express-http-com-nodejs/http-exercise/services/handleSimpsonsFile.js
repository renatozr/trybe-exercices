const fs = require('fs/promises');

const read = async () => {
  const simpsonsJson = await fs.readFile('./simpsons.json');
  const simpsons = JSON.parse(simpsonsJson);

  return simpsons;
};

const write = async (newSimpsons) => {
  const newSimpsonsJson = JSON.stringify(newSimpsons);

  await fs.writeFile('./simpsons.json', newSimpsonsJson);
};

module.exports = {
  read,
  write,
};
