import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import userRoutes from './routes/userRoutes.js';
import {pool} from './config.js';

class App {
  constructor() {
    this.app = express();
    this.setMiddlewares();
    this.setRoutes();
    //this.connectDatabase(); ## 나중에 주석 해제할 것
  }

  connectDatabase() {
    pool.connect((err, client, release) => {
      if (err) {
        return console.error('Error acquiring client', err.stack);
      }
      console.log('Database Connected Successfully');
      release();
    });
  }

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
    this.app.use('/user', userRoutes);
  }

  listen(port) {
    this.app.listen(port, '0.0.0.0',() => {
      console.log(`🚀 Listening on port http://localhost:${port}`);
    });
  }
}

export default App;
