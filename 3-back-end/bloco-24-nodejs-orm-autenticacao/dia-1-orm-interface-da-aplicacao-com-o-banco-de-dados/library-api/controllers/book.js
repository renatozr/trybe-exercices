const { Book } = require('../models');

const findAll = async (_req, res) => {
  try {
    const books = await Book.findAll({ order: [
      ['title', 'ASC'],
      ['createdAt', 'DESC']
    ]});

    return res.status(200).json(books);
  } catch (e) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json(book);
  } catch (e) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const findByAuthor = async (req, res) => {
  try {
    const { author } = req.query;
    const book = await Book.findOne({ where: { author } });

    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json(book);
  } catch (e) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
}

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await Book.create({ title, author, pageQuantity });

    return res.status(201).json(newBook);
  } catch (e) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const update = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;

    const [updateBook] = await Book.update(
      { title, author, pageQuantity },
      { where: { id } }
    );

    if (!updateBook) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json({ message: 'Livro atualizado com sucesso' });
  } catch (e) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.destroy({ where: { id } });

    if (!deleteBook) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json({ message: 'Livro excluído com sucesso' });
  } catch (e) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  findAll,
  findById,
  findByAuthor,
  create,
  update,
  destroy
};