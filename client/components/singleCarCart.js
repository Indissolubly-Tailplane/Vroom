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
export const SingleCarCart = () => {
  return (
    <div className="ui card">
      <img
        src="https://www.torquenews.com/sites/default/files/styles/news/public/image-106/%5Btitle-raw%5D/ferrari_f12_front_square.jpg"
        className="ui image"
      />
      <div className="content">
        <div className="header">Make: Ferrari</div>
        <div className="meta">Model: Ferrari California</div>
        <div className="meta">Year: 2012</div>
        <div className="meta">Price: $300,000</div>
      </div>
      <div className="extra content">
        <button>Remove From Cart</button>
      </div>
    </div>
  )
}
