import React, { Component } from 'react';
import './Home.css';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import Nav from '../Nav';


class Home extends Component {

  render() {
    
    return (
      <div className="home">
        <div className="home-content-1" >
          <Nav />
          <div className="separator" ></div>
          <div className="container home-navbar">
            <h1 > <span className="span-1" >{'<'}</span> Homegrown Startup Community <span className="span-1" >{'/>'}</span></h1>
            <Row>
              <Col span={12} >
                <p>
                We began in 2011 by providing a collaborative workspace environment for entrepreneurs, and then quickly moved forward raising investment capital to fund new startup projects.
                </p>
                <div className="separator" ></div>
                <p>
                With a variety of research and development projects in motion today, we're involved in startup venture building through community supported seed equity investments, together with rural ecovillage development and long-term land management.
                </p>
                <Link to="/about" >
                  <Button type="primary" className="home-btn" >
                    <span className="span-btn-1" >LEARN MORE</span>
                  </Button>
                </Link>
              </Col>
              <Col span={12} >
              </Col>
            </Row>
          </div>
        </div>


        <div className="home-content-2">
          <div className="container">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="home-list" >
                <Col className="gutter-row" span={6}>
                  <div className="home-list-item home-item-1" >
                    <div className="home-list-content" >
                      <h2>Startup Community</h2>
                      <p>SmallWorld Ventures is committed to becoming the number one catalyst for funding and assisting startups in Cambodia.</p>
                    </div>
                  </div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div className="home-list-item home-item-2" >
                    <div className="home-list-content" >
                      <h2>Seed Equity Investments</h2>
                      <p>Seed Equity Investments are provided to promising startup teams with projects ranging between 5,000 to 25,000 USD.</p>
                    </div>
                  </div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div className="home-list-item home-item-3" >
                    <div className="home-list-content" >
                      <h2>Venture Building</h2>
                      <p>Smallworld Ventures has built an internal team of technicians engaged in research and development projects with an aim to spin off new ventures.</p>
                    </div>
                  </div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div className="home-list-item home-item-4" >
                    <div className="home-list-content" >
                      <h2>Ecovillage Development</h2>
                      <p>At our rural ecovillage project, we're building a hands-on learning, working, and living environment with a balance among the natural world, education, economics, and sustainable living practices.</p>
                    </div>
                  </div>
                </Col>
              </Row>
          </div>
        </div>


        <div className="home-content-3">
          <div className="container home-banner2">
            <Row gutter={24} >
              <Col span={13} >
                <div className="home-banner2-content">
                  <h1>Have some ideas for new venture?</h1>
                  <p>We're looking for new approaches to problem solving and creating business.Do you have an innovative idea for a startup venture?</p>
                  <p>Or maybe you have a skillset in mind that you want to develop as you work within our existing SmallWorld venture.</p>
                  <p>We're open to discussing your own startup ideas, however unconventional, regardless of age, gender, or nationality.</p>
                  <p>Send us a message!</p>
                  <Link to="/contact" >
                    <Button type="primary" className="home-btn" >
                      <span className="span-btn-1" >CONTACT US</span>
                    </Button>
                  </Link>
                </div>
              </Col>
              <Col span={11} >
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;