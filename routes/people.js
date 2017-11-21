var express = require('express')
var controller = require('../controllers/people')
var middleware = require('../middleware/people')
var router = express.Router()

router.post('/', middleware, controller.post)

router.get('/login', function(req, res, next) {
  res.send('Logado!?')
});

module.exports = router
