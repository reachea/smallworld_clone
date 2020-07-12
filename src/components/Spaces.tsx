import React, { Component } from 'react';
import './Space.css';
import Nav from '../Nav';

class Spaces extends Component {
  render() {
    return (
      <div className="space" >
        <div className="spaces-navbar" >
          <Nav />
        </div>
        <p>Spaces</p>
      </div>
    );
  }
}

export default Spaces;