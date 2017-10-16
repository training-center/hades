var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({ msg: 'Plataforma training-center' });
});

module.exports = router;

