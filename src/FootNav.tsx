import React, { Component } from 'react';
import { Layout, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import './FootNav.css';

const { Footer } = Layout;

class FootNav extends Component {
  render() {
    return (
      <div>
        <Footer>
          <div className="footNavBar container">
            <div className="footer" >
              <Row>
                <Col span={6} >
                    <Link to="/about">
                      <Button type="link" className="foot-nav" >
                        <span className="span-footer-1" >About</span>
                      </Button>
                    </Link>
                </Col>
                <Col span={7} ></Col>
                <Col span={7} ></Col>
                <Col span={4} >
                  <a href="https://t.me/smallworldventure" target="_blank" rel="noopener noreferrer">
                    <div className="telegram-foot" >
                      <Button type="link" className="foot-nav" >
                        <span className="span-footer-1" >Telegram</span>
                      </Button>
                    </div>
                  </a>
                </Col>
              </Row>
              <Row>
                <Col span={6} >
                    <Link to="/works">
                      <Button type="link" className="foot-nav" >
                        <span className="span-footer-1" >Works</span>
                      </Button>
                    </Link>
                </Col>
                <Col span={7} ></Col>
                <Col span={7} ></Col>
                <Col span={4} >
                  <a href="https://www.facebook.com/smallworldventure/" target="_blank" rel="noopener noreferrer">
                    <div className="facebook-foot" >
                      <Button type="link" className="foot-nav" >
                        <span className="span-footer-1" >Facebook</span>
                      </Button>
                    </div>
                  </a>
                </Col>
              </Row>
              <Row>
                <Col span={6} >
                    <Link to="/news">
                      <Button type="link" className="foot-nav" >
                        <span className="span-footer-1" >News</span>
                      </Button>
                    </Link>
                </Col>
                <Col span={7} ></Col>
                <Col span={7} ></Col>
                <Col span={4} >
                  <a href="https://twitter.com/smallworldvc" target="_blank" rel="noopener noreferrer">
                    <div className="twitter-foot" >
                      <Button type="link" className="foot-nav" >
                        <span className="span-footer-1" >twitter</span>
                      </Button>
                    </div>
                  </a>
                </Col>
              </Row>
              <Row>
                <Col span={6} >
                    <Link to="/contact">
                      <Button type="link" className="foot-nav" >
                        <span className="span-footer-1" >Contact</span>
                      </Button>
                    </Link>
                </Col>
                <Col span={6} ></Col>
                <Col span={6} ></Col>
                <Col span={6} >
                </Col>
              </Row>
              <Row>
                <Col span={10} ></Col>
                <Col span={5} ></Col>
                <Col span={5} ></Col>
                <Col span={4} >
                  <div className="footer-logo" ></div>
                </Col>
              </Row>
            </div>
          </div>
        </Footer>
      </div>
    );
  }
}

export default FootNav;