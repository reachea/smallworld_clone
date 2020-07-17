import React, { Component } from 'react';
import './Contact.css';
import Nav from '../Nav';
import { Row, Col } from 'antd';
import GoogleMapReact from 'google-map-react';

import { Form, Input, Button } from 'antd';

const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 16 },
};

class Contact<T> extends Component<T> {

  render() {

    const onFinish = (values: any) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };

    return (
      <div className="contact" >
        <div className="contact-navbar" >
          <Nav />
        </div>
        <div className="container contact-content-1">
            <Row>
              <Col span={12} className="left-content" >
                <h2>Inquiries Request</h2>
                <div>
                  <Form {...layout} name="basic" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} className="contact-form" >
                    <label htmlFor="Username">
                      <span className="form-label" >Full Name</span>
                    </label>
                    <Form.Item name="username" rules={[{ required: true, message: "Please input your username!" }]} className="form-username" >
                      <Input id="Username" />
                    </Form.Item>
                    <label htmlFor="Email">
                      <span className="form-label" >Email</span>
                    </label>
                    <Form.Item name="email" rules={[{ required: true, message: "Please input your Email!" }]} className="form-email" >
                      <Input id="Email" />
                    </Form.Item>
                    <label htmlFor="Message">
                      <span className="form-label" >Message</span>
                    </label>
                    <Form.Item name="message" className="form-message" >
                      <Input.TextArea id="Message" />
                    </Form.Item>
                    <Form.Item {...tailLayout} >
                      <Button type="primary" htmlType="submit" className="form-btn" >
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </Col>
              <Col span={12} className="right-content" >
                <h2>Our Office</h2>
                <Row>
                  <Col span={2}>
                    <div className="right-content-img-1" >

                    </div>
                  </Col>
                  <Col span={22}>
                    <a href="https://www.google.com/maps/place/KOOMPI+Boran+%26+Research+Lab/@11.5676517,104.9243105,17z/data=!3m1!4b1!4m5!3m4!
                            1s0x3109515565654cc3:0x50e3c5f75018b3ff!8m2!3d11.5676465!4d104.9264992?shorturl=1" target="_blank" rel="noopener noreferrer" >
                      <span className="right-content-address" >
                        #92 E1K, St.19m Doun Penh, Phnom Penh, Cambodia
                      </span>
                    </a>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col span={2}>
                    <div className="right-content-img-2" >

                    </div>
                  </Col>
                  <Col span={22}>
                    <a href="https://smallworldventure@gmail.com" target="_blank" rel="noopener noreferrer" >
                      <span className="right-content-address" >
                        smallworldventure@gmail.com
                      </span>
                    </a>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col span={2}>
                    <div className="right-content-img-3" >

                    </div>
                  </Col>
                  <Col span={22}>
                    <a href="https://t.me/smallworldventure" target="_blank" rel="noopener noreferrer" >
                      <span className="right-content-address" >
                        t.me/smallworldventure
                      </span>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="contact-content-map" >
            <Row>
              <Col span={5} >
              </Col>
              <Col span={7} >
                <h2>SmallWorld</h2>
                <p>We look forward to welcome you at any working hour. Though, most of the time there are someone at SmallWorld. There are several startups in the same building, so make sure you know who you are looking for. We will surely direct you to the right person!</p>
                <p>Look at the map, 2F-01, Raintree, #299 Preah Ang Duong, Sangkat Wat Phnom, Khan Daun Penh! Come walk around and feel it yourself.</p>
              </Col>
              <Col span={12} >
              <div style={{ height: '400px', width: '100%' }}>
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

export default Contact;