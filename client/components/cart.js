/* We need...
  - NavBar
  - Single Car Cart Component
  - Total
  - Checkout Button
*/
import SingleCarCart from './singleCarCart'
import { fetchCar } from '../store/car';

import React, { Component } from 'react'
// import SingleCar from './SingleCar';


export default class Cart extends Component {
  constructor() {
    super()
    this.state = {
      cartItems:0,
    }
    this.handleRemoveInCart = this.handleRemoveInCart.bind(this);
  }

  componentDidMount(){
    this.setState ({ cartItems: window.localStorage.length });
  }

 handleRemoveInCart = (evt) => {
    this.setState({
        cartItems: this.state.cartItems -1
      })
    }
    
    // add car to cart
     
    // addToCar = () => {window.localStorage.setItem(`item${window.localStorage.length + 1}`, JSON.stringify(
    //     {
    //       id: 2,
    //       make: 'Buggati',
    //       model: 'Chiron',
    //       color: 'Black-Blue',
    //       price: 3260000,
    //       description: '=/9pkjfksgjf',
    //       image:
    //         'https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2017/03/2018-Bugatti-Chiron-125.jpg',
    //       year: 2012,
    //       createdAt: '2018-07-25T21:22:50.098Z',
    //       updatedAt: '2018-07-25T21:22:50.098Z'
    //     }
    //   ))}

    render() {
    if(this.state.cartItems === 0){
        return <h1>Cart is empty!</h1>
      }else {
    return <center>
        <div>
          <h1>Cart</h1>
        </div>
      {Object.entries(window.localStorage).map((item,idx)=> <SingleCarCart key={idx} car={JSON.parse(item[1])} carKeyInlocalStorage={item[0]} handleRemove={this.handleRemoveInCart} />)}
        <div>
          <h1>Total Price: {}</h1>
          <button>Checkout</button>
        </div>
      </center>
      }
    
  }
}


