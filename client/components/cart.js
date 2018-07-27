/* We need...
  - NavBar
  - Single Car Cart Component
  - Total
  - Checkout Button
*/
import SingleCarCart from './singleCarCart'
import {fetchCar} from '../store/car'

import React, {Component} from 'react'
// import SingleCar from './SingleCar';

export default class Cart extends Component {
  constructor() {
    super()
    this.state = {
      cartItems: 0
    }
    this.handleRemoveInCart = this.handleRemoveInCart.bind(this)
  }

  componentDidMount() {
    this.setState({cartItems: window.localStorage.length})
  }

  handleRemoveInCart = evt => {
    this.setState({
      cartItems: this.state.cartItems - 1
    })
  }

  render() {
    if (this.state.cartItems === 0) {
      return <h1>Cart is empty!</h1>
    } else {
      return (
        <center>
          <div>
            <h1>Cart</h1>
          </div>
          <div className="ui three stackable cards">
            {Object.entries(window.localStorage).map((item, idx) => (
              <SingleCarCart
                key={idx}
                car={JSON.parse(item[1])}
                carKeyInlocalStorage={item[0]}
                handleRemove={this.handleRemoveInCart}
              />
            ))}
          </div>
          <div>
            <h1>Total Price: {}</h1>
            <button>Checkout</button>
          </div>
        </center>
      )
    }
  }
}
