const handleSimpsonsFile = require('../services/handleSimpsonsFile');

const getAll = async (_req, res, next) => {
  try {
    const simpsons = await handleSimpsonsFile.read();
  
    res.status(200).json(simpsons);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const simpsons = await handleSimpsonsFile.read();

    const selectedSimpson = simpsons.find((s) => s.id === id);

    if (!selectedSimpson) return res.status(404).json({ message: 'simpson not found' });

    res.status(200).json(selectedSimpson);
  } catch (err) {
    next(err);
  }
};

const addNew = async (req, res, next) => {
  try {
    const { id, name } = req.body;

    const simpsons = await handleSimpsonsFile.read();
  
    const isIdAlreadyExists = simpsons.some((s) => s.id === id);

    if (isIdAlreadyExists) return res.status(409).json({ message: 'id already exists' });

    const newSimpsons = [...simpsons, { id, name }];

    await handleSimpsonsFile.write(newSimpsons);

    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  getById,
  addNew,
};
