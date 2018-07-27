/* We need...
  - Car name
  - Image
  - Info
  - Quantity
  - Edit
  - Remove
*/

import React from 'react'

/**
 * COMPONENT
 */
export const SingleCarCart = (props) => {
  const { make, model , color, price, year , description , image} = props.car;
  const handleRemove = (evt) => {
    console.log('hello from handle!');
    console.log(props.carKeyInlocalStorage)
    console.log(window.localStorage);
    window.localStorage.removeItem(props.carKeyInlocalStorage);
    console.log( window.localStorage);
    

  }
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
        <button onClick = {handleRemove}>Remove From Cart</button>
      </div>
    </div>
  )
}
