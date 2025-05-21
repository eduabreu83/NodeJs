import express from "express";

const router = express.Router();

//criando rotas dinamicas

router.get('/:from/:to', (req, res) => {
  const {from, to} = req.params;

  res.json({
      fligth:{
        from: from.toUpperCase(),
        to: to.toUpperCase(),
        price: 123456
      }
  });
});


export default router;