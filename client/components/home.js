import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import NavBar from './navbar'
import { connect } from 'react-redux';

const Home = ({isLoggedIn, name}) => {
    return (
      <React.Fragment>
        { isLoggedIn ? (
          <div>
            <h1>Welcome Back, {name}</h1>
            <img
              className="homeImage"
              src="https://assets.bugatti.com/fileadmin/_processed_/sei/p54/se-image-cb3ed39a6d61cdec3337bc041cc38689.jpg"
            />
            <a href="/cars">
              <button>View All Cars</button>
            </a>
          </div>
        ) : (
          <div>
            <h1>Home</h1>
            <img
              className="homeImage"
              src="https://assets.bugatti.com/fileadmin/_processed_/sei/p54/se-image-cb3ed39a6d61cdec3337bc041cc38689.jpg"
            />
            <a href="/cars">
              <button>View All Cars</button>
            </a>
          </div>
        )
        }
      </React.Fragment>

    )
  }


const mapStateToProps = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    name: state.user.firstName
  }
}

export default connect(mapStateToProps, null)(Home);
