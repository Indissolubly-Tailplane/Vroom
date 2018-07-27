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
  const carId = req.params.id;
  const car = await Car.findAll({where: {id:carId}})
  res.json(car);
}))

router.post("/charge", async (req, res) => {
    let {status} = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "An example charge",
      source: req.body
    });
    // ALSO SEND ORDER INFORMATION TO DB
    res.json({status});
});


//get cars by user Id

// router.get('/cart/:userId', asyncHandler(async(req, res, next) => {
//   const userId = req.params.userId
//   const carsByUser = await User.findAll({
//     include: [{
//       model: Car,
//       through: {where: {userId : req.param.userId}},

//     }]
//   })

//   res.send(carsByUser);
// }))

router.post


module.exports = router
