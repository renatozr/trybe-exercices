const notFound = (req, res) => {
  res.status(404).json({ message: `A rota '${req.path}' não existe`});
};

module.exports = notFound;