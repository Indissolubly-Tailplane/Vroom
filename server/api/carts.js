const router = require('express').Router()
const {Car} = require('../db/models')
const {Cart} = require('../db/models')
const asyncHandler = require('express-async-handler');

//get cars by user Id

router.get('/:userId', asyncHandler(async(req, res, next) => {
  const userId = req.params.userId
  const cart = await Cart.findAll({
    where: {
      userId
    }
  })
  res.send(cart);
}))

// router.post("/charge", async (req, res) => {
//     let {status} = await stripe.charges.create({
//       amount: req.body.purchaseTotal,
//       currency: "usd",
//       description: "An example charge",
//       source: req.body.tokenId
//     });
//     // ALSO SEND ORDER INFORMATION TO DB
//     res.json({status});
// });

module.exports = router
