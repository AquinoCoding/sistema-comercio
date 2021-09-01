const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.render('cadcliente');
})

module.exports = router;