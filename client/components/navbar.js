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
          <Link to="/Logout">Logout</Link>
        </Menu.Item>
        )
      }
      <Menu.Item>
        <Link to="/Cart"><i class="shopping cart icon"></i></Link>
      </Menu.Item>
      </div>
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
