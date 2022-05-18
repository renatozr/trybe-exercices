const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const userRouter = require('./routers/userRouter');
const postsRouter = require('./routers/postsRouter');
const teamsRouter = require('./routers/teamsRouter');
const auth = require('./middlewares/auth');
const btc = require('./middlewares/btc');
const error = require('./middlewares/error');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/user', userRouter);

app.use('/posts', postsRouter);

app.use('/teams', teamsRouter);

app.get('/btc/price', [auth, rescue(btc.getPrice)]);

app.use(error);

app.all('*', (_req, res) => res.status(404).json({ message: 'Opsss, route not found!'}));

app.listen(3000, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
