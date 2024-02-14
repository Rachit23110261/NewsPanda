import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'; // Import the CSS file for styling


export class Navbar extends Component {
  static propTypes = {

  }
  Home=()=>{
    console.log('hey')

  }

  render() {
    return (
      <div>
         
            <nav>
      <div className="navbar-container fixed-top">
        <div className="logo-container">
          <div className='logo'>
            {/* <img src='C:\Users\rachi\Desktop\rachit1st\p_2_NewsMonkey\image-of-panda-reading-newspaper-newspanda-website-upscaled.png'></img> */}
          </div>
          <div className="logo-text">NewsPanda</div>
        </div>
        <div className="nav-links">
          <a href="/home" onClick={this.Appwithmenu}>Home</a>
          <a href="#news">News</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>

      </div>
    )
  }
}

export default Navbar
