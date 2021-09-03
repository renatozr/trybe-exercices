// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua 
// função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como 
// parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    id4: callback('Renato Zanella Redoglia'),
  }
  return employees;
};
const employeeId = (name) => {
  const names = name.split(' ');
  let resultEmail = '';
  for (let i = 0; i < names.length; i += 1) {
    if (i === names.length - 1) {
      resultEmail += `${names[i].toLowerCase()}@trybe.com`;
    } else {
      resultEmail += `${names[i].toLowerCase()}_`;
    }
  }
  const result = {
    nomeCompleto: name,
    email: resultEmail,
  }
  return result;
}

console.log(newEmployees(employeeId));