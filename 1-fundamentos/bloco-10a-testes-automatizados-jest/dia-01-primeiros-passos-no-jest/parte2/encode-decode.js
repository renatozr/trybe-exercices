// Desafio 9 do projeto Playground Functions refatorado
function encode(string) {
  const arrEncoded = string.split('').map((char) => {
    switch (char) {
      case 'a':
        return '1';
      case 'e':
        return '2';
      case 'i':
        return '3';
      case 'o':
        return '4';
      case 'u':
        return '5';
      default:
        return char;
    }
  });
  return arrEncoded.join('');
}

function decode(string) {
  const arrDecoded = string.split('').map((char) => {
    switch (char) {
      case '1':
        return 'a';
      case '2':
        return 'e';
      case '3':
        return 'i';
      case '4':
        return 'o';
      case '5':
        return 'u';
      default:
        return char;
    }
  });
  return arrDecoded.join('');
}

module.exports = { encode, decode };