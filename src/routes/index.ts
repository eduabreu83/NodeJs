import express from "express";
import produtosRouter from "./produtos"; // importando as rotas de produtos
import voosRouter from "./voos"; // importando as rotas de voos 

const router = express.Router();

router.use('/produtos', produtosRouter); // Adicionando as rotas de produtos
router.use('/voos', voosRouter); // Adicionando as rotas de voos

router.get('/ping', (req, res) => {
  res.json({ pong:true }); // criando uma rota estaticas para o servidor
});

router.get('/', (req, res) => {
let name = "Eduardo";
let idade = 20;
  res.json({name, idade}); // criando uma rota para o servidor
});


export default router