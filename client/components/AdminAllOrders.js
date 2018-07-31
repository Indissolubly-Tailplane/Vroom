/* We need...
  - Navbar
  - carCard components
*/
import React, {Component} from 'react'
// import {} from '../store/car'
import {connect} from 'react-redux'
import AdminOrderItem from './AdminOrderItem'
import order, {fetchOrderByEmail, fetchAllOrders} from '../store/order'
import {me} from '../store'
// const queryString = require('query-string')
import axios from 'axios'

class AdminAllOrders extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // usersOrders: {},
      // userEmail: {}
      // allOrders:
    }
    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  // handleChange(evt) {
  //   this.setState({[evt.target.name]: evt.target.value})
  //   console.log(this.state)
  // }

  // async handleSubmit(submitEvent) {
  //   submitEvent.preventDefault()
  //   const queryEmail = this.toQuery(this.state.userEmail)
  //   console.log(queryEmail)
  //   const userOrders = await this.props.fetchOrderByEmail(queryEmail)
  //   console.log(userOrders)
  //   this.setState({usersOrders: userOrders})
  //   console.log(this.state)
  //   // await this.props.addCampus(this.state)
  //   // const campus = await this.props.fetchCampus()
  // }

  updateOrder(id) {}

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
    console.log(this.props)
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
    orderByEmail: state.order.orderByEmail
  }
}

const mapDispatchToProps = dispatch => ({
  fetchOrderByEmail: queryEmail => {
    dispatch(fetchOrderByEmail(queryEmail))
  },
  fetchAllOrders: () => {
    dispatch(fetchAllOrders())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminAllOrders)
