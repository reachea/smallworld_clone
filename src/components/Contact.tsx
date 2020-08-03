import React, { Component } from 'react';
import Nav from '../Nav';
import { Row, Col } from 'antd';

import { Form, Input } from 'antd';
import styled from 'styled-components';


/* Images */
import FormLogoI from '../images/contact/address.png';
import FormLogoII from '../images/contact/email.png';
import FormLogoIII from '../images/contact/telegram.png';



/* Styled Components */
import {ContactNavBar, ContactNode, ContainerII, MapContent, MapList, MapItem, MapItemHidden, FormBtn} from '../styled-components/Style';


  /* Content I */
  
  const ContactI = styled(ContainerII)`
    padding-top: 140px;
  `;


  /* Form */

  const ContactList = styled(Row)`

    @media (max-width: 768px) {
      flex-direction: column;
    }
  `;

  const ContactListItem = styled(Col)`

    @media (max-width: 768px) {
      display: block;
      max-width: none;
      width: 100%;
      margin-bottom: 30px;
    }
  `;


  const ContactLogoImage = styled.div`
    background-size: 100% auto;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 40px;

    @media (max-width: 768px) {
      width: 70%;
    }
  `;

  const ContactLogoImageI = styled(ContactLogoImage)`
    background-image: url(${FormLogoI});
  `;

  const ContactLogoImageII = styled(ContactLogoImage)`
    background-image: url(${FormLogoII});
  `;

  const ContactLogoImageIII = styled(ContactLogoImage)`
    background-image: url(${FormLogoIII});
  `;


  const ContactAddress = styled.div`
    font-size: 20px !important;
    padding-left: 30px;
    color: #9f9090;
  `;

  const InputUsername = styled(Input)`
    background-color: #ececec;
    height: 35px;
    border-radius: 3px;
  `;

  const InputEmail = styled(Input)`
    background-color: #ececec;
    height: 35px;
    border-radius: 3px;
  `;

  const InputMessage = styled(Input.TextArea)`
    background-color: #ececec;
    height: 200px;
    border-radius: 3px;
  `;

  const FormLabel = styled.span`
    font-size: 12px;
  `;




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
      <ContactNode >
        <ContactNavBar >
          <Nav />
        </ContactNavBar>


          <ContactI>
            <ContactList>
              <ContactListItem span={12} style= {{ paddingRight: '10px' }} >
                <h2>Inquiries Request</h2>
                <div>
                  <Form {...layout} name="basic" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} className="contact-form" >
                    <label htmlFor="Username">
                      <FormLabel >Full Name</FormLabel>
                    </label>
                    <Form.Item name="username" rules={[{ required: true, message: "Please input your username!" }]} className="form-username" >
                      <InputUsername />
                    </Form.Item>
                    <label htmlFor="Email">
                      <FormLabel >Email</FormLabel>
                    </label>
                    <Form.Item name="email" rules={[{ required: true, message: "Please input your Email!" }]} className="form-email" >
                      <InputEmail />
                    </Form.Item>
                    <label htmlFor="Message">
                      <FormLabel >Message</FormLabel>
                    </label>
                    <Form.Item name="message" className="form-message" >
                      <InputMessage />
                    </Form.Item>
                    <Form.Item {...tailLayout} >
                      <FormBtn type="primary" htmlType="submit" >
                        Submit
                      </FormBtn>
                    </Form.Item>
                  </Form>
                </div>
              </ContactListItem>
              <ContactListItem span={12} style={{ paddingLeft: '10px' }} >
                <h2>Our Office</h2>
                <Row>
                  <Col span={2}>
                    <ContactLogoImageI >

                    </ContactLogoImageI>
                  </Col>
                  <Col span={22}>
                    <a href="https://www.google.com/maps/place/KOOMPI+Boran+%26+Research+Lab/@11.5676517,104.9243105,17z/data=!3m1!4b1!4m5!3m4!
                            1s0x3109515565654cc3:0x50e3c5f75018b3ff!8m2!3d11.5676465!4d104.9264992?shorturl=1" target="_blank" rel="noopener noreferrer" >
                      <ContactAddress >
                        #92 E1K, St.19m Doun Penh, Phnom Penh, Cambodia
                      </ContactAddress>
                    </a>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col span={2}>
                    <ContactLogoImageII >

                    </ContactLogoImageII>
                  </Col>
                  <Col span={22}>
                    <a href="https://smallworldventure@gmail.com" target="_blank" rel="noopener noreferrer" >
                      <ContactAddress>
                        smallworldventure@gmail.com
                      </ContactAddress>
                    </a>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col span={2}>
                    <ContactLogoImageIII >

                    </ContactLogoImageIII>
                  </Col>
                  <Col span={22}>
                    <a href="https://t.me/smallworldventure" target="_blank" rel="noopener noreferrer" >
                      <ContactAddress >
                        t.me/smallworldventure
                      </ContactAddress>
                    </a>
                  </Col>
                </Row>
              </ContactListItem>
            </ContactList>
          </ContactI>


          <MapContent>
            <MapList >
              <MapItemHidden span={5} >
              </MapItemHidden>
              <MapItem span={7} style={{ minHeight: '400px' }} >
                <h2>SmallWorld</h2>
                <p>We look forward to welcome you at any working hour. Though, most of the time there are someone at SmallWorld. There are several startups in the same building, so make sure you know who you are looking for. We will surely direct you to the right person!</p>
                <p>Look at the map, 2F-01, Raintree, #299 Preah Ang Duong, Sangkat Wat Phnom, Khan Daun Penh! Come walk around and feel it yourself.</p>
              </MapItem>
              <MapItem span={12} >
              </MapItem>
            </MapList>
          </MapContent>
      </ContactNode>
    );
  }
}

export default Contact;