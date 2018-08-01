'use strict'

// Assertions
const chai = require('chai')
const expect = chai.expect
const chaiThings = require('chai-things')
chai.use(chaiThings)

const db = require('../db')
const Order = db.model('order')

describe('Order Model Tests', () => {
  describe('Order model', () => {
    describe('Validations', () => {
      it('requires email', async () => {
        const order = Order.build()

        try {
          await order.validate()
          throw Error(
            'validation was successful but should have failed without `email`'
          )
        } catch (err) {
          expect(err.message).to.contain('name cannot be null')
        }
      })
      it('requires shipped', async () => {
        const order = Order.build()
        try {
          await order.validate()
          throw Error(
            'validation was successful but should have failed without `shipped`'
          )
        } catch (err) {
          expect(err.message).to.contain('name cannot be null')
        }
      })
    })
  })
})
