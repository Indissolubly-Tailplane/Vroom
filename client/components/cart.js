/* We need...
  - NavBar
  - Single Car Cart Component
  - Total
  - Checkout Button
*/
import { SingleCarCart } from './singleCarCart'
import { fetchCar } from '../store/car';

import React, { Component } from 'react'
import { SingleCar } from './SingleCar';


export default class Cart extends Component {
  constructor() {
    super()
    this.state = {}
    //localStore.getItems
  }



  render() {


    // add car to cart
     
    window.localStorage.clear(); 
    window.localStorage.setItem(`item${window.localStorage.length + 1}`, JSON.stringify(
        {
          id: 2,
          make: 'Buggati',
          model: 'Chiron',
          color: 'Black-Blue',
          price: 3260000,
          description: '=/9pkjfksgjf',
          image:
            'https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2017/03/2018-Bugatti-Chiron-125.jpg',
          year: 2012,
          createdAt: '2018-07-25T21:22:50.098Z',
          updatedAt: '2018-07-25T21:22:50.098Z'
        }
      ))

    return <center>
        <div>
          <h1>Cart</h1>
        </div>
      {/* {Object.values(window.localStorage).map((item, idx) =>   <SingleCarCart key = {idx} car = {JSON.parse(item)} carKeyInlocalStorage= {item}/>)} */}
      {Object.entries(window.localStorage).map((item,idx)=> <SingleCarCart key={idx} car={JSON.parse(item[1])} carKeyInlocalStorage={item[0]} />)}

        <div>
          <h1>Total Price: {}</h1>
          <button>Checkout</button>
        </div>
      </center>
  }
}


