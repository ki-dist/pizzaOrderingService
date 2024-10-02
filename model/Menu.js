const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Menu = sequelize.define('Menu', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  title: DataTypes.STRING,
  content: DataTypes.STRING,
  price: DataTypes.DECIMAL,
  restaurant_id: {
    type: DataTypes.BIGINT,
    references: {
      model: 'Restaurant',
      key: 'id',
    },
  },
  registeredBy: DataTypes.STRING,
  updatedby: DataTypes.STRING,
  registeredOn: DataTypes.DATE,
  updatedOn: DataTypes.DATE,
}, {
  tableName: 'menu',
  timestamps: false,
});

module.exports = Menu;
