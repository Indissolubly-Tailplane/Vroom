/* We need...
  - Navbar
  - carCard components
*/
import React, {Component} from 'react'
import {SingleCar} from './SingleCar'
import {fetchAllCars} from '../store/car'
import {connect} from 'react-redux'

class Cars extends Component {
  componentDidMount() {
    this.props.fetchAllCars()
  }

  render() {
    const allCars = this.props.allCars
    return (
      <div className="ui four stackable cards">
        {!allCars ? (
          <h1>Loading...</h1>
        ) : (
          allCars.map(car => {
            return <SingleCar key={car.id} car={car} />
          })
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {allCars: state.car.allCars}
}

const mapDispatchToProps = dispatch => ({
  fetchAllCars: () => {
    dispatch(fetchAllCars())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cars)
