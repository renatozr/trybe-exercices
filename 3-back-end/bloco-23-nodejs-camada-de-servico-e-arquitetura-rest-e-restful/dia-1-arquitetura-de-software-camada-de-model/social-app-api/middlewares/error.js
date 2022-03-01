const error = (err, req, res, next) => {
  res.status(500).json({ message: `Erro: ${err.message}` });
};

module.exports = error;