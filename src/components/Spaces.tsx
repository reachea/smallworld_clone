import React, { Component } from 'react';
import Nav from '../Nav';
import { Row, Col } from 'antd';
import styled from 'styled-components';


/* Images */
  import Banner from '../images/space/smallworld_realty_banner.png';
  import ArrowDown from '../images/space/download-arrow.svg';

  /* Content III Images */
  import SpaceImageI from '../images/space/realty1.jpg';
  import SpaceImageII from '../images/space/realty5.jpg';
  import SpaceImageIII from '../images/space/realty2.jpg';
  import SpaceImageIV from '../images/space/realty3.jpg';
  import SpaceImageV from '../images/space/boran4.jpg';
  import SpaceImageVI from '../images/space/realty4.jpg';
  import SpaceImageVII from '../images/space/boran1.jpg';
  import SpaceImageVIII from '../images/space/boran3.jpg';



/* Styled Components */
import {SpaceNode, SpaceNavBar, ContainerIII, ContainerII, Container, UnclickableBtn, RowList, RowListItem,MapContent, MapList, MapItem, MapItemHidden} from '../styled-components/Style';


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
        color: ${props => props.theme.mode === 'dark'? '#b7e3fa' : '#015e98'};
      }

      h2 {
        color: ${props => props.theme.mode === 'dark'? '#b7e3fa' : '#015e98'};
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

      const SpaceItemTitle = styled.div`
        h1 {
          color: ${props => props.theme.mode === 'dark'? '#b7e3fa' : '#015e98'};
        }
      `;

      const SpaceIIContent = styled.div`
        p {
          font-size: 18px !important;
          color: ${props => props.theme.mode === 'dark'? 'white' : 'black'};
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

    const SpaceIIIListItemI = styled(SpaceIIIListItem)`
      background-image: url(${SpaceImageI});
    `;
    
    const SpaceIIIListItemII = styled(SpaceIIIListItem)`
      background-image: url(${SpaceImageII});
    `;

    const SpaceIIIListItemIII = styled(SpaceIIIListItem)`
      background-image: url(${SpaceImageIII});
    `;

    const SpaceIIIListItemIV = styled(SpaceIIIListItem)`
      background-image: url(${SpaceImageIV});
    `;

    const SpaceIIIListItemV = styled(SpaceIIIListItem)`
      background-image: url(${SpaceImageV});
    `;

    const SpaceIIIListItemVI = styled(SpaceIIIListItem)`
      background-image: url(${SpaceImageVI});
    `;

    const SpaceIIIListItemVII = styled(SpaceIIIListItem)`
      background-image: url(${SpaceImageVII});
    `;

    const SpaceIIIListItemVIII = styled(SpaceIIIListItem)`
      background-image: url(${SpaceImageVIII});
    `;

  /* Extra */
  
  const Clear = styled.div`
    height: 5px;
  `;





class Spaces extends Component {
  render() {
    return (
      <SpaceNode >
        <SpaceNavBar >
          <Nav />
        </SpaceNavBar>
        
        <SpaceI>
          <ContainerIII >
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
          </ContainerIII>
        </SpaceI>


        <SpaceII>
          <ContainerII>
            <RowList >
              <RowListItem span={6} >
                <SpaceItemTitle id="space-about" >
                  <h1>About</h1>
                </SpaceItemTitle>
              </RowListItem>
              <RowListItem span={18} >
                <SpaceIIContent>
                  <p>SmallWorld provides professional shared workspace and business accelerator space where freelancers, newly forming and existing enterprises can collaborate in a professional, productive, flexible and innovative workspace with established experts.</p>
                  <p>SmallWorld Realty spaces are located and designed to be an integral hub for the Southeast Asian business and startup community offering the benefits you have come to expect from a full service provider.</p>
                  <p>We are all tied together with a professional scene that gives you unlimited opportunities.</p>
                </SpaceIIContent>
              </RowListItem>
            </RowList>
          </ContainerII>
        </SpaceII>

        <SpaceIII>
          <Container>
            <Row gutter={[8, 8]}>
              <Col className="gutter-row" span={8}>
                <SpaceIIIListItemI ></SpaceIIIListItemI>
              </Col>
              <Col className="gutter-row" span={8}>
                <SpaceIIIListItemII ></SpaceIIIListItemII>
              </Col>
              <Col className="gutter-row" span={4}>
                <SpaceIIIListItemIII ></SpaceIIIListItemIII>
              </Col>
              <Col className="gutter-row" span={4}>
                <SpaceIIIListItemIV ></SpaceIIIListItemIV>
              </Col>
            </Row>
            <Clear></Clear>
            <Row gutter={[8, 8]}>
              <Col className="gutter-row" span={7} >
                <SpaceIIIListItemV ></SpaceIIIListItemV>
              </Col>
              <Col className="gutter-row" span={3} >
                <SpaceIIIListItemVI ></SpaceIIIListItemVI>
              </Col>
              <Col className="gutter-row" span={7} >
                <SpaceIIIListItemVII ></SpaceIIIListItemVII>
              </Col>
              <Col className="gutter-row" span={7} >
                <SpaceIIIListItemVIII ></SpaceIIIListItemVIII>
              </Col>
            </Row>
          </Container>
        </SpaceIII>


        <SpaceII>
          <ContainerII>
            <RowList >
              <RowListItem span={6} >
                <SpaceItemTitle>
                  <h1>Why SmallWorld Realty?</h1>
                </SpaceItemTitle>
              </RowListItem>
              <RowListItem span={18} >
                <SpaceIIContent>
                  <p>We spent approximately one-third of our day at work. What defines a good work space and what are the factors that contribute to productivity and results?</p>
                  <p>SmallWorld actively explores these components to ensure that we can deliver the best work environment for you! SmallWorld Realty spaces are located in commercial areas of Phnom Penh, acting as a convenient headquarters for professionals and start-ups.</p>
                  <p>We start with the basics. Each SmallWorld Realty spaces are clean, neat, and minimalist. However, we have a variety of different spaces for different needs and preferences. Not all teams want to work in cubicles and not all teams want their space too open. That is okay. We are here to help!</p>
                </SpaceIIContent>
              </RowListItem>
            </RowList>
          </ContainerII>
        </SpaceII>


        <SpaceII>
          <ContainerII>
            <RowList >
              <RowListItem span={6} >
                <SpaceItemTitle>
                  <h1>SmallWorld Raintree</h1>
                </SpaceItemTitle>
              </RowListItem>
              <RowListItem span={18} >
                <SpaceIIContent>
                  <p>If you are looking for a professional, corporate-style work space in the heart of the city, SmallWorld Raintree might be your best fit. We offer full-range services from high-speed wifi, utilities, meeting room(s), and event spaces. What’s more? Most people know where Raintree is so you don’t have to break a sweat giving directions to your clients.</p>
                </SpaceIIContent>
              </RowListItem>
            </RowList>
          </ContainerII>
        </SpaceII>


        <SpaceII>
          <ContainerII>
            <RowList>
              <RowListItem span={6} >
                <SpaceItemTitle>
                  <h1>SmallWorld Pteas Boran</h1>
                </SpaceItemTitle>
              </RowListItem>
              <RowListItem span={18} >
                <SpaceIIContent>
                  <p>What if your team likes your space a little unconventional? We’d like to introduce you to a more homely option. Small World Pteas Boran offers multiple array of rooms to choose from, each of which has its own charm. It isn’t your typical white-wall, glass-door kind of room and maybe that is why your team might like it more!</p>
                </SpaceIIContent>
              </RowListItem>
            </RowList>
          </ContainerII>
        </SpaceII>


        <MapContent >
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
      </SpaceNode>
    );
  }
}

export default Spaces;