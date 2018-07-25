const User = require('./user');
const Car = require('./car');

Car.belongsTo(User, { through: 'cart' });
User.hasMany(Car);

module.exports = {
  User,
  Car,
};
