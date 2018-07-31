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

class GuestProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usersOrders: {},
      userEmail: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value})
    console.log(this.state)
  }

  async handleSubmit(submitEvent) {
    submitEvent.preventDefault()
    const queryEmail = this.toQuery(this.state.userEmail)
    console.log(queryEmail)
    const userOrders = await this.props.fetchOrderByEmail(queryEmail)
    console.log(userOrders)
    this.setState({usersOrders: userOrders})
    console.log(this.state)
    // await this.props.addCampus(this.state)
    // const campus = await this.props.fetchCampus()
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

  async componentDidMount() {}

  render() {
    return (
      <center>
        <h3>Past Orders</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Enter Email To Check Past Orders</label>
          <input
            name="userEmail"
            type="text"
            placeholder="Email Address"
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
        {this.props.orderByEmail.length === 0 ? (
          <div>
            <h3>No Past Orders</h3>
          </div>
        ) : (
          <div>
            {this.props.orderByEmail.map(myOrder => (
              <OrderItem key={myOrder.id} order={myOrder} />
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
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(GuestProfile)
