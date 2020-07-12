import React, { Component } from 'react';
import { Layout, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const { Footer } = Layout;

class FootNav extends Component {
  render() {
    return (
      <div>
        <Footer>
          <div className="footNavBar">
            <Row>
              <Col span={8} >
                <div className="footNav">
                  <Link to="/about">
                    <Button type="link" >About</Button>
                  </Link>
                  <Link to="/works">
                    <Button type="link" >Works</Button>
                  </Link>
                  <Link to="/news">
                    <Button type="link" >News</Button>
                  </Link>
                  <Link to="/contact">
                    <Button type="link" >Contact</Button>
                  </Link>
                </div>
              </Col>
              <Col span={8} >
              </Col>
              <Col span={8} >
              </Col>
            </Row>
          </div>
        </Footer>
      </div>
    );
  }
}

export default FootNav;