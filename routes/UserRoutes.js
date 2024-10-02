const express = require('express');
const userController = require('../controller/UserController');
const router = express.Router();

router.post('/create', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.get('/:username', userController.getUserByUsername);
router.post('/:username', userController.approveUser);

module.exports = router;
