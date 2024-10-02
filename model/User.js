const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  pin: {
    type: DataTypes.STRING,
    unique: true,
  },
  phone: DataTypes.STRING,
  firstName: DataTypes.STRING,
  middleName: DataTypes.STRING,
  lastname: DataTypes.STRING,
  language: DataTypes.STRING,
  loginattempt: DataTypes.INTEGER,
  loginstatus: DataTypes.STRING,
  registeredBy: DataTypes.STRING,
  updatedby: DataTypes.STRING,
  registeredOn: DataTypes.DATE,
  updatedOn: DataTypes.DATE,
  addressId: {
    type: DataTypes.BIGINT,
    references: {
      model: 'Address',
      key: 'id',
    },
  },
}, {
  tableName: 'user',
  timestamps: false,
});

module.exports = User;
