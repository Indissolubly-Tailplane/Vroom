/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Cars from './cars'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('UserHome', () => {
  let userHome

  beforeEach(() => {
    userHome = shallow(<Cars car="ferrari" />)
  })

  it('renders single car components', () => {
    expect(userHome.find('h3').text()).to.be.equal('Welcome cody@email.com')
  })
})
