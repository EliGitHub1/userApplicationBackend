const express = require('express');
const userController = require('../controllers/userController')

const router = express.Router();

router.get('/getUsers', userController.getUsers);
router.post('/addUser',  userController.postAddUser );


module.exports = router;
