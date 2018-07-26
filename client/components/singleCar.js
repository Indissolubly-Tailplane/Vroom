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
    <div class="ui card">
      <img
        src="https://icdn2.digitaltrends.com/image/2018-lamborghini-huracan-performante-23-1200x675.jpg?ver=1"
        class="ui image"
      />
      <div class="content">
        <div class="header">Lambo</div>
        <div class="meta">Joined in 2016</div>
        <div class="description">Daniel is a comedian living in Nashville.</div>
      </div>
      <div class="extra content">
        <a>
          <i aria-hidden="true" class="user icon" />10 Friends
        </a>
      </div>
    </div>
  )
}
