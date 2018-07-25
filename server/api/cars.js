const router = require('express').Router()
const {Car} = require('../db/')
const asyncHandler = require('express-async-handler');


router.get('/', asyncHandler(async (req, res, next) => {
  const allCars = await Car.findAll({});
  res.json(allProjects);
}))
module.exports = router