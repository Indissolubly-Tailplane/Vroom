/* We need...
  - Navbar
  - Image
  - Info
  - Quantity (drop down form)
  - Add to Cart Button
 */

import React, {Component} from 'react';
import {conenct} from 'react-redux';
import {Link} from 'react-router-dom';

/**
 * COMPONENT
 */
export const SingleCar = (props) => {
  const {make, model, id} = props.car;
  return (
    <div class="ui card">
      <img
        src="https://icdn2.digitaltrends.com/image/2018-lamborghini-huracan-performante-23-1200x675.jpg?ver=1"
        class="ui image"
      />
      <div class="content">
        <div class="header">{props.make}</div>
        <div class="meta">{props.model}</div>
      </div>
      <div class="extra content">
        <Link to={`/cars/${props.id}`}>
          <button>Details</button>
        </Link>
        <Link to={`/cart/`}>
          <button>Add to Cart</button>
        </Link>
      </div>
    </div>
  )
}


