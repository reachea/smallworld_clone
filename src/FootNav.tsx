import React, { Component } from 'react';
import { Layout, Button, Row, Col, Switch } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* Images */
import FootLogo from './images/logo/Logo_SW_Gray.png';

import FootTelegram from './images/socialMedia/telegram.svg';
import FootFacebook from './images/socialMedia/facebook.svg';
import FootTwitter from './images/socialMedia/twitter.svg';


/* Styled Components */
import { Container } from './styled-components/Style';

const { Footer } = Layout;

  /* Some Styled Content */
  const FootContainer = styled(Footer)`
    background-color: ${props => props.theme.mode === 'dark'? '#053f64' : '#f0f2f5' };
  `;

  const FootNavBar = styled(Container)`
    min-height: 355px;
  `;

  const FooterNav = styled.div`
    padding-top: 4% !important;
  `;

  const FooterNavButton = styled(Button)`
    height: 45px;
  `;

  const FooterNavSpan = styled.span`
    color: #8e8b8c;
    font-size: 20px !important;
  `;

  const FooterLogo = styled.div`
    height: 100px;
    background-image: url(${FootLogo});
    background-size: 100% auto;
    background-position: right;
    background-repeat: no-repeat;
  `;

  const FooterImage = styled.div`
    background-size: 32px;
    background-position: left;
    background-repeat: no-repeat;
    width: 100%;
    height: 50px;
    padding-left: 35px;
  `;

  const FooterTelegram = styled(FooterImage)`
    background-image: url(${FootTelegram});
  `;

  const FooterFacebook = styled(FooterImage)`
    background-image: url(${FootFacebook});
  `;

  const Footertwiiter = styled(FooterImage)`
    background-image: url(${FootTwitter});
  `;

  const FootCol = styled(Col)`

    @media (max-width: 768px) {
      flex: initial;
    }
  `;

  const FooterCol = styled(Col)`

  @media (max-width: 768px) {
    margin-left: 45%;
  }
  `;


  interface FootNavProp {
    onThemeChange: any;
    theme: any;
  }

class FootNav extends Component<FootNavProp> {

  protected theme:any

  constructor(props: any){
    super(props);

    this.theme = this.props.theme;

    this.themeChange = this.themeChange.bind(this);
  }

  themeChange = (checked: any) => {
    this.theme = !this.theme;
    this.props.onThemeChange(this.theme);
  }

  render() {
    return (
      <div>
          <FootContainer >
            <FootNavBar>
              <FooterNav >
                <Row>
                  <Col span={6} >
                      <Link to="/about">
                        <Button type="link" className="foot-nav" >
                          <FooterNavSpan >About</FooterNavSpan>
                        </Button>
                      </Link>
                  </Col>
                  <FootCol span={7} ></FootCol>
                  <FootCol span={7} ></FootCol>
                  <FooterCol span={4} >
                    <a href="https://t.me/smallworldventure" target="_blank" rel="noopener noreferrer">
                      <FooterTelegram >
                        <FooterNavButton type="link" >
                          <FooterNavSpan >Telegram</FooterNavSpan>
                        </FooterNavButton>
                      </FooterTelegram>
                    </a>
                  </FooterCol>
                </Row>
                <Row>
                  <Col span={6} >
                      <Link to="/works">
                        <FooterNavButton type="link" >
                          <FooterNavSpan >Works</FooterNavSpan>
                        </FooterNavButton>
                      </Link>
                  </Col>
                  <FootCol span={7} ></FootCol>
                  <FootCol span={7} ></FootCol>
                  <FooterCol span={4} >
                    <a href="https://www.facebook.com/smallworldventure/" target="_blank" rel="noopener noreferrer">
                      <FooterFacebook >
                        <FooterNavButton type="link" >
                          <FooterNavSpan >Facebook</FooterNavSpan>
                        </FooterNavButton>
                      </FooterFacebook>
                    </a>
                  </FooterCol>
                </Row>
                <Row>
                  <Col span={6} >
                      <Link to="/news">
                        <FooterNavButton type="link" >
                          <FooterNavSpan >News</FooterNavSpan>
                        </FooterNavButton>
                      </Link>
                  </Col>
                  <FootCol span={7} ></FootCol>
                  <FootCol span={7} ></FootCol>
                  <FooterCol span={4} >
                    <a href="https://twitter.com/smallworldvc" target="_blank" rel="noopener noreferrer">
                      <Footertwiiter >
                        <FooterNavButton type="link" >
                          <FooterNavSpan >twitter</FooterNavSpan>
                        </FooterNavButton>
                      </Footertwiiter>
                    </a>
                  </FooterCol>
                </Row>
                <Row>
                  <Col span={6} >
                      <Link to="/contact">
                        <FooterNavButton type="link" >
                          <FooterNavSpan >Contact</FooterNavSpan>
                        </FooterNavButton>
                      </Link>
                  </Col>
                  <FootCol span={7} ></FootCol>
                  <FootCol span={7} ></FootCol>
                  <FooterCol span={4} >
                  </FooterCol>
                </Row>
                <Row>
                  <Col span={6} >
                    <Switch checked={this.theme} onChange={this.themeChange} style={{ marginTop: "10px", marginLeft: "15px" }} />
                  </Col>
                  <FootCol span={7} ></FootCol>
                  <FootCol span={7} ></FootCol>
                  <FooterCol span={4} >
                    <FooterLogo ></FooterLogo>
                  </FooterCol>
                </Row>
              </FooterNav>
            </FootNavBar>
          </FootContainer>
      </div>
    );
  }
}

export default FootNav;