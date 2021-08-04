function indexHighValue(array) {
  let arrayHighValue = array;
  let HighValue = arrayHighValue[0];
  let indexResult;
  for (let i = 0; i < arrayHighValue.length; i += 1) {
    if (arrayHighValue[i] > HighValue) {
      HighValue = arrayHighValue[i];
      indexResult = i;
    }
  }
  return indexResult;
}

console.log(indexHighValue([2, 3, 6, 7, 10, 1]));