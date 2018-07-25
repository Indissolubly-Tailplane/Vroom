const router = require('express').Router()
const {Car} = require('../db/')
const asyncHandler = require('express-async-handler');


router.get('/', asyncHandler(async (req, res, next) => {
  const allCars = await Car.findAll({});
  res.json(allCars);
}))

router.get('/:id', asyncHandler(async (req,res,next) => {
  const carId = req.params.id;
  const car = await Car.findAll({where: {id:carId}})
  res.json(car);
}))


module.exports = router