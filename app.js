import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import userRoutes from './routes/userRoutes.js';
//import {pool} from './config.js';
import { fileURLToPath } from 'url';
import swaggerDocs from './swagger.js';
import dotenv from 'dotenv';
import * as path from 'node:path';
import mainRoutes from './routes/mainRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.production.development',
});

class App {
  constructor() {
    this.app = express();
    this.setViewEngine();
    this.setStatic();
    this.setMiddlewares();
    this.setRoutes();
    this.initSwagger();
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

  setViewEngine() {
    this.app.set('view engine', 'ejs');
    this.app.set('views', path.join(__dirname, 'src', 'views'));
  }

  setStatic() {
    this.app.use(express.static(path.join(__dirname, 'src/public')));
  }

  setMiddlewares() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(morgan('dev'));
  }

  initSwagger() {
    swaggerDocs(this.app, process.env.PORT || 3000);
  }

  setRoutes() {
    this.app.use('/', mainRoutes);
    this.app.use('/user', userRoutes);
  }

  listen(port) {
    const serverUrl = process.env.SERVER_URL;
    this.app.listen(port, '0.0.0.0', () => {
      console.log(`🚀 Listening on port ${serverUrl}:${port}`);
    });
  }
}

export default App;
