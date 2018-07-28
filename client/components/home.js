import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import NavBar from './navbar'
import {connect} from 'react-redux'
import Footer from './Footer'

const Home = ({isLoggedIn, name}) => {
  return (
    <React.Fragment>
      {isLoggedIn ? (
        <center>
          <div className="homeContainer">
            <div className="overlay-desc">
              <center>
                <h2>Welcome Back {name}</h2>
                <a href="/cars/" className="stage-button">
                  Discover
                </a>
              </center>
            </div>
            <div className="featured">
              <img
                className="homeImageAlternate"
                src="https://images3.alphacoders.com/889/thumb-1920-889471.jpg"
              />
              <div className="featured">
                <div>
                  <h3>Authorized Supercar Reseller</h3>
                </div>
                <img
                  src="https://detailedsolutions.ca/wp-content/uploads/2014/10/Supercar-logo-compilation-banner.jpg"
                  width="100%"
                  height="auto"
                />
              </div>
              <video
                id="background-video"
                loop
                autoPlay="true"
                muted="true"
                width="100%"
                height="100%"
              >
                <source
                  src="http://videos-f.jwpsrv.com/content/conversions/B4Bp10CY/videos/vyeEvNlI-3195186.mp4?token=0_5b5cd996_0xf5404bec8aaa22bfa2252844aa7fd2d4a9a8201a"
                  type="video/mp4"
                />
                <source
                  src="http://videos-f.jwpsrv.com/content/conversions/B4Bp10CY/videos/vyeEvNlI-3195186.mp4?token=0_5b5cd996_0xf5404bec8aaa22bfa2252844aa7fd2d4a9a8201a"
                  type="video/ogg"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <Footer />
        </center>
      ) : (
        <div>
          <div className="header">
            <h1>Welcome to Vroom</h1>
          </div>
          <div className="featured">
            <img
              className="homeImage"
              src="https://assets.bugatti.com/fileadmin/_processed_/sei/p54/se-image-cb3ed39a6d61cdec3337bc041cc38689.jpg"
            />
            <a href="/cars">
              <button>View All Cars</button>
            </a>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.user.id,
    name: state.user.firstName
  }
}

export default connect(mapStateToProps, null)(Home)
