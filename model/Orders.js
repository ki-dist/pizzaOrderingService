const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Orders = sequelize.define('Orders', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  menu_id: {
    type: DataTypes.BIGINT,
    references: {
      model: 'Menu',
      key: 'id',
    },
  },
  orderdBy: DataTypes.STRING,
  orderedOn: DataTypes.DATE,
  tobeDelivered: DataTypes.DATE,
  orderNumber: DataTypes.INTEGER,
  status: DataTypes.STRING,
  updatedBy: DataTypes.STRING,
  updatedOn: DataTypes.DATE,
}, {
  tableName: 'orders',
  timestamps: false,
});

module.exports = Orders;
