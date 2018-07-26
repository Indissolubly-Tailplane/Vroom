/* We need...
  - Navbar
  - Image
  - Info
  - Quantity (drop down form)
  - Add to Cart Button
 */

import React from 'react'

/**
 * COMPONENT
 */
export const SingleCar = () => {
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
        <div className="description">
          Penned by the Ferrari style centre in collaboration with Pininfarina,
          the new California T is a sophisticated prancing horse grand tourer
          with a beautifully ergonomic and sumptuously handcrafted. The
          re-innovated California T is a car worthy of any automobile aficionado
          or a discerning client seeking a majestically comfortable daily drive.
        </div>
        <div className="meta">Price: $300,000</div>
      </div>
      <div className="extra content">
        <a>
          <i aria-hidden="true" className="user icon" />More Info
        </a>
      </div>
    </div>
  )
}
