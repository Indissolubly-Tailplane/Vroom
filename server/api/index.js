const router = require('express').Router()

router.use('/cars', require('./cars'))
router.use('/orders', require('./orders'))
<<<<<<< HEAD
router.use('/carts', require('./carts'))
=======
router.use('/users', require('./users'))
>>>>>>> c8ef7d9eaa2cd2e352c2ac7b3ba36ce140d02867

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router
