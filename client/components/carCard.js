import React, {Component} from 'react'
import {fetchCar} from '../store/car'
import {connect} from 'react-redux'
import {Grid, Image} from 'semantic-ui-react'

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
      <Grid columns="two" divided>
        <Grid.Column>
          <Image
            src={singleCar.image}
            size="big"
            verticalAlign="middle"
            centered
          />
        </Grid.Column>
        <Grid.Column>
          <div className="CarCard">
            <div className="content">
              <div id="carName">
                {singleCar.make} {singleCar.model}
              </div>
              <div id="carYear">{singleCar.year}</div>
              {/* <div>{singleCar.color}</div> */}
              <div id="carDescription">{singleCar.description}</div>
              <div id="carPrice">Starting at ${singleCar.price}</div>
              <div id="carQuantity">{singleCar.quantity} Left In Stock!</div>
              <button id="carButton">Add to Cart</button>
              {/* quantity */}
            </div>
          </div>
        </Grid.Column>
      </Grid>
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
