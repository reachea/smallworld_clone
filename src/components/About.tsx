import React, { Component } from 'react';
import './About.css';
import Nav from '../Nav';
import { Row, Col } from 'antd'; 
import styled from 'styled-components';


/* Images */
import Banner3 from '../images/About/banner-3.png';
import Banner4 from '../images/About/banner-4.png';


/* Styled Components */
import { RowList } from '../styled-components/Style';

  /* Global Styled Components */

  const AboutContentHeader = styled.div`
    text-align: center;
  `;


  /* Content I */
  const AboutI = styled.div`
    overflow: hidden;
    padding-top: 70px;

    @media (max-width: 768px) {
      padding-top: 100px;
      padding-bottom: 100px;
    }
  `;

  const AboutIBannerI = styled.div`

    padding-top: 70px;
    min-height: 760px;
    background-image: url(${Banner3});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: inherit;
    padding-right: 600px;
    margin-right: -600px;

    /* Mobile Responsive */
    @media (max-width: 768px) {
      background: none;
      display: none;
    }
  `;

  const AboutIContent = styled.div`

    margin-top: 100px;
    padding-left: 10px;
    padding-right: 10px;

    /* Mobile Responsive */
    @media (max-width: 768px) {
      h2 {
        font-size: 26px !important;
        font-weight: 700 !important;
      }

      p {
        font-size: 16px !important;
      }
    }
  `;


  /* Content II */

  const AboutII = styled.div`
    min-height: 500px;
  `;

  const AboutIIBannerI = styled.div`
    margin-top: 50px;
    min-height: 450px;
    width: 100%;
    background-image: url(${Banner4});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 992px) {
      height: 100%;
      margin-top: 0px;
      background-size: 100%;
    }
  `;

  const AboutIIContent = styled(Col)`


    /* Responsive */
    @media (max-width: 768px) {
      flex: initial;
      max-width: 100%;
    }
  `;

  const AboutIIParagraph = styled.div`
    padding-top: 120px;
    width: 100%;
    height: 100%;

    @media (max-width: 768px) {
      h2 {
        font-size: 26px !important;
        font-weight: 700 !important;
      }

      p {
        font-size: 16px !important;
      }
    }
  `;

  const AboutIILogoImg = styled.div`
    height: 100%;
    max-width: 100%;
    background-size: 100% auto;
    background-position: center;
    background-repeat: no-repeat;
  `;

  const AboutIIList = styled(Col)`
    height: 120px;
    width: 100%;

    /* Responsive */
    @media (max-width: 768px) {
      height: 150px;
    }
  `;

  const AboutIIListItem = styled(Col)`
    width: 100%;
    height: 60px;

    /* Responsive */
    @media (max-width: 768px) {
      height: 75px;
    }
  `;


  /* Content III */

    const AboutIII = styled.div`
      min-height: 650px;
      padding-top: 100px;
      background-color: #f0f1f3;
    `;

    const AboutIIIRowList = styled(RowList)`
      margin-top: 50px;
    `;

    const AboutIIIRowListItem = styled(Col)`


      @media (max-width: 768px) {
        width: 190px !important;
        max-width: initial;
        align-self: center;
      }
    `;

    const AboutIIIListItem = styled.div`

      @media( max-width: 768px ) {
        width: 100%;
      }
    `;

    const AboutIIIContent = styled.div`
      padding-top: 20px;

      h3 {
        font-size: 18px !important;
      }

      p {
        font-size: 17px !important;
      }
    `;

    const AboutIIILogoImg = styled.div`

      height: 190px !important;
      width: 100%;
      background-size: 200px 190px;
      background-position: top;
      background-repeat: no-repeat;
      cursor: pointer;
      border-radius: 100%;

      :hover {
        transition: .3s !important;
        transform: translateY(-4px);
        box-shadow: 0 0 40px 0 hsla(0,0%,77.3%,.85);
      }

      @media (max-width: 768px) {
        width: 190px !important;
      }

    `;


    /* Content IV */

    const AboutIV = styled.div`
      min-height: 500px;
      padding-top: 100px;
    `;

    const AboutIVRowList = styled(Row)`
      
      @media (max-width: 992px) {
        padding-left: 15%;
        padding-right: 10%;
      }

      @media (max-width: 768px) {
        flex: initial;
        min-height: 150px;
        width: 100%;
      }
    `;

    const AboutIVRowListItem = styled(Col)`
    

      @media (max-width: 992px) {
        max-width: 30%;
      }

      @media (max-width: 768px) {
        width: 30%;
        flex: initial;
      }
    `;

    const AboutIVRowListItemMobile = styled(Col)`
    

      @media (max-width: 992px) {
        display: none;
        flex: initial;
        max-width: initial;
      }
    `;

    const AboutIVLogoImg = styled.div`

      width: 150px;
      height: 150px;
      background-size: 100% auto;
      background-position: center;
      background-repeat: no-repeat;

      @media (max-width: 768px) {
        width: 100%;
        height: 150px;
        background-size: 100% auto;
        background-position: center;
        background-repeat: no-repeat;
      }
    `;



class About extends Component {
  render() {
    return (
      <div className="about" >
        <div className="about-navbar" >
          <Nav />
        </div>

        <AboutI >
          <div className="container container-2">
            <Row>
              <Col span={12} className="paragraph-2">
                <AboutIContent >
                  <h2>What is SmallWorld?</h2>
                  <p>Founded in 2011 as SmallWorld Cambodia, we created a shared professional workspace where progressive young business minds could explore and pursue their aspirations while transforming ideas into reality.</p>
                  <p>After five years of steady growth, SmallWorld Cambodia reorganized into SmallWorld Ventures to focus on venture building, information technologies, and the environment.</p>
                  <p>Through equity investment partnerships, we're building a land-based technical, business, and academic community based on natural philosophy and ecologically sensitive practices.</p>
                </AboutIContent>
              </Col>
              <Col span={12} className="paragraph-2">
                <AboutIBannerI></AboutIBannerI>
              </Col>
            </Row>
          </div>
        </AboutI>

        <AboutII>
          <div className="container container-2">
            <Row>
              <AboutIIContent span={12} >
                <AboutIIBannerI  ></AboutIIBannerI>
              </AboutIIContent>
              <AboutIIContent span={12} >
                <AboutIIParagraph>
                  <h2>PORTFOLIOS</h2>
                  <p>We began experimenting with equity investment partnerships in 2013, and since then we've listed a few startup teams we're proud to be partnered with from their inception.</p>
                  
                  <AboutIIList span={24}>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                      <AboutIIListItem className="gutter-row" span={8}>
                        <a href="https://codingate.com/" target="_blank" rel="noopener noreferrer">
                          <AboutIILogoImg className="about-logo-item-1"></AboutIILogoImg>
                        </a>
                      </AboutIIListItem>
                      <AboutIIListItem className="gutter-row" span={8}>
                        <a href="https://wordpress-442427-1385604.cloudwaysapps.com/" target="_blank" rel="noopener noreferrer">
                          <AboutIILogoImg className="about-logo-item-2"></AboutIILogoImg>
                        </a>
                      </AboutIIListItem>
                      <AboutIIListItem className="gutter-row" span={8}>
                        <a href="https://bookmebus.com/" target="_blank" rel="noopener noreferrer">
                          <AboutIILogoImg className="about-logo-item-3"></AboutIILogoImg>
                        </a>
                      </AboutIIListItem>
                    </Row>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                      <AboutIIListItem className="gutter-row" span={8}>
                        <a href="http://www.seavphovjivet.com/" target="_blank" rel="noopener noreferrer">
                          <AboutIILogoImg className="about-logo-item-4"></AboutIILogoImg>
                        </a>
                      </AboutIIListItem>
                      <AboutIIListItem className="gutter-row" span={8}>
                        <a href="https://fado168.com/" target="_blank" rel="noopener noreferrer">
                          <AboutIILogoImg className="about-logo-item-5"></AboutIILogoImg>
                        </a>
                      </AboutIIListItem>
                      <AboutIIListItem className="gutter-row" span={8}>
                        <a href="https://koompi.com/" target="_blank" rel="noopener noreferrer">
                          <AboutIILogoImg className="about-logo-item-6"></AboutIILogoImg>
                        </a>
                      </AboutIIListItem>
                    </Row>
                  </AboutIIList>
                </AboutIIParagraph>
              </AboutIIContent>
            </Row>
            <AboutIIBannerI className="isMobile" ></AboutIIBannerI>
          </div>
        </AboutII>

        <AboutIII>
          <AboutContentHeader className="container container-2" >
            <h2>BOARD OF DIRECTORS</h2>
            <p>We're honored to have courageous and insightful business and<br/>community leaders to serve on our Board of Directors.</p>
            <AboutIIIRowList >
              <AboutIIIRowListItem span={4} >
                <AboutIIIListItem >
                  <AboutIIILogoImg className=" board-img-1" >
                  </AboutIIILogoImg>
                  <AboutIIIContent >
                    <h3>Rithy THUL</h3>
                    <p>Co-Founder & CEO SmallWorld Venture</p>
                  </AboutIIIContent>
                </AboutIIIListItem>
              </AboutIIIRowListItem>
              <Col span={1}></Col>
              <AboutIIIRowListItem span={4} >
                <AboutIIIListItem >
                  <AboutIIILogoImg className=" board-img-2" >
                  </AboutIIILogoImg>
                  <AboutIIIContent >
                    <h3>Mr. Willson LIN</h3>
                    <p>Founder & CEO DOERS Education Group</p>
                  </AboutIIIContent>
                </AboutIIIListItem>
              </AboutIIIRowListItem>
              <Col span={1}></Col>
              <AboutIIIRowListItem span={4} >
                <AboutIIIListItem >
                  <AboutIIILogoImg className=" board-img-3" >
                  </AboutIIILogoImg>
                  <AboutIIIContent >
                    <h3>Ms. Ratana Phurik-Callebaut</h3>
                    <p>Independent Director</p>
                  </AboutIIIContent>
                </AboutIIIListItem>
              </AboutIIIRowListItem>
              <Col span={1}></Col>
              <AboutIIIRowListItem span={4} >
                <AboutIIIListItem >
                  <AboutIIILogoImg className=" board-img-4" >
                  </AboutIIILogoImg>
                  <AboutIIIContent >
                    <h3>Mr. Sila CHY</h3>
                    <p>CEO<br/>Sabay Digital Corp</p>
                  </AboutIIIContent>
                </AboutIIIListItem>
              </AboutIIIRowListItem>
              <Col span={1}></Col>
              <AboutIIIRowListItem span={4} >
                <AboutIIIListItem >
                  <AboutIIILogoImg className=" board-img-5" >
                  </AboutIIILogoImg>
                  <AboutIIIContent >
                    <h3>Mr. Sen KANG</h3>
                    <p>Managing Director Fuxin Steel Building</p>
                  </AboutIIIContent>
                </AboutIIIListItem>
              </AboutIIIRowListItem>
            </AboutIIIRowList>
          </AboutContentHeader>
        </AboutIII>

        <AboutIV >
          <AboutContentHeader className="container container-2" >
            <h2>STRATEGIC PARTNERS</h2>
            <p>We're especially pleased to have built strategic partnerships<br/>with forward thinking leaders in the business world.</p>
            <AboutIVRowList gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
              <AboutIVRowListItemMobile span={6} >
              </AboutIVRowListItemMobile>
              <AboutIVRowListItem className="gutter-row" span={4} >
                <a href="https://doersasean.com/" target="_blank" rel="noopener noreferrer">
                  <AboutIVLogoImg className="about-logo-item-7" ></AboutIVLogoImg>
                </a>
              </AboutIVRowListItem>
              <AboutIVRowListItem className="gutter-row" span={4} >
                <a href="https://sabay.com/" target="_blank" rel="noopener noreferrer">
                  <AboutIVLogoImg className=" about-logo-item-8" ></AboutIVLogoImg>
                </a>
              </AboutIVRowListItem>
              <AboutIVRowListItem className="gutter-row" span={4} >
                <a href="https://www.isigroup.com.kh/" target="_blank" rel="noopener noreferrer" >
                  <AboutIVLogoImg className=" about-logo-item-9" ></AboutIVLogoImg>
                </a>
              </AboutIVRowListItem>
              <AboutIVRowListItemMobile span={6} >
              </AboutIVRowListItemMobile>
            </AboutIVRowList>
          </AboutContentHeader>
        </AboutIV>
      </div>
    );
  }
}

export default About;