const UserModel = require('../models/User');

const create = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  const { id } = await UserModel.create(firstName, lastName, email, password);

  res.status(201).json({ id, firstName, lastName, email });
};

const getAll = async (req, res, next) => {
  const users = await UserModel.getAll();

  res.status(200).json(users);
};

const getById = async (req, res, next) => {
  const { id } = req.params;

  const user = await UserModel.getById(id);

  if (!user) return res.status(404).json({ error: true, message: 'Usuário não encontrado' });

  res.status(200).json(user);
};

module.exports = {
  create,
  getAll,
  getById,
};