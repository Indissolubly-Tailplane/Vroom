/* We need...
  - Navbar
  - carCard components
*/
<<<<<<< HEAD
import React, {Component} from 'react';
import {SingleCar} from './SingleCar';
import {fetchAllCars} from '../store/car';
import { connect } from 'react-redux';

class Cars extends Component {
  componentDidMount() {
    this.props.fetchAllCars();
  }

  render() {
    const allCars = this.props.allCars;
    return (
      <div>
        { !allCars ? <h1>Loading...</h1> :
          allCars.map((car) => {
          return (
            <SingleCar key={car.id} car={car}/>
          )
        })
        }
=======
import React, {Component} from 'react'
// import { connect } from 'react-redux';
// import {//Reducer Names} from '../store/car'
import {SingleCar} from './SingleCar'

export default class Cars extends Component {
  constructor() {
    super()
    this.state = {
      // allCars: []
    }
  }

  componentDidMount() {
    // Reducer to fetch all cars
  }

  render() {
    // const allCars = this.state.cars

    // Loading Screen
    //if (!allCars) return <div>Loading</div>
    // if (allCars.length === 0) {
    // return (<div><h1>No Cars To Display</h1></div>)
    // }
    return (
      <div>
        <h1>All Cars</h1>
        {/* allCars.map(car => (
          <div key = {car.id}>
          // PUT SINGLE CAR COMPONENT HERE
          </div>
          */}
        <SingleCar />
>>>>>>> master
      </div>
    )
  }
}

<<<<<<< HEAD
const mapStateToProps = state => {
  return { allCars: state.car.allCars }
}

const mapDispatchToProps = dispatch => ({
  fetchAllCars: () => {
    dispatch(fetchAllCars());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cars);
=======
// const mapStateToProps = state => {
//   return {

//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     // reducer name
//   }
// }

// export default connect(
//   mapStateToProps, mapDispatchToProps)(Cars)
// )
>>>>>>> master
