/* We need...
  - Navbar
  - carCard components
*/
import React, {Component} from 'react'
import {connect} from 'react-redux'
import OrderItem from './orderItem'
import {fetchOrderByEmail} from '../store/order'

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
  }

  render() {
    return (
      <center>
        <div>
          <h3>Previous Orders</h3>
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
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
