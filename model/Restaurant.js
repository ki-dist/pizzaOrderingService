const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Restaurant = sequelize.define('Restaurant', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  owner: DataTypes.STRING,
  phone: DataTypes.STRING,
  mail: DataTypes.STRING,
  website: DataTypes.STRING,
  address_id: {
    type: DataTypes.BIGINT,
    references: {
      model: 'Address',
      key: 'id',
    },
  },
  registeredBy: DataTypes.STRING,
  updatedby: DataTypes.STRING,
  registeredOn: DataTypes.DATE,
  updatedOn: DataTypes.DATE,
}, {
  tableName: 'restaurant',
  timestamps: false,
});

module.exports = Restaurant;
