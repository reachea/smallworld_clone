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
              <Col span={12} className="home-navbar-1" >
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
              <Col span={12} className="home-navbar-2" >
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

        <div className="home-content-4">
          <h2>COMMUNITY UPDATE</h2>
          <div className="container home-community" >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={8} className="gutter-row" >
                <div className="community-item">
                  <a href="https://medium.com/smallworldvc/smallworld-realty-soft-opening-6efc25e9b3c4" target="_blank" rel="noopener noreferrer">
                    <div className="list-image community-image-1">
                    </div>
                    <div className="community-content">
                      <h3>SmallWorld Realty Soft Openning</h3>
                      <p>On 18th November 2019, SmallWorld celebrated the official opening of our latest shared-workspace with a so...</p>
                      <div className="item-btn"><p>SmallWorld Venture</p></div>
                    </div>
                  </a>
                </div>
              </Col>
              <Col span={8} className="gutter-row" >
                <div className="community-item">
                  <a href="https://medium.com/smallworldvc/smallworld-for-good-causes-2920ba067b3e" target="_blank" rel="noopener noreferrer">
                    <div className="list-image community-image-2">
                    </div>
                    <div className="community-content">
                      <h3>SmallWorld For Good Causes</h3>
                      <p>SmallWorld, KOOMPI and it’s affiliated start-ups are committed to spending our marketing dollars #ForGoodC...</p>
                      <div className="item-btn"><p>SmallWorld Venture</p></div>
                    </div>
                  </a>
                </div>
              </Col>
              <Col span={8} className="gutter-row" >
                <div className="community-item" >
                  <a href="https://medium.com/smallworldvc/press-release-smallworld-realty-launches-two-new-locations-65ea1a8697e7" target="_blank" rel="noopener noreferrer">
                    <div className="list-image community-image-3">
                    </div>
                    <div className="community-content">
                      <h3>Press Release: SmallWorld Realty Launches Two New Locations</h3>
                      <p>Phnom Penh — The SmallWorld team is excited to announce the official opening of SmallWorld Realty, the two...</p>
                      <div className="item-btn"><p>SmallWorld Venture</p></div>
                    </div>
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="home-content-4">
          <h2>KOOMPI NEWS</h2>
          <div className="container home-community" >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={8} className="gutter-row" >
                <div className="community-item">
                  <a href="https://medium.com/koompi/winners-of-think-think-world-cup-d5113bb24add" target="_blank" rel="noopener noreferrer">
                    <div className="list-image koompi-image-1">
                    </div>
                    <div className="community-content">
                      <h3>Winners of Think! Think! World Cup!</h3>
                      <p>13th July 2020 The result of Think! Think! World Cup! is finally out! {"<"}img alt="" src"...</p>
                      <div className="item-btn"><p>Mollika Chum</p></div>
                    </div>
                  </a>
                </div>
              </Col>
              <Col span={8} className="gutter-row" >
                <div className="community-item">
                  <a href="https://medium.com/koompi/installing-android-studio-on-koompi-os-86aa5b6b199c" target="_blank" rel="noopener noreferrer">
                    <div className="list-image koompi-image-2">
                    </div>
                    <div className="community-content">
                      <h3>Installing Android Studio on KOOMPI OS</h3>
                      <p>Cross-platform mobile apps development. In the previous section is about installing flutter on KO...</p>
                        <div className="item-btn"><p>Mr Solo {"(Logan Freed)"}</p></div>
                    </div>
                  </a>
                </div>
              </Col>
              <Col span={8} className="gutter-row" >
                <div className="community-image community-item" >
                  <a href="https://medium.com/koompi/koompi-to-support-young-volunteers-in-project-competition-78efb1003264" target="_blank" rel="noopener noreferrer">
                    <div className="list-image koompi-image-3">
                    </div>
                    <div className="community-content">
                      <h3>KOOMPI to Support Young Volunteers in Project Competition</h3>
                      <p>4 students from Bayon Secondary School will be participating in {"<"}a href="https://...</p>
                      <div className="item-btn"><p>Mollika Chum</p></div>
                    </div>
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;