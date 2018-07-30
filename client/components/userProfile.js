/* We need...
  - Navbar
  - carCard components
*/
import React, {Component} from 'react'
import {} from '../store/car'
import {connect} from 'react-redux'
import OrderItem from './orderItem'

class UserProfile extends Component {
  componentDidMount() {
    // Fetch orders for specific user
  }

  render() {
    // const usersCarOrders = this.props.orderedCars
    return (
      <center>
        <div>
          <h2>Users Orders</h2>
          <OrderItem />
          {/* make,model, price, shipper, orderId */}
        </div>
      </center>
    )
  }
}

const mapStateToProps = state => {}

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
