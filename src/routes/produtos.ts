import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ produtos: [] });
});

router.get('/:id', (req, res) => {
  const {id} = req.params; // imprimindo os parametros da rota
  res.json({id, name: 'teclado XYZ', price:90 });// criando uma rota dinamica para o servidor
});

export default router;