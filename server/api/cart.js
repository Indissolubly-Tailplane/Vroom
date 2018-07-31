const router = require('express').Router()
const {Car} = require('../db/models')
const {User} = require('../db/models')
const {Cart} = require('../db/models')
const asyncHandler = require('express-async-handler');
const stripe = require("stripe")("pk_test_NIADJgaPnph0TGWHkcqwcW7V");

//get cars by user Id

router.get('/cart/:userId', asyncHandler(async(req, res, next) => {
  const userId = req.params.userId
  const carsByUser = await Cart.findAll({
    where: {
      userId
    },
    include: [{
      model: Car,
      through: {where: {userId : req.param.userId}},

    }]
  })

  res.send(carsByUser);
}))

router.post("/charge", async (req, res) => {
    let {status} = await stripe.charges.create({
      amount: req.body.purchaseTotal,
      currency: "usd",
      description: "An example charge",
      source: req.body.tokenId
    });
    // ALSO SEND ORDER INFORMATION TO DB
    res.json({status});
});

module.exports = router
