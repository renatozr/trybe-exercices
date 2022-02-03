let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(variavel) {

    let arrayResult = [];

    for (let i of variavel) {

        for (let i2 of i) {

            if (i2 % 2 == 0) {

                arrayResult.push(i2);
            }
        }
    }
    return arrayResult;
}

console.log(arrayOfNumbers(vector));