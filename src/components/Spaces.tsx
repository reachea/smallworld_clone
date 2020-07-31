import React, { Component } from 'react';
import './Space.css';
import Nav from '../Nav';
import { Row, Col } from 'antd';
import GoogleMapReact from 'google-map-react';

class Spaces extends Component {
  render() {
    return (
      <div className="space" >
        <div className="spaces-navbar" >
          <Nav />
        </div>
        
        <div className="space-content-1">
          <div className="container container-2 container-3" >
            <Row className="row-list" >
              <Col span={10} className="row-item-mobile-1" >
                <div className="space-paragraph row-item-mobile-1" >
                  <h1>Working community of professionals, creatives and artists</h1>
                  <br/>
                  <br/>
                  <h2>Starting from</h2>
                  <div className="space-item-btn" >
                    <p>$99/month</p>
                  </div>
                </div>
                <br/>
                <br/>
                <a href="#space-about">
                  <div className="go-down"></div>
                </a>
              </Col>
              <Col span={1} className="row-item-mobile-1"></Col>
              <Col span={13} className="row-item-mobile-1" >
                <div className="space-banner">
                </div>
              </Col>
            </Row>
          </div>
        </div>


        <div className="space-content-2">
          <div className="container container-2 ">
            <Row className="row-list" >
              <Col span={6} className="row-item-mobile-1" >
                <div id="space-about" >
                  <h1>About</h1>
                </div>
              </Col>
              <Col span={18} className="row-item-mobile-1">
                <div className="space-content">
                  <p>SmallWorld provides professional shared workspace and business accelerator space where freelancers, newly forming and existing enterprises can collaborate in a professional, productive, flexible and innovative workspace with established experts.</p>
                  <p>SmallWorld Realty spaces are located and designed to be an integral hub for the Southeast Asian business and startup community offering the benefits you have come to expect from a full service provider.</p>
                  <p>We are all tied together with a professional scene that gives you unlimited opportunities.</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="space-content-3">
          <div className="container">
            <Row gutter={[8, 8]} className="space-list-1">
              <Col className="gutter-row" span={8}>
                <div className="space-item space-item-1"></div>
              </Col>
              <Col className="gutter-row" span={8}>
                <div className="space-item space-item-2"></div>
              </Col>
              <Col className="gutter-row" span={4}>
                <div className="space-item space-item-3"></div>
              </Col>
              <Col className="gutter-row" span={4}>
                <div className="space-item space-item-4"></div>
              </Col>
            </Row>
            <div className="clear"></div>
            <Row gutter={[8, 8]} className="space-list-2">
              <Col className="gutter-row" span={7} >
                <div className="space-item space-item-5"></div>
              </Col>
              <Col className="gutter-row" span={3} >
                <div className="space-item space-item-6"></div>
              </Col>
              <Col className="gutter-row" span={7} >
                <div className="space-item space-item-7"></div>
              </Col>
              <Col className="gutter-row" span={7} >
                <div className="space-item space-item-8"></div>
              </Col>
            </Row>
          </div>
        </div>


        <div className="space-content-2">
          <div className="container container-2">
            <Row className="row-list" >
              <Col span={6} className="row-item-mobile-1">
                <div>
                  <h1>Why SmallWorld Realty?</h1>
                </div>
              </Col>
              <Col span={18} className="row-item-mobile-1">
                <div className="space-content">
                  <p>We spent approximately one-third of our day at work. What defines a good work space and what are the factors that contribute to productivity and results?</p>
                  <p>SmallWorld actively explores these components to ensure that we can deliver the best work environment for you! SmallWorld Realty spaces are located in commercial areas of Phnom Penh, acting as a convenient headquarters for professionals and start-ups.</p>
                  <p>We start with the basics. Each SmallWorld Realty spaces are clean, neat, and minimalist. However, we have a variety of different spaces for different needs and preferences. Not all teams want to work in cubicles and not all teams want their space too open. That is okay. We are here to help!</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>


        <div className="space-content-2">
          <div className="container container-2">
            <Row className="row-list" >
              <Col span={6} className="row-item-mobile-1" >
                <div>
                  <h1>SmallWorld<br/>Raintree</h1>
                </div>
              </Col>
              <Col span={18} className="row-item-mobile-1" >
                <div className="space-content">
                  <p>If you are looking for a professional, corporate-style work space in the heart of the city, SmallWorld Raintree might be your best fit. We offer full-range services from high-speed wifi, utilities, meeting room(s), and event spaces. What’s more? Most people know where Raintree is so you don’t have to break a sweat giving directions to your clients.</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>


        <div className="space-content-2">
          <div className="container container-2">
            <Row className="row-list" >
              <Col span={6} className="row-item-mobile-1" >
                <div>
                  <h1>SmallWorld Pteas Boran</h1>
                </div>
              </Col>
              <Col span={18} className="row-item-mobile-1" >
                <div className="space-content">
                  <p>What if your team likes your space a little unconventional? We’d like to introduce you to a more homely option. Small World Pteas Boran offers multiple array of rooms to choose from, each of which has its own charm. It isn’t your typical white-wall, glass-door kind of room and maybe that is why your team might like it more!</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>


        <div className="contact-content-map" >
            <Row className="map-list" >
              <Col span={5} className="map-item-mobile-1-hidden" >
              </Col>
              <Col span={7} className="map-item-mobile-1 paragraph-3" >
                <h2>SmallWorld</h2>
                <p>We look forward to welcome you at any working hour. Though, most of the time there are someone at SmallWorld. There are several startups in the same building, so make sure you know who you are looking for. We will surely direct you to the right person!</p>
                <p>Look at the map, 2F-01, Raintree, #299 Preah Ang Duong, Sangkat Wat Phnom, Khan Daun Penh! Come walk around and feel it yourself.</p>
              </Col>
              <Col span={12} >
              <div style={{ height: '100%', width: '100%' }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: "GOOGLE_API_KEY" }}
                  defaultCenter={{ lat: 11.556374, lng: 104.928207 }}
                  defaultZoom={10}
                >
                  {/* Marker */}
                </GoogleMapReact>
              </div>
              </Col>
            </Row>
          </div>
      </div>
    );
  }
}

export default Spaces;