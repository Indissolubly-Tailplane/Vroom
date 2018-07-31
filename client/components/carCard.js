import React, {Component} from 'react'
import {fetchCar} from '../store/car'
import {connect} from 'react-redux'
import {Grid, Image} from 'semantic-ui-react'
import {UpdateItemsInCart} from '../store/cart'
import OrderItem from './orderItem'
import {fetchOrderByEmail} from '../store/order'
import {me} from '../store'

class CarCard extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     usersOrders: {},
  //     user: {}
  //   }
  // }

  componentDidMount() {
    this.props.loadOneCar()
    // const queryEmail = this.toQuery(this.props.user.user.email)
    // const userOrders = await this.props.fetchOrderByEmail(queryEmail)
  }

  addToCar = () => {
    window.sessionStorage.setItem(
      `item${window.sessionStorage.length + 1}`,
      JSON.stringify(this.props.singleCar)
    )
    this.props.UpdateItemsInCart()
  }

  toQuery(email) {
    if (email !== undefined) {
      const result = ['?', 'email', '=']
      for (let i = 0; i < email.length; i++) {
        if (email[i] === '@') {
          result.push('%40')
        } else if (email[i] === '.') {
          result.push('%2E')
        } else {
          result.push(email[i])
        }
      }
      return result.join('')
    }
  }

  render() {
    console.log('this.props: ', this.props)

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
              {singleCar.limitedEdition === true ? (
                <div id="carYear">Limited Edition</div>
              ) : null}
              <div id="carDescription">{singleCar.description}</div>
              <div id="carPrice">
                Starting at ${numberWithCommas(singleCar.price)}
              </div>
              <div id="carQuantity">{singleCar.quantity} Left in Stock!</div>
              <button id="carButton" onClick={this.addToCar}>
                Add to Cart
              </button>
            </div>
          </div>
          {/* <center>
            <div>
              <h3>Previous {singleCar.make}s Purchased</h3>
              {this.props.orderByEmai.length === 0 ? (
                <div>
                  <h3>No Past Orders</h3>
                </div>
              ) : (
                <div>
                  {this.props.user.email.map(myOrder => (
                    <OrderItem key={myOrder.id} order={myOrder} />
                  ))}
                </div>
              )}
            </div>
          </center> */}
        </Grid.Column>
      </Grid>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    singleCar: state.car.singleCar[0],
    itemsInCart: state.cart.itemsInCart
    // allOrders: state.order.allOrders,
    // userEmail: state.user.email,
    // orderByEmail: state.order.orderByEmail
  }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
  loadOneCar: () => {
    dispatch(fetchCar(ownProps.match.params.id))
  },
  UpdateItemsInCart: () => {
    dispatch(UpdateItemsInCart())
  }
  // fetchOrderByEmail: queryEmail => {
  //   dispatch(fetchOrderByEmail(queryEmail))
  // }
})

export default connect(mapStateToProps, mapDispatchToProps)(CarCard)
