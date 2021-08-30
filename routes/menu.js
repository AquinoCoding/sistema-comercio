const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.render('menu');
})


module.exports = router;