const fetch = require('node-fetch');

const getPrice = async (_req, res) => {
  const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC');
  const data = await response.json();

  res.status(200).json(data);
};

module.exports = {
  getPrice,
};
