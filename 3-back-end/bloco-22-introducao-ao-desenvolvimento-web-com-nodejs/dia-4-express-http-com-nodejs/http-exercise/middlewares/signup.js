const generateToken = require('../services/generateToken');

const signup = (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if (!email || !password || !firstName || !phone) {
    return res.status(401).json({ message: 'missing fields' });
  }

  res.status(200).json({ message: generateToken() });
};

module.exports = signup;