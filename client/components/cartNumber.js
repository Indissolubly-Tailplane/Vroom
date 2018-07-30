import React, {Component} from 'react'
import {WSAEINVALIDPROVIDER} from 'constants'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export class CartNumber extends Component {

  render() {
    return (
      <div>
        <center>
          <span className="button__badge">{this.props.itemsInCart}</span>

        </center>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  itemsInCart: state.cart.itemsInCart
})


export default connect (mapStateToProps,null)(CartNumber)

