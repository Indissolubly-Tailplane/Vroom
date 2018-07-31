import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Menu} from 'semantic-ui-react'
import CartNumber from './cartNumber'
import {UpdateItemsInCart} from '../store/cart'

const Navbar = ({handleClick, isLoggedIn, UpdateCart}) => (
  <React.Fragment>
    <Menu>
      <Menu.Item>
        <Link to="/">
          <i className="home icon" />
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/Cars">Cars</Link>
      </Menu.Item>
      {isLoggedIn ? (
        <Menu.Item>
          <Link to="/UserProfile">Profile</Link>
        </Menu.Item>
      ) : (
        <div />
      )}
      <div className="right menu">
        <Menu.Item>
          <Link to="/Signup">Sign Up</Link>
        </Menu.Item>
        {!isLoggedIn ? (
          <Menu.Item>
            <Link to="/Login">Login</Link>
          </Menu.Item>
        ) : (
          <Menu.Item>
            <a onClick={() => {
              console.log('ON CLICK RAN')
              handleClick()
              UpdateCart()
            }}
            >
            Logout
            </a>
            {/* <Link to="/Login">Logout</Link> */}
          </Menu.Item>
        )}
        <Menu.Item>
          <Link to="/Cart">
            <i className="shopping cart icon" />
            {/* <span className="button__badge">{window.localStorage.length}</span> */}
            <CartNumber />
          </Link>
        </Menu.Item>
      </div>
    </Menu>
  </React.Fragment>
)

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    },
    UpdateCart() {
      console.log("I RAN")
      dispatch(UpdateItemsInCart())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
