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
    if (!this.props.singleCar) return <div>Loading...</div>
    const singleCar = this.props.singleCar
    return (
      <div className="CarCard">
        <img src={singleCar.image} />
        <div className="content">
          <div className="header">{singleCar.make}</div>
          <div className="meta">{singleCar.model}</div>
          <div>{singleCar.color}</div>
          <div>{singleCar.price}</div>
          <div>{singleCar.description}</div>
          <div>{singleCar.year}</div>
          {/* add to cart
          quantity */}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {singleCar: state.car.singleCar[0]}
}
const mapDispatchToProps = (dispatch, ownProps) => ({
  loadOneCar: () => {
    dispatch(fetchCar(ownProps.match.params.id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CarCard)
