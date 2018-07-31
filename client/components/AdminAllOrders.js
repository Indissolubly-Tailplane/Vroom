/* We need...
  - Navbar
  - carCard components
*/
import React, {Component} from 'react'
// import {} from '../store/car'
import {connect} from 'react-redux'
import AdminOrderItem from './AdminOrderItem'
import order, {
  fetchOrderByEmail,
  fetchAllOrders,
  updateUserOrder
} from '../store/order'
import {me} from '../store'
// const queryString = require('query-string')
import axios from 'axios'

class AdminAllOrders extends Component {
  constructor() {
    super()
    this.state = {
      // usersOrders: {},
      // userEmail: {}
      // allOrders:
    }
    this.updateOrder = this.updateOrder.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  async updateOrder(id, data) {
    await this.props.updateUserOrder(id, {
      shipped: data
    })
    console.log(data)
    await this.props.fetchAllOrders()
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
    const allOrders = await this.props.fetchAllOrders()
  }

  render() {
    return (
      <center>
        <h3>All Orders</h3>
        {this.props.allOrders.length === 0 ? (
          <div>
            <h3>No Past Orders</h3>
          </div>
        ) : (
          <div>
            {this.props.allOrders.map(myOrder => (
              <AdminOrderItem
                key={myOrder.id}
                order={myOrder}
                updateOrder={this.updateOrder}
              />
            ))}
          </div>
        )}
      </center>
    )
  }
}

const mapStateToProps = state => {
  return {
    allOrders: state.order.allOrders,
    userEmail: state.user.email,
    orderByEmail: state.order.orderByEmail,
    updatedOrder: state.order.updatedOrder
  }
}

const mapDispatchToProps = dispatch => ({
  fetchOrderByEmail: queryEmail => {
    dispatch(fetchOrderByEmail(queryEmail))
  },
  fetchAllOrders: () => {
    dispatch(fetchAllOrders())
  },
  updateUserOrder: (id, data) => {
    dispatch(updateUserOrder(id, data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminAllOrders)
