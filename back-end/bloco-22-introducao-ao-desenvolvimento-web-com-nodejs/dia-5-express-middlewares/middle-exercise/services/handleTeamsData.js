const fs = require('fs/promises');

const readTeams = async () => {
  const teamsJson = await fs.readFile('teams.json');
  const teams = JSON.parse(teamsJson);

  return teams;
};

const writeTeams = async (newTeams) => {
  const newTeamsJson = JSON.stringify(newTeams);

  await fs.writeFile('teams.json', newTeamsJson);
}

module.exports = {
  readTeams,
  writeTeams,
};
