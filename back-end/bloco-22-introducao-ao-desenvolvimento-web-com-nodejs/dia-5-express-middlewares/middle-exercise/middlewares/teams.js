const { readTeams, writeTeams } = require('../services/handleTeamsData');

const getAll = async (_req, res) => {
  const teams = await readTeams();

  res.status(200).json({ teams });
};

const invalidDataResponse = (res) => res.status(400).json({ message: 'invalid data' });

const validateName = (req, res, next) => {
  const { name } = req.body;

  const isNameValid = name && name.length > 5;

  if (!isNameValid) return invalidDataResponse(res);

  next();
};

const validateInitials = (req, res, next) => {
  const { initials } = req.body;

  const isInitialsValid = initials && initials.length <= 3 && initials === initials.toUpperCase();

  if (!isInitialsValid) return invalidDataResponse(res);

  next();
};

const validateCountry = (req, res, next) => {
  const { country } = req.body;

  const isCountryValid = country && country.length > 3;

  if (!isCountryValid) return invalidDataResponse(res);

  next();
};

const addNew = async (req, res) => {
  const { name, initials, country, league } = req.body;

  const teams = await readTeams();

  const newTeam = {
    id: teams.length,
    name,
    initials,
    country,
    league: league ? league : null,
  };

  const newTeams = [...teams, newTeam];

  await writeTeams(newTeams);

  res.status(201).json(newTeam);
};

module.exports = {
  getAll,
  validateCountry,
  validateInitials,
  validateName,
  addNew,
};