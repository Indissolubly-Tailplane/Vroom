import React, {Component} from 'react'
import {fetchCar} from '../store/car'
import {connect} from 'react-redux'
import {Grid, Image, Container, Header} from 'semantic-ui-react'
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
          <Container fluid>
            <div className="CarCard">
              <div className="content">
                <Header as="h2" color="black" textAlign="left">
                  {singleCar.make} {singleCar.model}
                </Header>
                <p id="carYear">{singleCar.year}</p>
                {singleCar.limitedEdition === true ? (
                  <p id="carDescription">Limited Edition</p>
                ) : null}{' '}
                <p id="carDescription">{singleCar.description}</p>
                <p id="carDescription">
                  Starting at ${numberWithCommas(singleCar.price)}
                </p>
                <p id="carDescription">{singleCar.quantity} Left in Stock!</p>
                <button onClick={this.addToCar} id="carButton">
                  Add to Cart
                </button>
              </div>
            </div>
          </Container>
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
