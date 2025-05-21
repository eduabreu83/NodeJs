import { ErrorRequestHandler, RequestHandler } from "express";

export const notFoundReqquest: RequestHandler = (req, res) => {
  res.status(404).json({
    error: "Rota não encontrada",
    message: "Digite a rota ou verifique a rota correta",
  });
}

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Erro interno do servidor",
    message: "Ocorreu um erro interno no servidor",
  });
}