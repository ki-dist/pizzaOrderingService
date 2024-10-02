const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const RoleMap = sequelize.define('RoleMap', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  pathid: {
    type: DataTypes.BIGINT,
    references: {
      model: 'Paths',
      key: 'id',
    },
  },
  name: DataTypes.STRING,
  registerdBy: DataTypes.STRING,
  updatedBy: DataTypes.STRING,
  registeredOn: DataTypes.DATE,
  updatedOn: DataTypes.DATE,
}, {
  tableName: 'role_map',
  timestamps: false,
});

module.exports = RoleMap;
