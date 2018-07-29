/* We need...
  - NavBar
  - Single Car Cart Component
  - Total
  - Checkout Button
*/
import SingleCarCartRevised from './singleCarCartRevised'
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
    // convert price to Dollar Formar
    const numberWithCommas = x => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    let totalPrice = 0
    let cars = Object.entries(window.localStorage).map(car =>
      JSON.parse(car[1])
    )
    for (let i = 0; i < cars.length; i++) {
      totalPrice += cars[i].price
    }
    // TOTAL PRICE IS WHAT WE NEED TO PASS TO STRIPE CHECKOUT

    if (this.state.cartItems === 0) {
      return <h1>Cart is empty!</h1>
    } else {
      return (
        <div>
          <center>
            <h4>Cart</h4>
            <div id="cartContainer">
              <div className="ui items">
                {Object.entries(window.localStorage).map((item, idx) => (
                  <SingleCarCartRevised
                    key={idx}
                    car={JSON.parse(item[1])}
                    carKeyInlocalStorage={item[0]}
                    handleRemove={this.handleRemoveInCart}
                    totalPrice={this.state.totalPrice}
                  />
                ))}
              </div>
            </div>
            <div id="checkoutContainer">
              <h1>Total Price: ${numberWithCommas(totalPrice)}</h1>
              <button className="ui blue button" type="button">
                Checkout
              </button>
            </div>
          </center>
        </div>
      )
    }
  }
}
