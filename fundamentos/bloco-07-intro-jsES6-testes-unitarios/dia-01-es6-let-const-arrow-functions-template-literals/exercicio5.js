const tryber = string => 'Tryber x aqui!'.replace('x', string);

const arraySkills = ['Criatividade', 'Perspicácia', 'Raciocínio Lógico', 'Boa convivência', 'Evolução Contínua'];

const skillsTryber = stringTryber => {

  let skillsString = ``;

  for (let skill of arraySkills.sort()) {
    skillsString += `
  -${skill};`;
  }
  
  let resultString = `${stringTryber} Minhas cinco principais habilidades são: ${skillsString} 
  #goTrybe.`;

  return resultString;
}

console.log(skillsTryber(tryber('Renato')));