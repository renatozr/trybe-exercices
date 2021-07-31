let number = 71;
let divisible = 0;

for (let i = 1; i <= number; i += 1) {
    if (number % i == 0) {
        divisible += 1;
    }
}

if (divisible == 2) {
    console.log(number + " é um número primo.")
} else {
    console.log(number + " não é um número primo.")
}