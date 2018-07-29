const User = require('./user')
const Car = require('./car')
const Order = require('./order')

// Car.belongsToMany(User, { through: 'cart' });
// User.hasMany(Car);

Car.belongsToMany(User, {through: 'cart'})
User.belongsToMany(Car, {through: 'cart'})

// user.getCars()

module.exports = {
  User,
  Car,
  Order
}
