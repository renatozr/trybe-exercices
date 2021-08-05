function indexHighValue(array) {

    let highValue = array[0];
  
    for (let i of array) {
  
        if (i > highValue) {
  
            highValue = i;
        }
    }
    return array.indexOf(highValue);
}

function mostRepeatNumber(array) {

    let arrayRepeats = [];

    for (let i = 0; i < array.length; i += 1) {

        let repeats = 0;
        
        for (let i2 = 0; i2 < array.length; i2 += 1) {

            if (array[i] == array[i2]) {

                repeats += 1;
            }
        }
        arrayRepeats.push(repeats);
    }
    let mostRepeated = array[indexHighValue(arrayRepeats)];

    return mostRepeated;
}

console.log(mostRepeatNumber([2, 3, 2, 5, 8, 2, 3]));