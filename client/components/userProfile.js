/* We need...
  - Navbar
  - carCard components
*/
import React, {Component} from 'react'
// import {} from '../store/car'
import {connect} from 'react-redux'
import OrderItem from './orderItem'
import order, {fetchOrderByEmail, fetchAllOrders} from '../store/order'
import {me} from '../store'
// const queryString = require('query-string')
import axios from 'axios'

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usersOrders: {},
      user: {}
    }
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

  async componentDidMount() {
    const queryEmail = this.toQuery(this.props.user.user.email)
    const userOrders = await this.props.fetchOrderByEmail(queryEmail)
    // await this.props.fetchAllOrders()
    // await this.props.loadInitialData()
    // const email = this.props.user
    // if (email === undefined) {
    //   console.log('undefined email')
    // } else {
    //   let queryEmail = toQuery(email)
    //   let myOrders = this.props.fetchOrderByEmail(queryEmail)
    //   console.log('email: ', queryEmail)
    //   console.log(myOrders)
    // }
  }

  render() {
    return (
      <div>
        <h2>Users Orders</h2>
        {this.props.orderByEmail.length < 0 ? (
          <div>
            <h2>None</h2>
          </div>
        ) : (
          <div>
            {this.props.orderByEmail.map(myOrder => (
              <OrderItem key={myOrder.id} order={myOrder} />
            ))}
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    allOrders: state.order.allOrders,
    userEmail: state.user.email,
    orderByEmail: state.order.orderByEmail
  }
}

const mapDispatchToProps = dispatch => ({
  fetchOrderByEmail: queryEmail => {
    dispatch(fetchOrderByEmail(queryEmail))
  }
  // loadInitialData: () => {
  //   dispatch(me())
  // },
  // fetchAllOrders: () => {
  //   dispatch(fetchAllOrders())
  // }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)

// Notes
//   let queryEmail = toQuery(email)
//   const myOrders = this.props.fetchOrderByEmail(queryEmail)
//   console.log(myOrders)
// }
// let queryEmail = ''
// if (email === undefined) {
//   console.log('undefined email')
// } else {
//   let queryEmail = toQuery(email)
//   let myOrders = this.props.fetchOrderByEmail(queryEmail)
//   console.log('email: ', queryEmail)
//   console.log(myOrders)
// }
// {
//   email !== undefined
//     ? (orders = this.props.orderByEmail(email))
//     : (orders = '')
// }
// if (email === undefined) {
//   return <h1>Loading...</h1>
// } else {
//   let orders = this.props.fetchOrderByEmail(toQuery(email))
// }
// console.log('this.props.orderByEmail', this.props.orderByEmail)
// console.log('orders: ', this.orders)
