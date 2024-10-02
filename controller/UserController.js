const UserService = require('../service/UserService');

// Create a new user
exports.createUser = async (req, res) => {
  // const createUser = async (req, res) => {

  console.log('Request body:', req.body); // Log request data

  try {
    console.log(' inside try :'); 

    const response = await UserService.createUser(req.body);
    res.status(201).json(response);
  } catch (error) {
    console.log(' inside catch :' +error); 

    res.status(400).json(error); 
  }
};


// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await UserService.getUserById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update user by ID
exports.updateUser = async (req, res) => {
  try {
    const user = await UserService.updateUser(req.params.id, req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Delete user by ID
exports.deleteUser = async (req, res) => {
  try {
    const message = await UserService.deleteUser(req.params.id);
    res.status(200).json(message);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
exports.getUserByUsername = async (req, res) => {
  const { username } = req.params; 
  try {
      const response = await userService.findByUsername(username);
      return res.status(response.status === 'success' ? 200 : 404).json(response);
  } catch (error) {
      console.error('Error fetching user by username:', error);
      return res.status(500).json(new ResponseDTO('error', 'Internal server error'));
  }
};

exports.approveUser = async (req, res) => {
  const { username } = req.params; 
  try {
      const response = await userService.approveUser(username);
      return res.status(response.status === 'success' ? 200 : 404).json(response);
  } catch (error) {
      console.error('Error Approving user by username:', error);
      return res.status(500).json(new ResponseDTO('error', 'Internal server error'));
  }
};