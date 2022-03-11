const CepsService = require("../services/Ceps");

const findById = async (req, res) => {
  const { cep } = req.params;

  const { result, error, code } = await CepsService.findById(cep);

  if (error) return res.status(code).json({ error });

  res.status(code).json(result);
};

const create = async (req, res) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const { error, code } = await CepsService.create(
    cep,
    logradouro,
    bairro,
    localidade,
    uf
  );

  if (error) return res.status(code).json({ error });

  res.status(code).json({
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  });
};

module.exports = {
  findById,
  create,
};
