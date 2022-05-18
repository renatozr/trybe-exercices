const error = (err, _req, res, _next) => {
  res.status(500).json({ message: `Erro: ${err.message}` });
};

module.exports = error;
