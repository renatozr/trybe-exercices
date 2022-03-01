const requiredFieldMessage = (field) => `O campo '${field}' é obrigatório`;

const validateNewUser = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  
  switch (true) {
    case !firstName:
      res.status(400).json({ error: true, message: requiredFieldMessage('firstName') });
      break;

    case !lastName:
      res.status(400).json({ error: true, message: requiredFieldMessage('lastName') });
      break;

    case !email:
      res.status(400).json({ error: true, message: requiredFieldMessage('email') });
      break;

    case !password:
      res.status(400).json({ error: true, message: requiredFieldMessage('password') });
      break;

    case password.length < 6:
      res.status(400).json({ error: true, message: "O campo 'password' deve ter pelo menos 6 caracteres" });
      break;

    default:
      next();
  }
};

module.exports = {
  validateNewUser,
};