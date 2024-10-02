const User = require('../model/User'); 
const Address = require('../model/Address'); 
const UserDTO = require('../dto/request/UserDtoreq'); 
const ResponseDTO = require('../dto/response/ResponseDto'); 
const { sequelize } = require('../config/database'); 
const bcrypt = require('bcryptjs');

class UserService {

 // Create a new user and associated address
async createUser(userData) {
  console.log('Request body in service:', userData);
  let t;
  try {
    console.log('try t in service:', userData);
 t = await sequelize.transaction();

  } catch (error) {
    console.log('catch t in service:', error);

  }

  try {
      // Map request body to UserDTO
      const userDTO = new UserDTO(userData);
      console.log('userDTO body in service:', userDTO);

      // Create and save the address first
      const address = await Address.create({
          street_address: userDTO.streat,
          city: userDTO.city,
          state: userDTO.state,
          postal_code: userDTO.postalCode,
          country: userDTO.country,
      }, { transaction: t });
      console.log('address body in service:', address);

      // Create the user with a reference to the created address
      const user = await User.create({
          username: userDTO.username,
          phone: userDTO.phone,
          firstName: userDTO.firstName,
          middleName: userDTO.middlename,
          lastname: userDTO.lastName,
          email: userDTO.email,
          language: userDTO.language,
          loginattempt: 0,
          loginstatus: "INACTIVE",
          addressId: address.id,
      }, { transaction: t });

      // Commit the transaction if all operations succeed
      await t.commit();
      return new ResponseDTO('success', 'User created successfully', user);
  } catch (error) {
      await t.rollback();
      console.error('Error creating user:', error);
      throw new ResponseDTO('error', error.message);
  }
}


  async getAllUsers() {
    console.log('Sequelize instance get:', sequelize);
    return await User.findAll();
  }

  async getUserById(id) {
    return await User.findByPk(id);
  }

  async updateUser(id, userData) {
    const user = await User.findByPk(id);
    if (user) {
      await user.update(userData);
      return user;
    }
    throw new Error('User not found');
  }

  async deleteUser(id) {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      return { message: 'User deleted' };
    }
    throw new Error('User not found');
  }
  
  async  approveUser(username) {
    const saltRounds = 10; // Number of salt rounds for bcrypt
    const password = generatePassword(); // Function to generate a strong password
  
    try {
      // Start a transaction if required
      const t = await sequelize.transaction();
  
      // Find the user based on the provided username
      let user = await User.findOne({ where: { username } });
  
      if (!user) {
        throw new Error('User not found');
      }
  
      // Hash the generated password
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      user = await User.update(
        {
          updatedby: 'admin', 
          pin: hashedPassword, 
          loginstatus: 'PENDING',
          addressId: address.id, 
        },
        {
          where: { username }, 
          transaction: t, 
        }
      );
  
      // Commit the transaction
      await t.commit();
  
      console.log('User approved successfully');
      return password; 
    } catch (error) {
      if (t) await t.rollback(); 
      console.error('Error approving user:', error);
    }
  }
  
  // Example function to generate a strong random password
  async generatePassword() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!';
    let password = '';
    const passwordLength = 12; 
  
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
  
    return password; 
  }
  // findByUsername = async (username) => {
    async  findByUsername  (username) {
    try {
        const user = await User.findOne({ where: { username } }); 
        if (!user) {
            return new ResponseDTO('error', 'User not found');
        }
        return new ResponseDTO('success', 'User found', user);
    } catch (error) {
        console.error('Error finding user by username:', error);
        throw new ResponseDTO('error', 'Internal server error');
    }
  };
  
}

module.exports = new UserService();
