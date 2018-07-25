const router = require('express').Router()
const {Car} = require('../db/models/')
const {User} = require('../db/models')
const asyncHandler = require('express-async-handler');

//gets all cars

router.get('/', asyncHandler(async (req, res, next) => {
  console.log('here!')
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