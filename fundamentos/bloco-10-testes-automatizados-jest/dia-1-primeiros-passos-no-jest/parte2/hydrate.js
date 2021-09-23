function hydrate(string) {
  const totalDrinks = string.match(/\d+/g).reduce((acc, cur) => acc + parseInt(cur), 0);
  const s = totalDrinks === 1 ? '' : 's';
  return `${totalDrinks} copo${s} de água`;
}

module.exports = hydrate;