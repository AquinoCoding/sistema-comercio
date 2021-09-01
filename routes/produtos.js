const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.render('produtos');
})
/*
router.get('/', async (req, res, next) => {
    try {
      const docs = await global.db.findAll();
      res.render('produtos', { title: 'Lista de Clientes', docs });
    } catch (err) {
      next(err);
    }
  })*/

module.exports = router;
