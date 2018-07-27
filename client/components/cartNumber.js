import React, {Component} from 'react'
import {WSAEINVALIDPROVIDER} from 'constants'

/**
 * COMPONENT
 */
export default class CartNumber extends Component {
  constructor() {
    super()
    this.state = {
      cartItems: 0
    }
  }

  componentDidMount() {
    this.setState({
      cartItems: window.localStorage.length
    })
  }

  render() {
    console.log(window.localStorage.length)
    return (
      <div>
        <center>
          <span className="button__badge">{this.state.cartItems}</span>
        </center>
      </div>
    )
  }
}
