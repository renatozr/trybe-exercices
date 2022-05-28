function myFilter<T>(array: T[], callback: (elm: T, idx?: number, arr?: T[]) => boolean): T[] {
  const filteredArray: T[] = [];

  for (let i = 0; i < array.length; i += 1) {
    const isElmValid: boolean = callback(array[i], i, array);

    if(isElmValid) {
      filteredArray.push(array[i]);
    }
  }

  return filteredArray;
}

const myArray1: number[] = [1, 2, 3, 4, 5];
console.log(myArray1);

const myArray1Filtered = myFilter<number>(myArray1, (num) => num > 1 && num < 5);
console.log(myArray1Filtered);

const myArray2: string[] = ['Renato', 'José', 'Ranielle'];
console.log(myArray2);

const myArray2Filtered = myFilter<string>(myArray2, (name) => name.includes('o'));
console.log(myArray2Filtered);