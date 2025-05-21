/*
este foi criado sem o express e sem o typescript

import {createServer} from 'node:http';

const server = createServer((req, res) => {
  res.end('Hello World\n');
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
*/

//criando o servidor com express
import express from 'express'; //import { createServer } from 'node:http'; // importando o createServer do node
import helmet from 'helmet';// / importando o helmet para segurança
//instalamo a biblioteca Helmet para proteger o servidor - npm install helmet
import path from 'path'; // importando o path para manipular caminhos de arquivos
import router from './routes'; // importando as rotas do servidor
import { errorHandler, notFoundReqquest } from './routes/errorhandler';


const server = express(); // criando o servidor com express

server.use(helmet()); // Adicionando Helmet para segurança
server.use(express.json()); // Adicionando suporte a JSON
server.use(express.urlencoded({ extended: true })); // Adicionando suporte a URL-encoded
server.use(express.static(path.join(__dirname,'../public'))); // Adicionando suporte a arquivos estáticos

server.use('/', router); // Adicionando as rotas do servidor
server.use(notFoundReqquest)// Adicionando o middleware de rota não encontrada

server.use(errorHandler) // Adicionando o middleware de erro


server.listen(3000, () => { 
  console.log('Server is running at http://localhost:3000');
}); // criando o servidor na porta 3000


