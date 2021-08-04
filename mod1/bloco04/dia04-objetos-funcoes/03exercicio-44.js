function indexHighValue(array) {

  let highValue = array[0];

  for (let i of array) {

      if (i > highValue) {

          highValue = i;
      }
  }
  return array.indexOf(highValue);
}

console.log(indexHighValue([2, 3, 6, 7, 10, 1]));