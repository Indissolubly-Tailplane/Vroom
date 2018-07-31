/* We need...
  - Navbar
  - carCard components
*/
import React, {Component} from 'react'
import SingleCar from './SingleCar'
import {fetchAllCars} from '../store/car'
import {connect} from 'react-redux'
import {fetchOrderByEmail} from '../store/order'

class Cars extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usersOrders: {},
      user: {}
    }
  }

  async componentDidMount() {
    this.props.fetchAllCars()
    const queryEmail = this.toQuery(this.props.user.user.email)
    console.log('this.props: ', this.props)
    console.log('queryEmail: ', queryEmail)
    const userOrders = await this.props.fetchOrderByEmail(queryEmail)
    console.log('userOrders', userOrders)
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
    const allCars = this.props.allCars
    return (
      <div className="ui four stackable cards" id="allCars">
        {!allCars ? (
          <h1>Loading...</h1>
        ) : (
          allCars.map(car => {
            console.log(this.props)
            return <SingleCar key={car.id} car={car} user={this.props} />
          })
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    allCars: state.car.allCars,
    allOrders: state.order.allOrders,
    userEmail: state.user.email,
    orderByEmail: state.order.orderByEmail
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllCars: () => {
    dispatch(fetchAllCars())
  },
  fetchOrderByEmail: queryEmail => {
    dispatch(fetchOrderByEmail(queryEmail))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cars)
