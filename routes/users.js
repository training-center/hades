var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
  res.send('Logado!?');
});

router.post('/mentor', () => {
  
});

module.exports = router;
