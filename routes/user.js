const express = require('express');
const userController = require('../controllers/userController')

const router = express.Router();

const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: false }));
router.get('/getUsers', userController.getUsers);
router.post('/addUser',  userController.postAddUser );


module.exports = router;