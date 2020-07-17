import React, { Component } from 'react';
import './About.css';
import Nav from '../Nav';
import { Row, Col } from 'antd'; 

class About extends Component {
  render() {
    return (
      <div className="about" >
        <div className="about-navbar" >
          <Nav />
        </div>

        <div className="about-content-1" >
          <div className="container">
            <Row>
              <Col span={12}>
                <div className="about-paragraph-1" >
                  <h2>What is SmallWorld?</h2>
                  <p>Founded in 2011 as SmallWorld Cambodia, we created a shared professional workspace where progressive young business minds could explore and pursue their aspirations while transforming ideas into reality.</p>
                  <p>After five years of steady growth, SmallWorld Cambodia reorganized into SmallWorld Ventures to focus on venture building, information technologies, and the environment.</p>
                  <p>Through equity investment partnerships, we're building a land-based technical, business, and academic community based on natural philosophy and ecologically sensitive practices.</p>
                </div>
              </Col>
              <Col span={12}>
              </Col>
            </Row>
          </div>
        </div>

        <div className="about-content-2">
          <div className="container">
            <Row>
              <Col span={12}>
                <div className="about-content-2-img" ></div>
              </Col>
              <Col span={12}>
                <div className="about-content-2-paragraph">
                  <h2>PORTFOLIOS</h2>
                  <p>We began experimenting with equity investment partnerships in 2013, and since then we've listed a few startup teams we're proud to be partnered with from their inception.</p>
                  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={8}>
                      <a href="https://codingate.com/" target="_blank" rel="noopener noreferrer">
                        <div className="about-logo-item about-logo-item-1"></div>
                      </a>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <a href="https://wordpress-442427-1385604.cloudwaysapps.com/" target="_blank" rel="noopener noreferrer">
                        <div className="about-logo-item about-logo-item-2"></div>
                      </a>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <a href="https://bookmebus.com/" target="_blank" rel="noopener noreferrer">
                        <div className="about-logo-item about-logo-item-3"></div>
                      </a>
                    </Col>
                  </Row>
                  <br />
                  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={8}>
                      <a href="http://www.seavphovjivet.com/" target="_blank" rel="noopener noreferrer">
                        <div className="about-logo-item about-logo-item-4"></div>
                      </a>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <a href="https://fado168.com/" target="_blank" rel="noopener noreferrer">
                        <div className="about-logo-item about-logo-item-5"></div>
                      </a>
                    </Col>
                    <Col className="gutter-row" span={8}>
                      <a href="https://koompi.com/" target="_blank" rel="noopener noreferrer">
                        <div className="about-logo-item about-logo-item-6"></div>
                      </a>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="about-content-3">
          <div className="container about-content-header" >
            <h2>BOARD OF DIRECTORS</h2>
            <p>We're honored to have courageous and insightful business and<br/>community leaders to serve on our Board of Directors.</p>
            <Row className="about-board" >
              <Col span={4}>
                <div className="board-item" >
                  <div className="board-img board-img-1" >
                  </div>
                  <div className="board-content" >
                    <h3>Rithy THUL</h3>
                    <p>Co-Founder & CEO SmallWorld Venture</p>
                  </div>
                </div>
              </Col>
              <Col span={1}></Col>
              <Col span={4}>
                <div className="board-item" >
                  <div className="board-img board-img-2" >
                  </div>
                  <div className="board-content" >
                    <h3>Mr. Willson LIN</h3>
                    <p>Founder & CEO DOERS Education Group</p>
                  </div>
                </div>
              </Col>
              <Col span={1}></Col>
              <Col span={4}>
                <div className="board-item" >
                  <div className="board-img board-img-3" >
                  </div>
                  <div className="board-content" >
                    <h3>Ms. Ratana Phurik-Callebaut</h3>
                    <p>Independent Director</p>
                  </div>
                </div>
              </Col>
              <Col span={1}></Col>
              <Col span={4}>
                <div className="board-item" >
                  <div className="board-img board-img-4" >
                  </div>
                  <div className="board-content" >
                    <h3>Mr. Sila CHY</h3>
                    <p>CEO<br/>Sabay Digital Corp</p>
                  </div>
                </div>
              </Col>
              <Col span={1}></Col>
              <Col span={4}>
                <div className="board-item" >
                  <div className="board-img board-img-5" >
                  </div>
                  <div className="board-content" >
                    <h3>Mr. Sen KANG</h3>
                    <p>Managing Director Fuxin Steel Building</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="about-content-4" >
          <div className="container about-content-header" >
            <h2>STRATEGIC PARTNERS</h2>
            <p>We're especially pleased to have built strategic partnerships<br/>with forward thinking leaders in the business world.</p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
              <Col span={6}>
              </Col>
              <Col className="gutter-row" span={4} >
                <a href="https://doersasean.com/" target="_blank" rel="noopener noreferrer">
                  <div className="about-logo-partner about-logo-item-7" ></div>
                </a>
              </Col>
              <Col className="gutter-row" span={4} >
                <a href="https://sabay.com/" target="_blank" rel="noopener noreferrer">
                  <div className="about-logo-partner about-logo-item-8" ></div>
                </a>
              </Col>
              <Col className="gutter-row" span={4} >
                <a href="https://www.isigroup.com.kh/" target="_blank" rel="noopener noreferrer" >
                  <div className="about-logo-partner about-logo-item-9" ></div>
                </a>
              </Col>
              <Col span={6}>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default About;