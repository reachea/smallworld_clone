import React, { Component } from 'react';
import './Space.css';
import Nav from '../Nav';
import { Row, Col } from 'antd';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';


/* Images */
import Banner from '../images/space/smallworld_realty_banner.png';
import ArrowDown from '../images/space/download-arrow.svg';



/* Styled Components */
import {UnclickableBtn, RowList, RowListItem,MapContent, MapList, MapItem, MapItemHidden} from '../styled-components/Style';


  /* Content I */

  const SpaceI = styled.div`
    padding-top: 130px;
    min-height: 100vh;
  `;

  const SpaceIParagraph = styled.div`
    h1 {
      padding-top: 20px;
      font-size: 37px !important;
      text-align: left;
    }

    h2 {
      color: #ec0a5a;
    }
  `;

  const SpaceBannerI = styled.div`
      height: 500px;
      width: 100%;
      background-image: url(${Banner});
      background-position: top;
      background-size: 100% auto;
      background-repeat: no-repeat;
  `;

  const GoDownBtn = styled.div`
      height: 100px;
      width: 50px;
      background-image: url(${ArrowDown});
      background-position: center;
      background-size: 60px 130px;
      background-repeat: no-repeat;
  `;

  /* Content II */

    const SpaceII = styled.div`
      min-height: 200px;
      margin-bottom: 30px;
    `;

    const SpaceIIContent = styled.div`
      p {
        font-size: 18px !important;
        color: black;
      }
    `;

    /* Content III */

    const SpaceIII = styled.div`
      min-height: 500px;
    `;

    const SpaceIIIListItem = styled.div`
      width: 100%;
      height: 200px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100% 200px;
    `;






class Spaces extends Component {
  render() {
    return (
      <div className="space" >
        <div className="spaces-navbar" >
          <Nav />
        </div>
        
        <SpaceI>
          <div className="container container-2 container-3" >
            <RowList >
              <RowListItem span={10} >
                <SpaceIParagraph >
                  <h1>Working community of professionals, creatives and artists</h1>
                  <br/>
                  <br/>
                  <h2>Starting from</h2>
                  <UnclickableBtn >
                    <p>$99/month</p>
                  </UnclickableBtn>
                  <br/>
                  <br/>
                  <a href="#space-about">
                    <GoDownBtn></GoDownBtn>
                  </a>
                </SpaceIParagraph>
              </RowListItem>
              <RowListItem span={1} ></RowListItem>
              <RowListItem span={13} >
                <SpaceBannerI></SpaceBannerI>
              </RowListItem>
            </RowList>
          </div>
        </SpaceI>


        <SpaceII>
          <div className="container container-2 ">
            <RowList >
              <RowListItem span={6} >
                <div id="space-about" >
                  <h1>About</h1>
                </div>
              </RowListItem>
              <RowListItem span={18} >
                <SpaceIIContent>
                  <p>SmallWorld provides professional shared workspace and business accelerator space where freelancers, newly forming and existing enterprises can collaborate in a professional, productive, flexible and innovative workspace with established experts.</p>
                  <p>SmallWorld Realty spaces are located and designed to be an integral hub for the Southeast Asian business and startup community offering the benefits you have come to expect from a full service provider.</p>
                  <p>We are all tied together with a professional scene that gives you unlimited opportunities.</p>
                </SpaceIIContent>
              </RowListItem>
            </RowList>
          </div>
        </SpaceII>

        <SpaceIII>
          <div className="container">
            <Row gutter={[8, 8]}>
              <Col className="gutter-row" span={8}>
                <SpaceIIIListItem className=" space-item-1"></SpaceIIIListItem>
              </Col>
              <Col className="gutter-row" span={8}>
                <SpaceIIIListItem className=" space-item-2"></SpaceIIIListItem>
              </Col>
              <Col className="gutter-row" span={4}>
                <SpaceIIIListItem className=" space-item-3"></SpaceIIIListItem>
              </Col>
              <Col className="gutter-row" span={4}>
                <SpaceIIIListItem className=" space-item-4"></SpaceIIIListItem>
              </Col>
            </Row>
            <div className="clear"></div>
            <Row gutter={[8, 8]}>
              <Col className="gutter-row" span={7} >
                <SpaceIIIListItem className=" space-item-5"></SpaceIIIListItem>
              </Col>
              <Col className="gutter-row" span={3} >
                <SpaceIIIListItem className=" space-item-6"></SpaceIIIListItem>
              </Col>
              <Col className="gutter-row" span={7} >
                <SpaceIIIListItem className=" space-item-7"></SpaceIIIListItem>
              </Col>
              <Col className="gutter-row" span={7} >
                <SpaceIIIListItem className=" space-item-8"></SpaceIIIListItem>
              </Col>
            </Row>
          </div>
        </SpaceIII>


        <SpaceII>
          <div className="container container-2">
            <RowList >
              <RowListItem span={6} >
                <div>
                  <h1>Why SmallWorld Realty?</h1>
                </div>
              </RowListItem>
              <RowListItem span={18} >
                <SpaceIIContent>
                  <p>We spent approximately one-third of our day at work. What defines a good work space and what are the factors that contribute to productivity and results?</p>
                  <p>SmallWorld actively explores these components to ensure that we can deliver the best work environment for you! SmallWorld Realty spaces are located in commercial areas of Phnom Penh, acting as a convenient headquarters for professionals and start-ups.</p>
                  <p>We start with the basics. Each SmallWorld Realty spaces are clean, neat, and minimalist. However, we have a variety of different spaces for different needs and preferences. Not all teams want to work in cubicles and not all teams want their space too open. That is okay. We are here to help!</p>
                </SpaceIIContent>
              </RowListItem>
            </RowList>
          </div>
        </SpaceII>


        <SpaceII>
          <div className="container container-2">
            <RowList >
              <RowListItem span={6} >
                <div>
                  <h1>SmallWorld Raintree</h1>
                </div>
              </RowListItem>
              <RowListItem span={18} >
                <SpaceIIContent>
                  <p>If you are looking for a professional, corporate-style work space in the heart of the city, SmallWorld Raintree might be your best fit. We offer full-range services from high-speed wifi, utilities, meeting room(s), and event spaces. What’s more? Most people know where Raintree is so you don’t have to break a sweat giving directions to your clients.</p>
                </SpaceIIContent>
              </RowListItem>
            </RowList>
          </div>
        </SpaceII>


        <SpaceII>
          <div className="container container-2">
            <RowList>
              <RowListItem span={6} >
                <div>
                  <h1>SmallWorld Pteas Boran</h1>
                </div>
              </RowListItem>
              <RowListItem span={18} >
                <SpaceIIContent>
                  <p>What if your team likes your space a little unconventional? We’d like to introduce you to a more homely option. Small World Pteas Boran offers multiple array of rooms to choose from, each of which has its own charm. It isn’t your typical white-wall, glass-door kind of room and maybe that is why your team might like it more!</p>
                </SpaceIIContent>
              </RowListItem>
            </RowList>
          </div>
        </SpaceII>


        <MapContent >
            <MapList >
              <MapItemHidden span={5} >
              </MapItemHidden>
              <MapItem span={7} className="paragraph-3" >
                <h2>SmallWorld</h2>
                <p>We look forward to welcome you at any working hour. Though, most of the time there are someone at SmallWorld. There are several startups in the same building, so make sure you know who you are looking for. We will surely direct you to the right person!</p>
                <p>Look at the map, 2F-01, Raintree, #299 Preah Ang Duong, Sangkat Wat Phnom, Khan Daun Penh! Come walk around and feel it yourself.</p>
              </MapItem>
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
            </MapList>
          </MapContent>
      </div>
    );
  }
}

export default Spaces;