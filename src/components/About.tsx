import React, { Component } from 'react';
import './About.css';
import Nav from '../Nav';

class About extends Component {
  render() {
    return (
      <div className="about" >
        <div className="about-navbar" >
          <Nav />
        </div>
        <div className="about-content-1" >
          <p>About</p>
        </div>
      </div>
    );
  }
}

export default About;