import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Image} from 'semantic-ui-react'

/**
 * COMPONENT
 */
export const SingleCar = props => {
  const {make, model, id, image} = props.car

  const addToCar = () => {
    window.localStorage.setItem(
      `item${window.localStorage.length + 1}`,
      JSON.stringify(props.car)
    )
  }

  return (
    <div className="card">
      <Image
        height="70%"
        width="100%"
        position="absoulte"
        src={image}
        className="ui image"
      />
      <div className="content">
        <div className="header">{make}</div>
        <div className="meta">{model}</div>
      </div>
      <div className="extra content">
        <Link to={`/cars/${id}`}>
          <button>Details</button>
        </Link>
        <button onClick={addToCar}>Add to Cart</button>
      </div>
    </div>
  )
}
