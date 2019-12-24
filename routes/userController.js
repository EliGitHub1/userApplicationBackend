const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/getUsers', (req, res, next) => {
  res.send(
    '<h1>Hello world from getUsers</h1>'
    );
});

router.post('/addUser', (req, res, next) => {
  console.log(req.body)
  res.redirect('/users/getUsers')
});



module.exports = router;
