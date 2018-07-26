const User = require('./user')
const Car = require('./car')

// Car.belongsToMany(User, { through: 'cart' });
// User.hasMany(Car);

Car.belongsToMany(User, {through: 'cart'})
User.belongsToMany(Car, {through: 'cart'})

// user.getCars()

module.exports = {
  User,
  Car
}
