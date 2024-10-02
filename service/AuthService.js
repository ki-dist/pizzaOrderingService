const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/User'); 
const { sequelize } = require('../config/database'); 

const AuthService = {
  async signup(userDetails) {
    const { adminUsername, email, password, phoneNumber, restaurantName, location } = userDetails;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    const newUser = await User.create({
      adminUsername,
      email,
      password: hashedPassword,
      phoneNumber,
      restaurantName,
      location,
      loginStatus: 'PENDING',
    });
    
    const token = jwt.sign({ id: newUser.id, role: newUser.role }, process.env.JWT_SECRET);
    return { token, user: newUser };
  },

  async login({ username, password }) {
    const user = await User.findOne({ where: { adminUsername: username } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
    return { token, user };
  }
};

module.exports = AuthService;
