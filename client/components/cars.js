/* We need...
  - Navbar
  - carCard components
*/
import React, {Component} from 'react'
import {SingleCar} from './SingleCar'

export default class Cars extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <SingleCar />
      </div>
    )
  }
}
