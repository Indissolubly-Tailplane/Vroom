const router = require('express').Router()
const {Order} = require('../db/models')
const {Car} = require('../db/models')
const asyncHandler = require('express-async-handler')

//get all orders

// good use case for query string
router.get(
  '/email',
  asyncHandler(async (req, res, next) => {
    console.log('hello from Order api/orders')
    const allOrders = await Order.findAll({
      where: {
        email: req.body.email
      }
    })
    res.json(allOrders)
  })
)

// good use case for protected route / gatekeeper middleware
// only Admins should be able to see all orders
router.get(
  '/',
  asyncHandler(async (req, res, next) => {
    console.log('hello from Order api/orders')
    const allOrders = await Order.findAll({
      include: [
        {
          model: Car
        }
      ]
    })
    res.json(allOrders)
  })
)

// good use case for protected route / gatekeeper middleware
// check req.user for Admin Id or current user

//get order by Id
router.get(
  '/:orderId',
  asyncHandler(async (req, res, next) => {
    const orderId = req.params.orderId
    const order = await Order.findById(orderId)
    res.json(order)
  })
)

// remove dead code

// get order by email
// router.get(
//   '/:email',
//   asyncHandler(async (req, res, next) => {
//     const userEmail = req.params.email
//     const order = await Order.findAll({
//       where: {
//         email: userEmail
//       }
//     })
//     res.send(order)
//   })
// )

router.post(
  '/',
  asyncHandler(async (req, res, next) => {
    const newOrder = await Order.create(req.body)
    res.json(`Order ${newOrder.id} has been created!`)
  })
)

router.put(
  '/:orderId',
  asyncHandler(async (req, res, next) => {
    const orderId = req.params.orderId
    const order = await Order.findById(orderId)
    order.update(req.body)
    res.json(`Order ${orderId} has been updated!`)
  })
)
module.exports = router
