import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import NavBar from './navbar'

export default class Home extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1>Home</h1>
        <img src="https://assets.bugatti.com/fileadmin/_processed_/sei/p54/se-image-cb3ed39a6d61cdec3337bc041cc38689.jpg" />
        <a href="/cars">
          <button>View All Cars</button>
        </a>
      </div>
    )
  }
}
