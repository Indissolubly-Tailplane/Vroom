/* We need...
  - Car name  
  - Image
  - Info
  - Quantity
  - Edit
  - Remove
*/

import React, {Component} from 'react'
import propTypes from 'prop-types'  // typeCheck incomming props (raect error handling)
import Cart from './Cart'

/**
 * COMPONENT
 */
export default class SingleCarCart extends Component {
  constructor () {
    super ()
    this.state = {
    }
  }
    
    handleRemove = (evt) => {
      window.localStorage.removeItem(this.props.carKeyInlocalStorage);
      this.props.handleRemove()
    }
    
  render() {
    const { make, model , color, price, year , description , image} = this.props.car;
    return (
      <div className="ui card">
        <img
          src={image}
          className="ui image"
        />
        <div className="content">
          <div className="header">{make}</div>
          <div className="meta">{model}</div>
          <div className="meta">{year}</div>
          <div className="meta">{price}</div>
        </div>
        <div className="extra content">
          <button onClick={this.handleRemove}>Remove From Cart</button>
        </div>
      </div>
    )
  }
}

SingleCarCart.propTypes = {
  car: propTypes.object.isRequired,
  carKeyInlocalStorage: propTypes.string.isRequired
}
