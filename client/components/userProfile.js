/* We need...
  - Navbar
  - carCard components
*/
import React, {Component} from 'react'
import {} from '../store/car'
import {connect} from 'react-redux'
import OrderItem from './orderItem'
import order, {fetchOrderByEmail, fetchAllOrders} from '../store/order'
import {me} from '../store'
const queryString = require('query-string')

function toQuery(email) {
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

class UserProfile extends Component {
  componentDidMount() {
    this.props.fetchOrderByEmail()
    this.props.fetchAllOrders()
    this.props.loadInitialData()
  }

  render() {
    const email = this.props.user
    console.log('email: ', email)
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
    console.log('this.props.orderByEmail', this.props.orderByEmail)
    console.log('orders: ', this.orders)
    return (
      <center>
        <div>
          <h2>Users Orders</h2>
          {/* {!orderByEmail ? (
            <h1>Loading...</h1>
          ) : (
            orderByEmail.map(order => {
              return <OrderItem key={order.id} order={order} />
            })
          )} */}

          {/* make,model, price, shipper, orderId */}
        </div>
      </center>
    )
  }
}

const mapStateToProps = state => {
  return {
    allOrders: state.order.allOrders,
    user: state.user.email,
    orderByEmail: state.order.orderByEmail
  }
}

const mapDispatchToProps = dispatch => ({
  fetchOrderByEmail: email => {
    dispatch(fetchOrderByEmail(email))
  },
  loadInitialData: () => {
    dispatch(me())
  },

  fetchAllOrders: () => {
    dispatch(fetchAllOrders())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
