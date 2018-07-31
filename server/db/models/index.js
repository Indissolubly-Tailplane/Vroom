const User = require('./user')
const Car = require('./car')
const Order = require('./order')
const Cart = require('./cart')

// Car.belongsToMany(User, { through: 'cart' });
// User.hasMany(Car);

// Car.belongsToMany(User, {through: 'cart'})
// User.belongsToMany(Car, {through: 'cart'})

Cart.hasMany(User)
Cart.hasMany(Car)

Car.belongsToMany(Order, {through: 'orderedCars'})
Order.belongsToMany(Car, {through: 'orderedCars'})

// User.belongsToMany(Order, {through: 'usersOrders'})
// Order.belongsToMany(User, {through: 'usersOrders'})

// user.getCars()

module.exports = {
  User,
  Car,
  Order,
  Cart
}
