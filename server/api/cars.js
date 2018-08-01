const router = require('express').Router()
const {Car} = require('../db/models/')
const {User} = require('../db/models')
const asyncHandler = require('express-async-handler');
const stripe = require("stripe")("pk_test_NIADJgaPnph0TGWHkcqwcW7V");

//gets all cars

router.get('/', asyncHandler(async (req, res, next) => {
  console.log('here!')
  const allCars = await Car.findAll({});
  res.json(allCars);
}))


//gets car by id

router.get('/:id', asyncHandler(async (req,res,next) => {
  console.log('hereeee')
  const carId = req.params.id;
  const car = await Car.findAll({where:{id:carId}})
  res.json(car);
}))


router.post("/charge", async (req, res) => {
    let {status} = await stripe.charges.create({
      amount: req.body.purchaseTotal,
      currency: "usd",
      description: "An example charge",
      source: req.body.tokenId
    });
    res.json({status});
});

router.put('/:id', asyncHandler(async (req, res, next) => {
  const carId = req.params.id;
  const car = await Car.findById(carId);
  await car.update({quantity: car.quantity -1})
  res.json(car);
}))

module.exports = router
