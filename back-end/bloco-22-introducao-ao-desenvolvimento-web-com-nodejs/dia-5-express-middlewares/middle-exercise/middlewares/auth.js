const auth = (req, res, next) => {
  const { authorization: authToken } = req.headers;

  const tokenReg = /^[a-zA-Z0-9]$/;

  const isTokenValid = authToken.length === 12 && !authToken.match(tokenReg);

  if (!isTokenValid) return res.status(401).json({ message: 'invalid token' });

  next();
};

module.exports = auth;
