module.exports = (req, res) => {
  res.status(404).json({ message: `A rota '${req.path}' não existe`});
};
