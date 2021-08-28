// 
const factorial = number => {
  if (number === 0) {
    return 1;
  }
  let result = number;
  while (number > 2) {
    number -= 1;
    result *= number;
  }
  return result;
}
console.log(factorial(4));

// função recursiva
const factorial2 = number => number === 0 ? 1 : number * factorial2(number - 1);
console.log(factorial2(4));
