import React, {Component} from 'react'
// import SingleCar from './SingleCar';
import Footer from './Footer'

// can be written as a stateless functional component
export default class Confirmation extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div>
        <center>
          <h3>Your Order Is Being Processed and Will Be Shipped Shortly</h3>
          <h3>Thank You For Using Vroom</h3>
          <h3>Order Confirmation #8E3T34FU</h3>
        </center>
        <div id="axis" className="one">
          <img
            height="auto"
            width="25%"
            className="object mclaren move-right"
            src="http://www.pngmart.com/files/4/Car-PNG-Picture.png"
          />
          <img
            height="auto"
            width="25%"
            className="object lambo move-left"
            src="http://pngimg.com/uploads/lamborghini/lamborghini_PNG10695.png"
          />
          <img
            height="auto"
            width="25%"
            className="object ferrari move-right"
            src="http://www.pngmart.com/files/4/Ferrari-Sergio-PNG-File.png"
          />
          <img
            height="auto"
            width="25%"
            className="object bugatti move-left"
            src="http://www.pngmart.com/files/4/Bugatti-PNG-Photos.png"
          />
          <Footer />
        </div>
      </div>
    )
  }
}
