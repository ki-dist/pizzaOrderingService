const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Replace with your DB config

const UserRole = sequelize.define('UserRole', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  userid: {
    type: DataTypes.BIGINT,
    references: {
      model: 'User',
      key: 'id',
    },
  },
  role_name: {
    type: DataTypes.BIGINT,
    references: {
      model: 'Roles',
      key: 'id',
    },
  },
}, {
  tableName: 'user_role',
  timestamps: false,
});

module.exports = UserRole;
