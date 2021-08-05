function indexLowerValue(array) {

    let lowerValue = array[0];

    for (let i of array) {

        if (i < lowerValue) {

            lowerValue = i;
        }
    }
    return array.indexOf(lowerValue);
}

console.log(indexLowerValue([2, 4, 6, 7, 10, 0, -3]));