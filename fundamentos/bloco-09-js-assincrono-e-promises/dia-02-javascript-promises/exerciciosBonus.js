const sumRandomNumbers = () => {
  const randomNumbers = [];
  
  while (randomNumbers.length !== 10) {
    randomNumbers.push(Math.floor(Math.random() * 50 + 1));
  };

  randomNumbers.forEach((elm, idx, arr) => {
    arr[idx] = elm ** 2;
  })

  const sumRandomNums = randomNumbers.reduce((acc, cur) => acc + cur);

  if (sumRandomNums >= 8000) {
    throw new Error();
  }

  return sumRandomNums;
}

const sumArrayFromSum = (sum) => [2, 3, 5, 10].map((elm) => sum / elm).reduce((acc, cur) => acc + cur);

const fetchPromise = async () => {
  try {
    const sum = await sumRandomNumbers();
    const sumFromSum = await sumArrayFromSum(sum);
  } catch (error) {
    console.log("É mais de oito mil! Essa promise deve estar quebrada!");
  }
};

fetchPromise();