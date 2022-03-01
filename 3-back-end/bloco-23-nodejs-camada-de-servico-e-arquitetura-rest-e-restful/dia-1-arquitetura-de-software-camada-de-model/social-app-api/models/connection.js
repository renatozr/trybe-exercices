const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'renatozr',
  password: 'bella321',
  host: 'localhost',
  database: 'social_app',
});

module.exports = connection;