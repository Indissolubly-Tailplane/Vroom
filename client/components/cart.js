/* We need...
  - NavBar
  - Single Car Cart Component
  - Total
  - Checkout Button
*/
import {SingleCarCart} from './singleCarCart'

import React, {Component} from 'react'

export default class Cart extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <center>
        <div>
          <h1>Cart</h1>
        </div>
        <SingleCarCart />
        <div>
          <h1>Total Price: {}</h1>
          <button>Checkout</button>
        </div>
      </center>
    )
  }
}
