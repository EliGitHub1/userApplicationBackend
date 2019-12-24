const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/add-user', (req, res, next) => {
  res.send('<h1>Hello world</h1>');
});

module.exports = router;
