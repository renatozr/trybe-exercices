const longestWord = string => {
  const words = string.split(' ');
  let longest = '';
  for (let word of words) {
    // if (word.length > longest.length) {
    //   longest = word;
    // }
    longest = word.length > longest.length ? word : longest;
  }
  return longest;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")); // retorna 'aconteceu'