import React, {Component} from 'react'
import {fetchCar} from '../store/car'
import {connect} from 'react-redux'
import {Grid, Image} from 'semantic-ui-react'
import {UpdateItemsInCart} from '../store/cart'

class CarCard extends Component {
  componentDidMount() {
    this.props.loadOneCar()
  }

  addToCar = () => {
    window.sessionStorage.setItem(
      `item${window.sessionStorage.length + 1}`,
      JSON.stringify(this.props.singleCar)
    )
    this.props.UpdateItemsInCart()
  }

  render() {
    const numberWithCommas = x => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
    if (!this.props.singleCar) return <div>Loading...</div>
    const singleCar = this.props.singleCar
    return (
      <Grid columns="two" id="cardCardGrid" divided>
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
              <div id="carPrice">
                Starting at ${numberWithCommas(singleCar.price)}
              </div>
              <div id="carQuantity">{singleCar.quantity} Left in Stock!</div>
              <button id="carButton" onClick= {this.addToCar}>Add to Cart</button>
            </div>
          </div>
        </Grid.Column>
      </Grid>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    singleCar: state.car.singleCar[0],
    itemsInCart: state.cart.itemsInCart
  }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
  loadOneCar: () => {
    dispatch(fetchCar(ownProps.match.params.id))
  },
  UpdateItemsInCart: () => {
    dispatch(UpdateItemsInCart())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CarCard)
