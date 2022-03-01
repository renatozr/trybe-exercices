const serialize = ({ id, first_name, last_name, email, password }) => ({
  id,
  firstName: first_name,
  lastName: last_name,
  email,
  password,
});

module.exports = {
  serialize,
};