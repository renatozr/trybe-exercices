const express = require('express');
const generateToken = require('../services/generateToken');

const {
  validateUsername,
  validateEmail,
  validatePassword
} = require('../middlewares/userValidation');

const router = express.Router();

router.post('/register', [
  validateUsername,
  validateEmail,
  validatePassword,
  (_req, res) => res.status(201).json({ message: 'user created' })
]);

router.post('/login', [
  validateEmail,
  validatePassword,
  (_req, res) => res.status(200).json({ token: generateToken(12) })
]);

module.exports = router;