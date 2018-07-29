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
    window.localStorage.removeItem(this.props.carKeyInlocalStorage)
    this.props.handleRemove()
  }

  render() {
    const numberWithCommas = x => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
    const {make, model, color, price, year, description, image} = this.props.car
    return (
      <div className="ui items">
        <div className="item" id="cartCard">
          <div className="ui medium image">
            <img
              src={image}
              position="absolute"
              className="ui image"
              border-radius="50%"
            />
          </div>
          <div className="content">
            <div className="header">{make}</div>
            <div className="meta">
              <span className="model">{model}</span>
              <span className="year">{year}</span>
              <div className="meta">
                <span className="price">${numberWithCommas(price)}</span>
              </div>
            </div>
            <div className="extra">
              <div className="ui red basic button" onClick={this.handleRemove}>
                Remove
                {/* <i className="right shop icon" /> */}
              </div>
            </div>
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
