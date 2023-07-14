import dotenv from 'dotenv';
import Server from './models/server.js';
import conectarDB from './config/config.js';

dotenv.config();

const server = new Server();

conectarDB();

server.listen();