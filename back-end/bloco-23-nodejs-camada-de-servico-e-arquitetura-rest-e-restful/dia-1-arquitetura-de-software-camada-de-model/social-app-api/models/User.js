const connection = require('./connection');

const UserService = require('../services/User');

const create = async (firstName, lastName, email, password) => {
  const [ { insertId } ] = await connection.execute(
    `INSERT INTO social_app.user
      (first_name, last_name, email, password)
    VALUES
      (?, ?, ?, ?);`,
    [firstName, lastName, email, password],
  );

  return { id: insertId };
};

const getAll = async () => {
  const [ users ] = await connection.execute(
    'SELECT * FROM social_app.user;',
  );

  return users.map(UserService.serialize);
};

const getById = async (id) => {
  const [ users ] = await connection.execute(
    'SELECT * FROM social_app.user WHERE id = ?;',
    [id],
  );

  return users.map(UserService.serialize)[0];
};

module.exports = {
  create,
  getAll,
  getById,
};