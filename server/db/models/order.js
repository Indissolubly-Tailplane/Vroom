const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    },
    allowNull: false
  },
  shipped: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Order
