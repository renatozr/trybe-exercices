function verificaPalindrome(palavra) {
    let palavraInversa = palavra.split('').reverse().join('');
    let ePalindrome = false;
    if (palavra === palavraInversa) {
        ePalindrome = true;
    }
    return ePalindrome;
}

console.log(verificaPalindrome('subinoonibus'));