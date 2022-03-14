const ProductsModel = require('../models/Products');

const add = async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductsModel.add(name, brand);

  res.status(201).json({ newProduct });
};

const getAll = async (_req, res) => {
  const products = await ProductsModel.getAll();

  res.status(200).json({ products });
};

const getById = async (req, res) => {
  const { id } = req.params;

  const product = await ProductsModel.getById(id);

  res.status(200).json({ product });
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name, brand } = req.body;

  await ProductsModel.update(id, name, brand);

  const updatedProduct = { id, name, brand };

  res.status(200).json({ updatedProduct });
};

const exclude = async (req, res) => {
  const { id } = req.params;

  const excludedProduct = await ProductsModel.exclude(id);

  res.status(200).json({ excludedProduct });
};

module.exports = {
  add,
  getAll,
  getById,
  update,
  exclude,
};