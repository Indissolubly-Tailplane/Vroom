'use strict'

// Assertions
const chai = require('chai')
const expect = chai.expect
const chaiThings = require('chai-things')
chai.use(chaiThings)

const db = require('../db')
const Car = db.model('car')
// import {expect} from 'chai'
// import {me, logout} from './user'
// import axios from 'axios'
// import MockAdapter from 'axios-mock-adapter'
// import configureMockStore from 'redux-npmock-store'
// import thunkMiddleware from 'redux-thunk'
// import history from '../history'

// const middlewares = [thunkMiddleware]
// const mockStore = configureMockStore(middlewares)
describe('Car Models Tests', () => {
  describe('Car model', () => {
    describe('Validations', () => {
      it('requires make', async () => {
        const car = Car.build()

        try {
          await car.validate()
          throw Error(
            'validation was successful but should have failed without `make`'
          )
        } catch (err) {
          expect(err.message).to.contain('name cannot be null')
        }
      })
    })
  })
})
