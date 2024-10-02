const express = require('express');
const authController = require('../controller/AuthController'); 

const router = express.Router();

// Route for user login
router.post('/login', authController.login);

// Protected route to get the menu based on authorization
router.get('/menu', authController.getMenu);

module.exports = router;
