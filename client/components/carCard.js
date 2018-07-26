/* We need...
  - Image
  - Info
  - Quantity (drop down form)
  - Add to Cart Button
 */

import React, {Component} from 'react'
import {fetchCar} from '../store/car'
import {connect} from 'react-redux'

class CarCard extends Component {
  componentDidMount() {
    this.props.loadOneCar()
  }

  //handle add cart function
  //handle change -> handling quantity change

  render() {
    console.log('THIS.PROPS.SINGLECAR', this.props.singleCar)
    const {
      make,
      model,
      id,
      image,
      color,
      price,
      description,
      year
    } = this.props.singleCar

    if (!this.props.singleCar.make) return <div>Loading...</div>
    return (
      <div className="CarCard">
        <img src={image} />
        <div className="content">
          <div className="header">{make}</div>
          <div className="meta">{model}</div>
          <div>{color}</div>
          <div>{price}</div>
          <div>{description}</div>
          <div>{year}</div>
          {/* add to cart
          quantity */}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  // console.log('state', state)
  // console.log('state.car.singleCar.id', state.car.singleCar.id)
  // console.log('ownProps.match.params.id', ownProps.match.params.id)
  // if (Number(state.car.singleCar.id) === Number(ownProps.match.params.id)) {
  //   return {singleCar: state.car.singleCar[0]}
  // }
  console.log('STATE.CAR.SINGLECAR', state.car.singleCar)
  return {singleCar: state.car.singleCar[0]}
}
const mapDispatchToProps = (dispatch, ownProps) => ({
  loadOneCar: () => {
    dispatch(fetchCar(ownProps.match.params.id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CarCard)
