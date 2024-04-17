import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import RecipeRoutes from './routes/recipeRoutes.js';

class App {
  constructor() {
    this.app = express();
    this.setMiddlewares();
    this.setRoutes();
  }np

  setMiddlewares() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(morgan('dev'));
  }

  setRoutes() {
    this.app.get('/', (req, res) => {
      res.send('Hello World!');
    });
    this.app.use('/recipes', RecipeRoutes);
  }

  listen(port) {
    this.app.listen(port, '0.0.0.0',() => {
      console.log(`🚀 Listening on port http://localhost:${port}`);
    });
  }
}

export default App;
