/* We need...
  - NavBar
  - Single Car Cart Component
  - Total
  - Checkout Button
*/
import SingleCarCartRevised from './singleCarCartRevised'
import Footer from './Footer'
import {Link} from 'react-router-dom'
import {updateTotal} from '../store/car'

import React, {Component} from 'react'
import { connect } from 'react-redux';
// import SingleCar from './SingleCar';

class Cart extends Component {
  constructor() {
    super()
    this.state = {
      cartItems: 0,
    }
    this.handleRemoveInCart = this.handleRemoveInCart.bind(this)
  }

  componentDidMount() {
    this.setState({cartItems: window.sessionStorage.length})
    // convert price to Dollar Formar

    let totalPrice = 0
    let cars = Object.entries(window.sessionStorage).map(car =>
      JSON.parse(car[1])
    )
    for (let i = 0; i < cars.length; i++) {
      totalPrice += cars[i].price;
      // this.props.updateTotal(totalPrice);
    }
    console.log('TOTAL PRICE:', totalPrice)
    this.props.updateTotal(totalPrice);
    console.log('CART TOTAL FROM PROPS:', this.props.cartTotal)
    // this.setState({cartTotal: totalPrice})
    // TOTAL PRICE IS WHAT WE NEED TO PASS TO STRIPE CHECKOUT
  }

  handleRemoveInCart = evt => {
    this.setState({
      cartItems: this.state.cartItems - 1
    })
  }

  render() {
    const numberWithCommas = x => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    if (this.state.cartItems === 0) {
      return (
        <center>
          <h1>Cart is empty!</h1>
        </center>
      )
    } else {
      return (
        <div>
          <center>
            <h4>Cart</h4>
            <div id="cartContainer">
              <div className="ui items">
                {Object.entries(window.sessionStorage).map((item, idx) => (
                  <SingleCarCartRevised
                    key={idx}
                    car={JSON.parse(item[1])}
                    carKeyInlocalStorage={item[0]}
                    handleRemove={this.handleRemoveInCart}
                    totalPrice={this.props.cartTotal}
                  />
                ))}
              </div>
            </div>
            <div id="checkoutContainer">
              {/* <h1>Total Price: ${numberWithCommas(this.props.cartTotal)}</h1> */}
              <Link to={`/confirmation`}>
                <button className="ui purple button" type="button">
                  Order confirmation
                </button>
                </Link>
              <button>
              <Link to="/checkout" className="ui blue button">
              Checkout
              </Link>
              </button>
            </div>
          </center>
          <Footer />
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  cartTotal: state.car.cartTotal
})

const mapDispatchToProps = dispatch => {
  return {
    updateTotal: (total) => {
      dispatch(updateTotal(total));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
