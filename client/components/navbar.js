import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import { Menu } from 'semantic-ui-react';

const Navbar = ({handleClick, isLoggedIn}) => (
  <React.Fragment>
    <Menu>
      <Menu.Item><Link to="/">Home</Link></Menu.Item>
      <Menu.Item><Link to="/cars">Cars</Link></Menu.Item>
      <Menu.Item><Link to="/signup">Sign Up</Link></Menu.Item>
      <Menu.Item><Link to="/login">Login</Link></Menu.Item>
      <Menu.Item><Link to="/cart">Cart</Link></Menu.Item>
    </Menu>
  </React.Fragment>
)

// const Navbar = ({handleClick, isLoggedIn}) => (
//   <div>
//     <h1>VROOM</h1>
//     <nav>
//       <a href="/">Home</a>
//       <a href="/cars">Cars</a>
//       <a href="/cart">Cart</a>
//       {isLoggedIn ? (
//         <div>
//           {/* The navbar will show these links after you log in */}
//           <Link to="/home">Home</Link>
//           <a href="#" onClick={handleClick}>
//             Logout
//           </a>
//         </div>
//       ) : (
//         <div>
//           {/* The navbar will show these links before you log in */}
//           <Link to="/login">Login</Link>
//           <Link to="/signup">Sign Up</Link>
//         </div>
//       )}
//     </nav>
//     <hr />
//   </div>
// )

/**
 * CONTAINER
 */
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
