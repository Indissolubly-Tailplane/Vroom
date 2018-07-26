import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const SingleCar = props => {
  const {make, model, id, image} = props.car
  return (
    <div className="ui card">
      <img src={image} className="ui image" />
      <div className="content">
        <div className="header">{make}</div>
        <div className="meta">{model}</div>
      </div>
      <div className="extra content">
        <Link to={`/cars/${id}`}>
          <button>Details</button>
        </Link>
        <Link to={`/cart/`}>
          <button>Add to Cart</button>
        </Link>
      </div>
    </div>
  )
}
