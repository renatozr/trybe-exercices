function verifySameLastChar(word, ending) {

    let reverseWord = word.split('').reverse().join('');
    let reverseEnding = ending.split('').reverse().join('');

    let result = true;
    for (let i = 0; i < reverseEnding.length; i += 1) {

        if (reverseWord[i] !== reverseEnding[i]) {
            result = false;
        }
    }
    return result;
}

console.log(verifySameLastChar('joaofernando', 'fernan'));