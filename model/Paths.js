const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Paths = sequelize.define('Paths', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  path: DataTypes.STRING,
  registeredOn: DataTypes.DATE,
  updatedOn: DataTypes.DATE,
  registeredBy: DataTypes.STRING,
  updatedBy: DataTypes.STRING,
}, {
  tableName: 'paths',
  timestamps: false,
});

module.exports = Paths;
