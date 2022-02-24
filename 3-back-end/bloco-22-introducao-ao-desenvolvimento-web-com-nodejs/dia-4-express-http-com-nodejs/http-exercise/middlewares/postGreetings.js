module.exports = (req, res) => {
  const { name, age } = req.body;

  if (age <= 17) res.status(401).json({ message: 'Unauthorized' });

  res.status(200).json({ message: `Hello, ${name}!`});
};
