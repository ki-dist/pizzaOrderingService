// controllers/authController.js
const AuthService = require('../service/AuthService'); 
const jwt = require('jsonwebtoken');
const { defineAbilitiesFor } = require('../service/AuthorizationService'); 

// User login logic
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Call AuthService to login the user
    const response = await AuthService.login({ username, password });

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Protected route to check menu access based on user role
exports.getMenu = (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Verify the JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = { id: decoded.id, role: decoded.role };

    // Define the user's abilities using CASL
    const ability = defineAbilitiesFor(user);

    // Check if the user can 'read' the 'Menu'
    if (ability.can('read', 'Menu')) {
      return res.json({ message: 'You can view the menu' });
    } else {
      return res.status(403).json({ error: 'Access Denied' });
    }
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
};
