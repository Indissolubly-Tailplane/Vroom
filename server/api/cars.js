const router = require('express').Router()
const {Car} = require('../db/models/')
// remove unused variables
const {User} = require('../db/models')
const asyncHandler = require('express-async-handler')
const stripe = require('stripe')('pk_test_NIADJgaPnph0TGWHkcqwcW7V')

//gets all cars

router.get(
  '/',
  asyncHandler(async (req, res, next) => {
    // remove console.log statements
    console.log('here!')
    const allCars = await Car.findAll({})
    res.json(allCars)
  })
)

//gets car by id

router.get(
  '/:id',
  asyncHandler(async (req, res, next) => {
    const carId = req.params.id
    // change `findAll` to `findById`
    const car = await Car.findAll({where: {id: carId}})
    res.json(car)
  })
)

// currently `/cars/charge`
// move to its own route
router.post('/charge', async (req, res) => {
  let {status} = await stripe.charges.create({
    amount: 2000,
    currency: 'usd',
    description: 'An example charge',
    source: req.body
  })
  // ALSO SEND ORDER INFORMATION TO DB
  res.json({status})
})

// remove dead code

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

module.exports = router
