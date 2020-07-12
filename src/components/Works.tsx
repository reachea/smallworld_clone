import React, { Component } from 'react';
import './Work.css';
import Nav from '../Nav';

class Works extends Component {
  render() {
    return (
      <div className="work" >
        <div className="works-navbar" >
          <Nav />
        </div>
        <p>Works</p>
      </div>
    );
  }
}

export default Works;