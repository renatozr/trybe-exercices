const auth = (req, res, next) => {
  const { authorization: auth } = req.headers;

  if (!auth || auth.length !== 16) return res.status(401).json({ message: 'Token inválido!' });

  next();
};

module.exports = auth;