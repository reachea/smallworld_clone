import React, { Component } from 'react';
import './Home.css';
import { Row, Col } from 'antd';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Nav from '../Nav';

/* Images */
import Banner from "../images/banner.png";
import BannerII from "../images/banner-2.png";

/* Styled Components */
import { HomeBtn, RowList, RowListItem, BlockListItem, BlockListItemContent, ImageItem, ImageBtn } from "../styled-components/Style";

  /* ContentI */
    const HomeI = styled.div`
      background-image: url(${Banner});
      background-position: bottom;
      background-size: inherit;
      min-height: 50vw!important;
      background-repeat: no-repeat;

      /* Extra large devices (large desktops, 1200px and up) */
      @media (max-width: 1400px) {
        background-image: none;
        background-color: #053f64;
        background-position: bottom;
        background-size: inherit;
        min-height: 50vw!important;
        background-repeat: no-repeat;
      }
    `;


  /* Content II */
    const HomeII = styled.div`
      min-height: 603px;
      background-color: #f5f5f5;
      padding-bottom: 50px;
    `;

    const HomeIIList = styled.div`
      background-color: #ebebeb;
      min-height: 500px;
      flex-grow: 1;
      background-position: top;
      background-repeat: no-repeat;

      /* Responsive Mobile */
      @media (max-width: 768px) {
        min-height: initial;
        height: 100%;
        padding-bottom: 10px;
        margin-bottom: 20px;
      }
    `;

    const HomeIIContent = styled.div`
      padding: 200px 15px 0px 15px ;

      h2 {
        text-align: center;
      }

      p {
        color: #979a9a;
        text-align: left;
        font-size: 18px !important;
        line-height: 25px;
      }
    `;


  /* Content III */
    const HomeIII = styled.div`
      min-height: 530px;
      background-image: url(${BannerII});
      background-size: cover;
      background-position: 50%;
      background-repeat: no-repeat;
    `;


  /* Content IV */
    const HomeIV = styled.div`
      min-height: 550px;
      padding-bottom: 50px;

      h2 {
        margin: 50px 0px;
        font-size: 25px !important;
        text-align: center;
      }
    `;


class Home extends Component {

  render() {
    
    return (
      <div className="home">
        <HomeI>
          <Nav />
          <div className="separator" ></div>
          <div className="container home-navbar">
            <h1 > <span className="span-1" >{'<'}</span> Homegrown Startup Community <span className="span-1" >{'/>'}</span></h1>
            <Row>
              <Col span={12} className="home-navbar-1 paragraph-1" >
                <p>
                We began in 2011 by providing a collaborative workspace environment for entrepreneurs, and then quickly moved forward raising investment capital to fund new startup projects.
                </p>
                <div className="separator" ></div>
                <p>
                With a variety of research and development projects in motion today, we're involved in startup venture building through community supported seed equity investments, together with rural ecovillage development and long-term land management.
                </p>
                <Link to="/about" >
                  <HomeBtn type="primary">
                    <span className="span-btn-1" >LEARN MORE</span>
                  </HomeBtn>
                </Link>
              </Col>
              <Col span={12} className="home-navbar-2 paragraph-1" >
              </Col>
            </Row>
          </div>
        </HomeI>


        <HomeII>
          <div className="container container-2">
            <RowList gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <RowListItem className="gutter-row" span={6}>
                  <HomeIIList className="home-item-1" >
                    <HomeIIContent >
                      <h2>Startup Community</h2>
                      <p>SmallWorld Ventures is committed to becoming the number one catalyst for funding and assisting startups in Cambodia.</p>
                    </HomeIIContent>
                  </HomeIIList>
                </RowListItem>
                <RowListItem className="gutter-row" span={6}>
                  <HomeIIList className="home-item-2" >
                    <HomeIIContent >
                      <h2>Seed Equity Investments</h2>
                      <p>Seed Equity Investments are provided to promising startup teams with projects ranging between 5,000 to 25,000 USD.</p>
                    </HomeIIContent>
                  </HomeIIList>
                </RowListItem>
                <RowListItem className="gutter-row" span={6}>
                  <HomeIIList className="home-item-3" >
                    <HomeIIContent >
                      <h2>Venture Building</h2>
                      <p>Smallworld Ventures has built an internal team of technicians engaged in research and development projects with an aim to spin off new ventures.</p>
                    </HomeIIContent>
                  </HomeIIList>
                </RowListItem>
                <RowListItem className="gutter-row" span={6}>
                  <HomeIIList className="home-item-4" >
                    <HomeIIContent >
                      <h2>Ecovillage Development</h2>
                      <p>At our rural ecovillage project, we're building a hands-on learning, working, and living environment with a balance among the natural world, education, economics, and sustainable living practices.</p>
                    </HomeIIContent>
                  </HomeIIList>
                </RowListItem>
              </RowList>
          </div>
        </HomeII>

        <HomeIII>
          <div className="container home-banner2">
            <Row gutter={24} >
              <Col span={13} className="paragraph-2" >
                <div className="home-banner2-content">
                  <h1>Have some ideas for new venture?</h1>
                  <p>We're looking for new approaches to problem solving and creating business.Do you have an innovative idea for a startup venture?</p>
                  <p>Or maybe you have a skillset in mind that you want to develop as you work within our existing SmallWorld venture.</p>
                  <p>We're open to discussing your own startup ideas, however unconventional, regardless of age, gender, or nationality.</p>
                  <p>Send us a message!</p>
                  <Link to="/contact" >
                    <HomeBtn type="primary">
                      <span className="span-btn-1" >CONTACT US</span>
                    </HomeBtn>
                  </Link>
                </div>
              </Col>
              <Col span={11} className="paragraph-2" >
              </Col>
            </Row>
          </div>
        </HomeIII>

        <HomeIV>
          <h2>COMMUNITY UPDATE</h2>
          <div className="container container-2" >
            <RowList gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
              <RowListItem span={8} className="gutter-row" >
                <BlockListItem>
                  <a href="https://medium.com/smallworldvc/smallworld-realty-soft-opening-6efc25e9b3c4" target="_blank" rel="noopener noreferrer">
                    <ImageItem className="community-image-1"></ImageItem>
                    <BlockListItemContent>
                      <h3>SmallWorld Realty Soft Openning</h3>
                      <p>On 18th November 2019, SmallWorld celebrated the official opening of our latest shared-workspace with a so...</p>
                      <ImageBtn><p>SmallWorld Venture</p></ImageBtn>
                    </BlockListItemContent>
                  </a>
                </BlockListItem>
              </RowListItem>
              <RowListItem span={8} className="gutter-row" >
                <BlockListItem>
                  <a href="https://medium.com/smallworldvc/smallworld-for-good-causes-2920ba067b3e" target="_blank" rel="noopener noreferrer">
                    <ImageItem className="community-image-2"></ImageItem>
                    <BlockListItemContent>
                      <h3>SmallWorld For Good Causes</h3>
                      <p>SmallWorld, KOOMPI and it’s affiliated start-ups are committed to spending our marketing dollars #ForGoodC...</p>
                      <ImageBtn><p>SmallWorld Venture</p></ImageBtn>
                    </BlockListItemContent>
                  </a>
                </BlockListItem>
              </RowListItem>
              <RowListItem span={8} className="gutter-row" >
                <BlockListItem >
                  <a href="https://medium.com/smallworldvc/press-release-smallworld-realty-launches-two-new-locations-65ea1a8697e7" target="_blank" rel="noopener noreferrer">
                    <ImageItem className=" community-image-3"></ImageItem>
                    <BlockListItemContent>
                      <h3>Press Release: SmallWorld Realty Launches Two New Locations</h3>
                      <p>Phnom Penh — The SmallWorld team is excited to announce the official opening of SmallWorld Realty, the two...</p>
                      <ImageBtn><p>SmallWorld Venture</p></ImageBtn>
                    </BlockListItemContent>
                  </a>
                </BlockListItem>
              </RowListItem>
            </RowList>
          </div>
        </HomeIV>

        <HomeIV>
          <h2>KOOMPI NEWS</h2>
          <div className="container container-2" >
            <RowList gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
              <RowListItem span={8} className="gutter-row" >
                <BlockListItem>
                  <a href="https://medium.com/koompi/winners-of-think-think-world-cup-d5113bb24add" target="_blank" rel="noopener noreferrer">
                    <ImageItem className=" koompi-image-1"></ImageItem>
                    <BlockListItemContent>
                      <h3>Winners of Think! Think! World Cup!</h3>
                      <p>13th July 2020 The result of Think! Think! World Cup! is finally out! {"<"}img alt="" src"...</p>
                      <ImageBtn><p>Mollika Chum</p></ImageBtn>
                    </BlockListItemContent>
                  </a>
                </BlockListItem>
              </RowListItem>
              <RowListItem span={8} className="gutter-row" >
                <BlockListItem>
                  <a href="https://medium.com/koompi/installing-android-studio-on-koompi-os-86aa5b6b199c" target="_blank" rel="noopener noreferrer">
                    <ImageItem className=" koompi-image-2"></ImageItem>
                    <BlockListItemContent>
                      <h3>Installing Android Studio on KOOMPI OS</h3>
                      <p>Cross-platform mobile apps development. In the previous section is about installing flutter on KO...</p>
                      <ImageBtn><p>Mr Solo {"(Logan Freed)"}</p></ImageBtn>
                    </BlockListItemContent>
                  </a>
                </BlockListItem>
              </RowListItem>
              <RowListItem span={8} className="gutter-row" >
                <BlockListItem >
                  <a href="https://medium.com/koompi/koompi-to-support-young-volunteers-in-project-competition-78efb1003264" target="_blank" rel="noopener noreferrer">
                    <ImageItem className=" koompi-image-3"></ImageItem>
                    <BlockListItemContent>
                      <h3>KOOMPI to Support Young Volunteers in Project Competition</h3>
                      <p>4 students from Bayon Secondary School will be participating in {"<"}a href="https://...</p>
                      <ImageBtn><p>Mollika Chum</p></ImageBtn>
                    </BlockListItemContent>
                  </a>
                </BlockListItem>
              </RowListItem>
            </RowList>
          </div>
        </HomeIV>
      </div>
    );
  }
}

export default Home;