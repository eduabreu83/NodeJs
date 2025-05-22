import { RequestHandler } from 'express';

// criando um middleware para interceptar a requisição
export const interferir: RequestHandler = (req, res, next) => {
  
  let logged = true;

  if (logged) {
    next(); // se o usuario estiver logado, continua a requisição
  } else {
    res.status(403).json({error: "middleware não interceptou a requisição"}); // criando uma rota estaticas para o servidor
  }
}