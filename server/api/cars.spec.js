const chai = require('chai')
const expect = chai.expect
const chaiThings = require('chai-things')
const chaiSpies = require('chai-spies')
const sinon = require('sinon')
chai.use(chaiThings)
chai.use(chaiSpies)

const app = require('../server/api')
const agent = require('supertest')(app)

describe('Car Routes', () => {
  describe('Back-end', () => {
    beforeEach(async () => {
      const testCar = await Car.create({
        make: 'Volvo'
      })
    })
  })
})
