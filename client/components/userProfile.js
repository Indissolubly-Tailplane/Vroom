/* We need...
  - Navbar
  - carCard components
*/
import React, {Component} from 'react'
import {} from '../store/car'
import {connect} from 'react-redux'
import OrderItem from './orderItem'
import order, {fetchOrderByEmail, fetchAllOrders} from '../store/order'

class UserProfile extends Component {
  componentDidMount() {
    this.props.fetchOrderByEmail()
    this.props.fetchAllOrders()
  }

  render() {
    const orderByEmail = this.props.orderByEmail
    return (
      <center>
        <div>
          <h2>Users Orders</h2>
          {!orderByEmail ? (
            <h1>Loading...</h1>
          ) : (
            orderByEmail.map(order => {
              return <OrderItem key={order.id} order={order} />
            })
          )}

          {/* make,model, price, shipper, orderId */}
        </div>
      </center>
    )
  }
}

const mapStateToProps = state => {
  // return {orderByEmail: state.order.orderByEmail}
  return {allOrders: state.order.allOrders}
}

const mapDispatchToProps = dispatch => ({
  fetchOrderByEmail: () => {
    dispatch(fetchOrderByEmail())
  },

  fetchAllOrders: () => {
    dispatch(fetchAllOrders())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
