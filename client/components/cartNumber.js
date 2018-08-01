import React, {Component} from 'react'
import {WSAEINVALIDPROVIDER} from 'constants'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const CartNumber = (props) => (
      <div>
        <center>
          <span className="button__badge">{props.itemsInCart}</span>

        </center>
      </div>
)

const mapStateToProps = state => ({
  itemsInCart: state.cart.itemsInCart
})


export default connect (mapStateToProps,null)(CartNumber)

