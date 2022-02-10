const doMath = (num1, num2, num3) => new Promise((resolve, reject) => {
  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    reject('Informe apenas números');
    return;
  }

  const result = (num1 + num2) * num3;

  if (result < 500) {
    reject('Valor muito baixo');
    return;
  }

  resolve(result);
});

module.exports = doMath;