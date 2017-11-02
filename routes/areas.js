var express = require('express');
var controller = require('../controllers/areas');
var areaMiddleware = require('../middleware/areas');
var router = express.Router();

router.get('/', controller.get);

router.post('/', areaMiddleware, controller.post);

router.put('/:id', areaMiddleware, controller.put);

module.exports = router;
