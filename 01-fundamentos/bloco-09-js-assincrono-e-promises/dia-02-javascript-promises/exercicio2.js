const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const randomNumbers = [];
  
    while (randomNumbers.length !== 10) {
      randomNumbers.push(Math.floor(Math.random() * 50 + 1));
    };
  
    randomNumbers.forEach((elm, idx, arr) => {
      arr[idx] = elm ** 2;
    })
  
    const sumRandomNums = randomNumbers.reduce((acc, cur) => acc + cur);
  
    if (sumRandomNums <= 8000) {
      return resolve([2, 3, 5, 10].map((elm) => sumRandomNums / elm));
    }
  
    reject(console.log("É mais de oito mil! Essa promise deve estar quebrada!"));
  });
  promise
    .then((resolve) => console.log(resolve.reduce((acc, cur) => acc + cur)))
    .then(() => console.log('Promise resolvida'))
    .catch(() => console.log('Promise rejeitada'));

};

fetchPromise();