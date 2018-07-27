const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Car = db.define('car', {
  make: {
    type: Sequelize.STRING,
    allowNull: false
  },
  model: {
    type: Sequelize.STRING,
    allowNull: false
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  quantity: {
    type: Sequelize.FLOAT,
    defaultValue: 0
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: 'https://i.ytimg.com/vi/UKKIUoNsG08/maxresdefault.jpg'
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Car
