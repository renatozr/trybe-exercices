const validateUsername = (req, res, next) => {
  const { username } = req.body;

  const isUsernameValid = username && username.length > 3;

  if (!isUsernameValid) return res.status(400).json({ message: 'invalid username' });

  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;

  const emailReg = /\S+@\S+\.\S+/;

  const isEmailValid = email && email.match(emailReg);

  if (!isEmailValid) return res.status(400).json({ message: 'invalid email' });

  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  const passReg = /^[0-9]*$/;

  const isPasswordValid = password && password.match(passReg) && password.length >= 4 && password.length <= 8;

  if (!isPasswordValid) return res.status(400).json({ message: 'invalid password' });

  next();
};

module.exports = {
  validateUsername,
  validateEmail,
  validatePassword
};
