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

const server = express(); // criando o servidor com express

server.use(helmet()); // Adicionando Helmet para segurança
server.use(express.json()); // Adicionando suporte a JSON
server.use(express.urlencoded({ extended: true })); // Adicionando suporte a URL-encoded
server.use(express.static(path.join(__dirname,'../public'))); // Adicionando suporte a arquivos estáticos

server.get('/ping', (req, res) => {
  res.json({ pong:true }); // criando uma rota estaticas para o servidor
});

server.get('/produtos', (req, res) => {
  res.json({ produtos: [] });
});

server.post('/produtos', (req, res) => {
  res.json({ produtos: [] });
});

server.get('/', (req, res) => {
let name = "Eduardo";
let idade = 20;
  res.json({name, idade}); // criando uma rota para o servidor
});

//criando rotas dinamicas

server.get('/produtos/:id', (req, res) => {
  const {id} = req.params; // imprimindo os parametros da rota
  res.json({id, name: 'teclado XYZ', price:90 });// criando uma rota dinamica para o servidor
});

server.get('/voos/:from/:to', (req, res) => {
  const {from, to} = req.params;

  res.json({
      fligth:{
        from: from.toUpperCase(),
        to: to.toUpperCase(),
        price: 123456
      }
  });
});

server.listen(3000, () => { 
  console.log('Server is running at http://localhost:3000');
}); // criando o servidor na porta 3000


