const express = require('express');
const controller = require('../controllers/areas');
const areaMiddleware = require('../middleware/areas');

const router = express.Router();

router.get('/', controller.get);
router.post('/', areaMiddleware, controller.post);
router.put('/:id', areaMiddleware, controller.put);

module.exports = router;
