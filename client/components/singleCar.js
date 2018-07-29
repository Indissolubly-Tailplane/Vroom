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
    <div className="card" id="card">
      <Image
        height="70%"
        width="100%"
        position="absolute"
        src={image}
        className="ui image"
      />
      <div className="content">
        <div className="header">{make}</div>
        <div className="meta">{model}</div>
      </div>
      <div className="card">
        <div className="content">
          <center>
            <Link to={`/cars/${id}`}>
              <div
                type="button"
                className="ui grey basic button"
                id="singleCarButton"
              >
                Details
              </div>
            </Link>
            <div
              type="button"
              onClick={addToCar}
              className="ui blue basic button"
            >
              <i className="shop icon" />
              Add to Cart
            </div>
            {/* <div
              className="ui vertical animated button"
              onClick={addToCar}
              tabIndex="0"
            >
              <div className="visible content">Add To Cart</div>
              <div className="hidden content">
                <i className="shop icon" />
              </div>
            </div> */}
          </center>
        </div>
      </div>
    </div>
  )
}
