// use GIT for version control, not separate files

/* We need...
  - Car name
  - Image
  - Info
  - Quantity
  - Edit
  - Remove
*/

import React, {Component} from 'react'
import propTypes from 'prop-types' // typeCheck incomming props (raect error handling)
import Cart from './Cart'
import {Image} from 'semantic-ui-react'

/**
 * COMPONENT
 */
export default class SingleCarCart extends Component {
  constructor() {
    super()
    this.state = {}
  }

  handleRemove = evt => {
    window.sessionStorage.removeItem(this.props.carKeyInlocalStorage)
    this.props.handleRemove()
  }

  render() {
    const {make, model, color, price, year, description, image} = this.props.car
    return (
      <div className="card">
        <Image
          src={image}
          height="70%"
          width="100%"
          position="absolute"
          className="ui image"
        />
        <div className="content">
          <div className="header">{make}</div>
          <div className="meta">{model}</div>
          <div className="meta">{year}</div>
          <div className="meta">{price}</div>
          <div className="extra content">
            <button onClick={this.handleRemove}>Remove From Cart</button>
          </div>
        </div>
      </div>
    )
  }
}

SingleCarCart.propTypes = {
  car: propTypes.object.isRequired,
  carKeyInlocalStorage: propTypes.string.isRequired
}
