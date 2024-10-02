const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Address = sequelize.define('Address', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
  },
  street_address: DataTypes.STRING,
  city: DataTypes.STRING,
  state: DataTypes.STRING,
  postal_code: DataTypes.STRING,
  country: DataTypes.STRING,
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'address',
  timestamps: false,
});

module.exports = Address;
