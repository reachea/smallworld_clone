import React, { Component } from 'react';
import './Contact.css';
import Nav from '../Nav';

class Contact extends Component {
  render() {
    return (
      <div className="contact" >
        <div className="contact-navbar" >
          <Nav />
        </div>
        <p>Contact</p>
      </div>
    );
  }
}

export default Contact;