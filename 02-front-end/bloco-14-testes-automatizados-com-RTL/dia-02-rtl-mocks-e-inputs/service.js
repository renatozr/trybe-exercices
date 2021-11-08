function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function toUpperCase(string) {
  return string.toUpperCase();
}

function firstChar(string) {
  return string[0];
}

function concat(string1, string2) {
  return string1 + string2;
}

function requestDogPictures() {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json());
}

module.exports = { randomNumber, toUpperCase, firstChar, concat, requestDogPictures };
