const Joi = require("joi");
const CepsModel = require("../models/Ceps");

const validateCep = (cep) => {
  if (cep.match(/\d{5}-?\d{3}/)) return true;
  return false;
};

const cepNumbers = (cep) => cep.replace("-", "");

const findById = async (cep) => {
  const validation = validateCep(cep);

  if (!validation) {
    return {
      error: { code: "invalidData", message: "CEP inválido" },
      code: 400,
    };
  }

  const result = await CepsModel.findById(cepNumbers(cep));

  if (!result) {
    return {
      error: { code: "notFound", message: "CEP não encontrado" },
      code: 404,
    };
  }

  return { result, code: 200 };
};

const create = async (cep, logradouro, bairro, localidade, uf) => {
  const { error } = Joi.object({
    cep: Joi.string()
      .not()
      .empty()
      .pattern(/\d{5}-\d{3}/)
      .required(),
    logradouro: Joi.string().not().empty().max(50).required(),
    bairro: Joi.string().not().empty().max(20).required(),
    localidade: Joi.string().not().empty().max(20).required(),
    uf: Joi.string().not().empty().max(2).required(),
  }).validate({
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  });

  if (error) {
    return {
      error: { code: "invalidData", message: error.message },
      code: 400,
    };
  }

  const onlyNumbersCep = cepNumbers(cep);

  const isCepAlreadyExists = await CepsModel.findById(onlyNumbersCep);

  if (isCepAlreadyExists) {
    return {
      error: { code: "alreadyExists", message: "CEP já existente" },
      code: 409,
    };
  }

  await CepsModel.create(onlyNumbersCep, logradouro, bairro, localidade, uf);

  return { code: 201 };
};

module.exports = {
  findById,
  create,
};
