const router = require('express').Router()
const {Car} = require('../db/')
const {User} = require('../db/')
const asyncHandler = require('express-async-handler');

//gets all cars

router.get('/cars', asyncHandler(async (req, res, next) => {
  const allCars = await Car.findAll({});
  res.json(allCars);
}))


//gets car by id

router.get('/cars/:id', asyncHandler(async (req,res,next) => {
  const carId = req.params.id;
  const car = await Car.findAll({where: {id:carId}})
  res.json(car);
}))


//get cars by user Id

router.get('/cart/:userId', asyncHandler(async(req, res, next) => {
  const carsByUser = User.findAll({
    include: [{
      model: Car,
    }]
  });
  res.send(carsByUser);
}))


module.exports = router