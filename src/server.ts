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
import express from 'express';

const server = express();
server.get('/', (req, res) => {
  res.send('Eu estou aprendendo essa porra');
});
server.listen(3000, () => { 
  console.log('Server is running at http://localhost:3000');
});