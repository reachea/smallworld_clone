import React, { Component } from 'react';
import './Home.css';
import { Row, Col, Button } from 'antd';
import App from '../App';
import About from './About';
import {BrowserRouter as Router, Route } from 'react-router-dom';

class Home extends Component {
  private about: any = <About />;

  render() {
    
    return (
      <div className="home">
        <div className="home-content-1" >
          <div className="container">
            <h1> <span className="span-1" >{'<'}</span> Homegrown Startup Community <span className="span-1" >{'/>'}</span></h1>
            <Row>
              <Col span={12} >
                <p>
                We began in 2011 by providing a collaborative workspace environment for entrepreneurs, and then quickly moved forward raising investment capital to fund new startup projects.
                </p>
                <div className="separator" ></div>
                <p>
                With a variety of research and development projects in motion today, we're involved in startup venture building through community supported seed equity investments, together with rural ecovillage development and long-term land management.
                </p>
                <Button type="primary" className="learnMore-btn" >
                  <span className="span-btn-1" >LEARN MORE</span>
                </Button>
              </Col>
              <Col span={12} >
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;