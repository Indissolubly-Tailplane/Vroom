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
              <div className="header">
                {singleCar.make} {singleCar.model}
              </div>
              <div>{singleCar.year}</div>
              {/* <div>{singleCar.color}</div> */}
              <div>{singleCar.description}</div>
              <div>Starting at ${singleCar.price}</div>
              {/* add to cart
          quantity */}
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
