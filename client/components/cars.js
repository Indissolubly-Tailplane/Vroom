/* We need...
  - Navbar
  - carCard components
*/
import React, {Component} from 'react';
import {SingleCar} from './SingleCar';
import {fetchCars} from '../store/car';
import { connect } from 'react-redux';

class Cars extends Component {
  componentDidMount() {
    this.props.loadCars()
  }

  render() {
    const allCars = this.props.allCars;
    return (
      <div>
        {allCars.map((car) => {
          return (
            <SingleCar car={car}/>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { allCars: state.allCars }
}

const mapDispatchToProps = dispatch => ({
  loadCars() {
    dispatch(fetchCars());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cars);
