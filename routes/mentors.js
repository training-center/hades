var express = require('express');
var router = express.Router();
var controller = require('../controllers/mentores');
var middlewares = require('../middleware/mentor');

router.get('/', function(req, res, next) {
  
});

router.post('/', middlewares, (req, res) => {  
  controller(req.body, res);
});

module.exports = router;
