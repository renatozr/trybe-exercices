import express from 'express';
import 'express-async-errors';
import routes from './routes';
import errorHandler from './middlewares/errorHandler';
import createConnection from './models/connection';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
    this.errorHandler();

    createConnection();
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  private routes(): void {
    this.express.use(routes);
  }

  private errorHandler(): void {
    this.express.use(errorHandler);
  }
}

export default App;