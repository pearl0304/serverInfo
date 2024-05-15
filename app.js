import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import userRoutes from './routes/userRoutes.js';
import { fileURLToPath } from 'url';
import swaggerDocs from './swagger.js';
import dotenv from 'dotenv';
import * as path from 'node:path';
import mainRoutes from './routes/mainRoutes.js';

dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env.development',
});

import { connectPostgres } from './config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class App {
  constructor() {
    this.app = express();
    this.setViewEngine();
    this.setStatic();
    this.setMiddlewares();
    this.setRoutes();
    this.initSwagger();
    this.connectDatabase();
  }

  async connectDatabase() {
    try {
      await connectPostgres();
    } catch (error) {
      process.exit(1);
    }
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
      console.log(`🚀 Listening on port http://${serverUrl}:${port}`);
    });
  }
}

export default App;
