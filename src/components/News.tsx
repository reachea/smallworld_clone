import React, { Component } from 'react';
import './New.css';
import Nav from '../Nav';

class News extends Component {
  render() {
    return (
      <div className="new" >
        <div className="news-navbar" >
          <Nav />
        </div>
        <p>News</p>
      </div>
    );
  }
}

export default News;