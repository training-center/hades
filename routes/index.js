const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ msg: 'Plataforma training-center' });
});

module.exports = router;
