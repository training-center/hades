var express = require('express');
var controller = require('../controllers/areas');
var areaMiddleware = require('../middleware/areas');
var router = express.Router();

router.get('/', function(req, res, next) {
  controller.get(req, res);
});

router.post('/', areaMiddleware, function(req, res, next) {
  controller.post(req, res);
});

router.put('/:id', areaMiddleware, function(req, res, next) {
  controller.put(req, res);
});

module.exports = router;
