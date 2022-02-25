const crypto = require('crypto');

const generateToken = (n) => crypto.randomBytes(n / 2).toString('hex');

module.exports = generateToken;