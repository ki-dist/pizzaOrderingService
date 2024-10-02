const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Roles = sequelize.define('Roles', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  privilage: DataTypes.INTEGER,
  registeredBy: DataTypes.STRING,
  updatedby: DataTypes.STRING,
  registeredOn: DataTypes.DATE,
  updatedOn: DataTypes.DATE,
}, {
  tableName: 'roles',
  timestamps: false,
});

module.exports = Roles;
