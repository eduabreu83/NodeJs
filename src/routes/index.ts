import express from "express";  

const router = express.Router();

router.get('/ping', (req, res) => {
  res.json({ pong:true }); // criando uma rota estaticas para o servidor
});



router.get('/', (req, res) => {
let name = "Eduardo";
let idade = 20;
  res.json({name, idade}); // criando uma rota para o servidor
});


export default router