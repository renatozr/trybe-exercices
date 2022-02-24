const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;

  res.status(200).json({ message: `Hello, ${name}!`});
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (age <= 17) res.status(401).json({ message: 'Unauthorized' });

  res.status(200).json({ message: `Hello, ${name}!`});
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.get('/simpsons', async (_req, res, next) => {
  try {
    const simpsonsJson = await fs.readFile('./simpsons.json');
    const simpsons = JSON.parse(simpsonsJson);
  
    res.status(200).json(simpsons);
  } catch (err) {
    next(err);
  }
});

app.get('/simpsons/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const simpsonsJson = await fs.readFile('./simpsons.json');
    const simpsons = JSON.parse(simpsonsJson);

    const selectedSimpson = simpsons.find((s) => s.id === id);

    if (!selectedSimpson) res.status(404).json({ message: 'simpson not found' });

    res.status(200).json(selectedSimpson);
  } catch (err) {
    next(err);
  }
});

app.post('/simpsons', async (req, res, next) => {
  try {
    const { id, name } = req.body;

    const simpsonsJson = await fs.readFile('./simpsons.json');
    const simpsons = JSON.parse(simpsonsJson);
  
    const isIdAlreadyExists = simpsons.some((s) => s.id === id);

    if (isIdAlreadyExists) res.status(409).json({ message: 'id already exists' });

    const newSimpsons = [...simpsons, { id, name }];
    const newSimpsonsJson = JSON.stringify(newSimpsons);

    await fs.writeFile('./simpsons.json', newSimpsonsJson);

    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

app.all('*', (req, res) => {
  res.status(404).json({ message: `A rota '${req.path}' não existe`});
});

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: `${err}` });
});

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
