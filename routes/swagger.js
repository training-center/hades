var express = require('express');
const swaggerUi =  require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
var router = express.Router();

// Não foi usado o GET aqui, porque o server do swagger não renderiza
router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;
