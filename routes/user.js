const express = require('express');
const userController = require('../controllers/userController')

const router = express.Router();

router.get('/getUsers', userController.getUsers);
router.post('/addUser',  userController.postAddUser );
router.delete('/deleteUser',  userController.deleteUser );
router.put('/updateUser',  userController.updateUser );

module.exports = router;
