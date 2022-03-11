const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: "localhost",
  database: "cep_lookup",
});

module.exports = connection;
