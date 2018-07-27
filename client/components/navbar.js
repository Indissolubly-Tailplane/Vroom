import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Menu} from 'semantic-ui-react'

const Navbar = ({handleClick, isLoggedIn}) => (
  <React.Fragment>
    <Menu>
      <Menu.Item>
        <Link to="/"><i class="home icon"></i></Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/Cars">Cars</Link>
      </Menu.Item>
      <div className="right menu">
      <Menu.Item>
        <Link to="/Signup">Sign Up</Link>
      </Menu.Item>
      {
        !isLoggedIn ? (
        <Menu.Item>
          <Link to="/Login">Login</Link>
        </Menu.Item>
        ) : (
          <Menu.Item>
          <a onClick={handleClick}>Logout</a>
          {/* <Link to="/Login">Logout</Link> */}
        </Menu.Item>
        )
      }
      <Menu.Item>
        <Link to="/Cart"><i className="shopping cart icon"/></Link>
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
