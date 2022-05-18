const connection = require("./connection");

const findById = async (cep) => {
  const [result] = await connection.execute(
    "SELECT * FROM cep_lookup.ceps WHERE cep = ?;",
    [cep]
  );

  return result[0];
};

const create = async (cep, logradouro, bairro, localidade, uf) => {
  await connection.execute(
    `INSERT INTO cep_lookup.ceps
      (cep, logradouro, bairro, localidade, uf)
    VALUES
      (?, ?, ?, ?, ?);`,
    [cep, logradouro, bairro, localidade, uf]
  );
};

module.exports = {
  findById,
  create,
};
