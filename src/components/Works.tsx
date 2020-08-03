import React, { Component } from 'react';
import Nav from '../Nav';
import styled from 'styled-components';


/* Images */
  import ImageI from '../images/blurb-5.png';
  import ImageII from '../images/Work/investment.png';
  import ImageIII from '../images/Work/venture-building.png';
  import ImageIV from '../images/Work/reforest.png';



/* Styled Component */
import {WorkNode, WorkNavBar, ContainerII, RowList, RowListItem} from '../styled-components/Style';


/* Content */
const WorkFirst = styled.div`
  padding-top: 140px;
  min-height: 500px;
`;

const WorkI = styled.div`
  padding-top: 50px;
  min-height: 500px;
`;

const WorkImage = styled.div`
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% auto;
  height: 500px;
`;

const WorkImageI = styled(WorkImage)`
  background-image: url(${ImageI});
`;

const WorkImageIIisMobile = styled(WorkImage)`
  background-image: url(${ImageII});

  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const WorkImageIIisNotMobile = styled(WorkImage)`
  background-image: url(${ImageII});

  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;

const WorkImageIII = styled(WorkImage)`
  background-image: url(${ImageIII});
`;

const WorkImageIVisMobile = styled(WorkImage)`
  background-image: url(${ImageIV});

  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const WorkImageIVisNotMobile = styled(WorkImage)`
  background-image: url(${ImageIV});

  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;





  /* WorkContentPadding */
  const WorkContentRight = styled.div`
  
    padding-right: 60px;

    @media (max-width: 768px) {
      padding: initial;
    }
  `;

  const WorkContentLeft = styled.div`
  
    padding-left: 60px;

    @media (max-width: 768px) {
      padding: initial;
    }
  `;


  /* Work Separator */
  const WorkSeparator = styled.div`
    height: 100px;
    width: 100%;
    background-color: #ffffff;
  `;



class Works extends Component {
  render() {
    return (
      <WorkNode >
        <WorkNavBar >
          <Nav />
        </WorkNavBar>

        <WorkFirst>
          <ContainerII>
            <RowList >
              <RowListItem span={14} >
                <WorkContentRight >
                  <h2>STARTUP COMMUNITY</h2>
                  <p>Since 2011, SmallWorld has remained focused on their vision of building a vibrant startup community in Phnom Penh through partnering with other area workspace groups to offer greater value and accessibility to early stage startup teams and entrepreneurs.</p>
                </WorkContentRight>
              </RowListItem>
              <RowListItem span={10} >
                <WorkImageI ></WorkImageI>
              </RowListItem>
            </RowList>
          </ContainerII>
        </WorkFirst>

        <WorkI>
          <ContainerII>
            <RowList>
              <RowListItem span={10}>
                <WorkImageIIisNotMobile ></WorkImageIIisNotMobile>
              </RowListItem>
              <RowListItem span={14} >
                <WorkContentLeft >
                  <h2>SEED EQUITY INVESTMENTS</h2>
                  <p>Seed Equity Investments are used to form equity investment partnerships which serve as the foundation for building a strong startup community.</p>
                  <p>During our formative years we&aposve gained insightful experience by working with dozens of innovative startups and we now provide Seed Equity Investments for five new startup teams each year.</p>
                  <p>With a funding range between 5,000 to 25,000 USD per team, our Seed Equity Investments are not loans, but equity based investments.</p>
                  <p>Local co-investor equity participation is encouraged and generated through seminars and presentations within the greater Phnom Penh business community.</p>
                </WorkContentLeft>
              </RowListItem>
            </RowList>
            <WorkImageIIisMobile ></WorkImageIIisMobile>
          </ContainerII>
        </WorkI>

        <WorkI>
          <ContainerII>
            <RowList>
              <RowListItem span={14} >
                <WorkContentRight >
                  <h2>VENTURE BUILDING</h2>
                  <p>Our branded KOOMPI system is one among several exciting ventures in our portfolio.</p>
                  <p>We&aposve produced a practical, affordable, and effective entry-level notebook designed for future engineers, inventors, organizers, developers, and freethinkers.</p>
                  <p>The KOOMPI notebook computer is a slim, elegant, high-end, portable, personal productivity environment designed to perform well at work, school, or with managing any small business.</p>
                  <p>Powering the KOOMPI notebook is KOSMOS, which is our own version of the popular open-source Linux operating system, with KramaOS specifically tailored for the Cambodian marketplace.</p>
                  <h2>RESEARCH AND DEVELOPMENT</h2>
                  <p>The cornerstone of SmallWorld Ventures is to promote Venture Building with a key focus on Research and Development (R&D).</p>
                  <p>We&aposre engaged in both hardware and software R&D projects related to decentralized peer-to-peer applications, tokenization, robotics, artificial intelligence, and automation.</p>
                  <p>Beyond hardware and software, we&aposre building an all natural outdoor learning, living, work, and play environment using industrial hemp and bamboo design as the fundamental basis for production.</p>
                </WorkContentRight>
              </RowListItem>
              <RowListItem span={10} >
                <WorkImageIII ></WorkImageIII>
              </RowListItem>
            </RowList>
          </ContainerII>
        </WorkI>

        <WorkI>
          <ContainerII>
            <RowList>
              <RowListItem span={10} >
                <WorkImageIVisNotMobile ></WorkImageIVisNotMobile>
              </RowListItem>
              <RowListItem span={14} >
                <WorkContentLeft >
                  <h2>ENVIRONMENTAL STEWARDSHIP</h2>
                  <p>Environmental stewardship means the responsible use and protection of our natural resources through conservation and sustainable practice.</p>
                  <p>We strive to be aware and knowledgeable of the natural world around us and to do as little as possible to negatively impact that world</p>
                  <p>VitaminAir is our planned ecovillage project located on 100+ hectares of rural land 100 kilometers east of Phnom Penh beneath Phnom Pich Nil near the base of the Dâmrei Mountains.</p>
                  <p>At our VitaminAir project and the surrounding protected areas, we are directly engaged in small scale agriculture and reforestation, along with nature and wildlife preservation programs.</p>
                  <p>In addition, we are creating a hands-on learning, working and living environment with an appropriate balance among economic opportunity, environmental protection, and sustainable living practices.</p>
                </WorkContentLeft>
              </RowListItem>
            </RowList>
            <WorkImageIVisMobile ></WorkImageIVisMobile>
          </ContainerII>
        </WorkI>
        
        <WorkSeparator ></WorkSeparator>
      </WorkNode>
    );
  }
}

export default Works;