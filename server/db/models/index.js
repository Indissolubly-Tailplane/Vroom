const User = require('./user')
const Car = require('./car')
const Order = require('./order')
const Cart = require('./cart')

Cart.hasMany(User)
Cart.hasMany(Car)

Car.belongsToMany(Order, {through: 'orderedCars'})
Order.belongsToMany(Car, {through: 'orderedCars'})

module.exports = {
  User,
  Car,
  Order,
  Cart
}
