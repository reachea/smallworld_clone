import React, { Component } from 'react';
import { Row } from 'antd';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Nav from '../Nav';

/* Images */
import Banner from "../images/banner.png";
import BannerII from "../images/banner-2.png";

  /* Content II */
  import ImageIContentII from '../images/blurb-1.png';
  import ImageIIContentII from '../images/blurb-2.png';
  import ImageIIIContentII from '../images/blurb-3.png';
  import ImageIVContentII from '../images/blurb-4.png';

  /* Content IV */
  import ImageIContentIV from '../images/home/community-item-1.jpeg';
  import ImageIIContentIV from '../images/home/community-item-2.jpeg';
  import ImageIIIContentIV from '../images/home/community-item-3.jpeg';

  /* Content V */
  import ImageIContentV from '../images/home/koompi-image-1.png';
  import ImageIIContentV from '../images/home/koompi-image-2.png';
  import ImageIIIContentV from '../images/home/koompi-image-3.png';



/* Styled Components */
import { HomeNode, Container, ContainerII, ParagraphI, ParagraphII, HomeBtn, RowList, RowListItem, BlockListItem, BlockListItemContent, ImageItem, ImageBtn } from "../styled-components/Style";

  /* ContentI */
    const HomeNavBar = styled(Container)`
      width: 100%;
      padding-top: 40px;
      min-height: 50vw!important;

      h1 {
        font-size: 28px !important;
      }

      @media (max-width: 992px) {
        padding-bottom: 50px;
      }

      @media (max-width: 480px) {
        h1 {
          font-size: 24px !important;
        }
      }
    `;

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

    const HomeNavBarI = styled(ParagraphI)`

      @media (max-width: 480px) {
        p {
          font-size: 16px !important;
        }
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

      h2 {
        font-size: 22px !important;
      }

      /* Responsive Mobile */
      @media (max-width: 768px) {
        min-height: initial;
        height: 100%;
        padding-bottom: 10px;
        margin-bottom: 20px;
      }
    `;

    const HomeIIListI = styled(HomeIIList)`
      background-image: url(${ImageIContentII});
    `;

    const HomeIIListII = styled(HomeIIList)`
      background-image: url(${ImageIIContentII});
    `;

    const HomeIIListIII = styled(HomeIIList)`
      background-image: url(${ImageIIIContentII});
    `;

    const HomeIIListIV = styled(HomeIIList)`
      background-image: url(${ImageIVContentII});
    `;

    const HomeIIContent = styled.div`
      padding: 200px 15px 0px 15px ;

      h2 {
        text-align: center;
        color: #015e98;
        font-size: 24px;
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

    const HomeBannerIII = styled(Container)`
      padding: 6% 0;
    `;

    const HomeBannerIIIContent = styled.div`
      h1 {
        font-size: 30px !important;
        font-weight: 700;
      }

      p {
        font-size: 19px !important;
        padding-right: 25px;
      }
    `;


  /* Content IV */
    const HomeIV = styled.div`
      min-height: 550px;
      padding-bottom: 50px;

      h2 {
        margin: 50px 0px;
        font-size: 25px !important;
        text-align: center;
        color: #015e98;
      }
    `;

    const ImageItemI = styled(ImageItem)`
      background-image: url(${ImageIContentIV});
    `;

    const ImageItemII = styled(ImageItem)`
      background-image: url(${ImageIIContentIV});
    `;

    const ImageItemIII = styled(ImageItem)`
      background-image: url(${ImageIIIContentIV});
    `;

    /* Content V */

    const ImageItemIV = styled(ImageItem)`
      background-image: url(${ImageIContentV});
    `;

    const ImageItemV = styled(ImageItem)`
      background-image: url(${ImageIIContentV});
    `;

    const ImageItemVI = styled(ImageItem)`
      background-image: url(${ImageIIIContentV});
    `;



  /* Extra */
    const OrangeSpan = styled.span`
      color: #fcc400;
    `;

    const Separator = styled.div`
      height: 10px;
    `;

    const SpanBtn = styled.div`
      font-weight: 500;
      font-size: 16px !important;
      margin-bottom: 3px;
    `;


class Home extends Component {

  render() {
    
    return (
      <HomeNode>
        <HomeI>
          <Nav />
          <Separator ></Separator>
          <HomeNavBar>
            <h1 > <OrangeSpan >{'<'}</OrangeSpan> Homegrown Startup Community <OrangeSpan >{'/>'}</OrangeSpan></h1>
            <Row>
              <HomeNavBarI span={12} >
                <p>
                We began in 2011 by providing a collaborative workspace environment for entrepreneurs, and then quickly moved forward raising investment capital to fund new startup projects.
                </p>
                <Separator ></Separator>
                <p>
                With a variety of research and development projects in motion today, we're involved in startup venture building through community supported seed equity investments, together with rural ecovillage development and long-term land management.
                </p>
                <Link to="/about" >
                  <HomeBtn type="primary">
                    <SpanBtn >LEARN MORE</SpanBtn>
                  </HomeBtn>
                </Link>
              </HomeNavBarI>
              <ParagraphI span={12} >
              </ParagraphI>
            </Row>
          </HomeNavBar>
        </HomeI>


        <HomeII>
          <ContainerII>
            <RowList gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <RowListItem className="gutter-row" span={6}>
                  <HomeIIListI >
                    <HomeIIContent >
                      <h2>Startup Community</h2>
                      <p>SmallWorld Ventures is committed to becoming the number one catalyst for funding and assisting startups in Cambodia.</p>
                    </HomeIIContent>
                  </HomeIIListI>
                </RowListItem>
                <RowListItem className="gutter-row" span={6}>
                  <HomeIIListII >
                    <HomeIIContent >
                      <h2>Seed Equity Investments</h2>
                      <p>Seed Equity Investments are provided to promising startup teams with projects ranging between 5,000 to 25,000 USD.</p>
                    </HomeIIContent>
                  </HomeIIListII>
                </RowListItem>
                <RowListItem className="gutter-row" span={6}>
                  <HomeIIListIII >
                    <HomeIIContent >
                      <h2>Venture Building</h2>
                      <p>Smallworld Ventures has built an internal team of technicians engaged in research and development projects with an aim to spin off new ventures.</p>
                    </HomeIIContent>
                  </HomeIIListIII>
                </RowListItem>
                <RowListItem className="gutter-row" span={6}>
                  <HomeIIListIV >
                    <HomeIIContent >
                      <h2>Ecovillage Development</h2>
                      <p>At our rural ecovillage project, we're building a hands-on learning, working, and living environment with a balance among the natural world, education, economics, and sustainable living practices.</p>
                    </HomeIIContent>
                  </HomeIIListIV>
                </RowListItem>
              </RowList>
          </ContainerII>
        </HomeII>

        <HomeIII>
          <HomeBannerIII>
            <Row gutter={24} >
              <ParagraphII span={13} >
                <HomeBannerIIIContent>
                  <h1>Have some ideas for new venture?</h1>
                  <p>We're looking for new approaches to problem solving and creating business.Do you have an innovative idea for a startup venture?</p>
                  <p>Or maybe you have a skillset in mind that you want to develop as you work within our existing SmallWorld venture.</p>
                  <p>We're open to discussing your own startup ideas, however unconventional, regardless of age, gender, or nationality.</p>
                  <p>Send us a message!</p>
                  <Link to="/contact" >
                    <HomeBtn type="primary">
                      <SpanBtn >CONTACT US</SpanBtn>
                    </HomeBtn>
                  </Link>
                </HomeBannerIIIContent>
              </ParagraphII>
              <ParagraphII span={11} >
              </ParagraphII>
            </Row>
          </HomeBannerIII>
        </HomeIII>

        <HomeIV>
          <h2>COMMUNITY UPDATE</h2>
          <ContainerII >
            <RowList gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
              <RowListItem span={8} className="gutter-row" >
                <BlockListItem>
                  <a href="https://medium.com/smallworldvc/smallworld-realty-soft-opening-6efc25e9b3c4" target="_blank" rel="noopener noreferrer">
                    <ImageItemI ></ImageItemI>
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
                    <ImageItemII ></ImageItemII>
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
                    <ImageItemIII ></ImageItemIII>
                    <BlockListItemContent>
                      <h3>Press Release: SmallWorld Realty Launches Two New Locations</h3>
                      <p>Phnom Penh — The SmallWorld team is excited to announce the official opening of SmallWorld Realty, the two...</p>
                      <ImageBtn><p>SmallWorld Venture</p></ImageBtn>
                    </BlockListItemContent>
                  </a>
                </BlockListItem>
              </RowListItem>
            </RowList>
          </ContainerII>
        </HomeIV>

        <HomeIV>
          <h2>KOOMPI NEWS</h2>
          <ContainerII >
            <RowList gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
              <RowListItem span={8} className="gutter-row" >
                <BlockListItem>
                  <a href="https://medium.com/koompi/winners-of-think-think-world-cup-d5113bb24add" target="_blank" rel="noopener noreferrer">
                    <ImageItemIV ></ImageItemIV>
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
                    <ImageItemV ></ImageItemV>
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
                    <ImageItemVI ></ImageItemVI>
                    <BlockListItemContent>
                      <h3>KOOMPI to Support Young Volunteers in Project Competition</h3>
                      <p>4 students from Bayon Secondary School will be participating in {"<"}a href="https://...</p>
                      <ImageBtn><p>Mollika Chum</p></ImageBtn>
                    </BlockListItemContent>
                  </a>
                </BlockListItem>
              </RowListItem>
            </RowList>
          </ContainerII>
        </HomeIV>
      </HomeNode>
    );
  }
}

export default Home;