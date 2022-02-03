const fetch = require('node-fetch')

const getDogPictures = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await response.json();
  return data;
}

module.exports = getDogPictures;