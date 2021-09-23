// Desafio 10 do projeto Playground Functions refatorado
function techList(arrTech, name) {
  if (arrTech.length === 0) {
    return 'Vazio!';
  }
  return arrTech.sort().map((tech) => ({ tech, name }));
}

module.exports = techList;