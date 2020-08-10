import React, { Component } from 'react';
import Nav from '../Nav';
import styled from 'styled-components';


/* Images */

  /* Images ContentI */
  import ImageIContentI from '../images/home/community-item-1.jpeg';
  import ImageIIContentI from '../images/home/community-item-2.jpeg';
  import ImageIIIContentI from '../images/home/community-item-3.jpeg';

  /* Images ContentII */
  import ImageIContentII from '../images/home/koompi-image-1.png';
  import ImageIIContentII from '../images/home/koompi-image-2.png';
  import ImageIIIContentII from '../images/home/koompi-image-3.png';


/* Styled Components */
import {NewsNode, NewsNavBar, ContainerII, RowList, RowListItem, BlockListItem, BlockListItemContent, ImageItem, ImageBtn, LoadMoreBtn } from '../styled-components/Style';


  /* Content I */
  const ContentI = styled.div`

    min-height: 550px;
    padding-top: 90px;

    h2 {
      margin: 50px 0px;
      font-size: 25px !important;
      text-align: center;
      color: ${props => props.theme.mode === 'dark'? '#b7e3fa' : '#015e98'};
    }
  `;

  const ImageItemIContentI = styled(ImageItem)`
    background-image: url(${ImageIContentI});
  `;

  const ImageItemIIContentI = styled(ImageItem)`
    background-image: url(${ImageIIContentI});
  `;

  const ImageItemIIIContentI = styled(ImageItem)`
    background-image: url(${ImageIIIContentI});
  `;


  /* Content II */
  const ContentII = styled.div`
    min-height: 1050px;

    h2 {
      margin: 50px 0px;
      font-size: 25px !important;
      text-align: center;
      color: ${props => props.theme.mode === 'dark'? '#b7e3fa' : '#015e98'};
    }
  `;

  const ImageItemIContentII = styled(ImageItem)`
    background-image: url(${ImageIContentII});
  `;

  const ImageItemIIContentII = styled(ImageItem)`
    background-image: url(${ImageIIContentII});
  `;

  const ImageItemIIIContentII = styled(ImageItem)`
    background-image: url(${ImageIIIContentII});
  `;


  /* Extra */
  const NewSeparator = styled.div`
    height: 100px;
    width: 100%;
    background-color: ${props => props.theme.mode === 'dark'? '#112a45' : '#ffffff'};
  `;
  


class News extends Component {
  render() {
    return (
      <NewsNode >
        <NewsNavBar >
          <Nav />
        </NewsNavBar>
        

        <ContentI>
          <h2>COMMUNITY UPDATE</h2>
          <ContainerII >
            <RowList gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <RowListItem span={8} className="gutter-row" >
                <BlockListItem>
                  <a href="https://medium.com/smallworldvc/smallworld-realty-soft-opening-6efc25e9b3c4" target="_blank" rel="noopener noreferrer">
                    <ImageItemIContentI></ImageItemIContentI>
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
                    <ImageItemIIContentI>
                    </ImageItemIIContentI>
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
                    <ImageItemIIIContentI>
                    </ImageItemIIIContentI>
                    <BlockListItemContent>
                      <h3>Press Release: SmallWorld Realty Launches Two New Locations</h3>
                      <p>Phnom Penh — The SmallWorld team is excited to announce the official opening of SmallWorld Realty, the two...</p>
                      <ImageBtn><p>SmallWorld Venture</p></ImageBtn>
                    </BlockListItemContent>
                  </a>
                </BlockListItem>
              </RowListItem>
            </RowList>
            <RowList gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <RowListItem span={8} className="gutter-row" >
                <BlockListItem>
                  <a href="https://medium.com/smallworldvc/smallworld-for-good-causes-2920ba067b3e" target="_blank" rel="noopener noreferrer">
                    <ImageItemIIContentI>
                    </ImageItemIIContentI>
                    <BlockListItemContent>
                      <h3>SmallWorld For Good Causes</h3>
                      <p>SmallWorld, KOOMPI and it’s affiliated start-ups are committed to spending our marketing dollars #ForGoodC...</p>
                      <ImageBtn><p>SmallWorld Venture</p></ImageBtn>
                    </BlockListItemContent>
                  </a>
                </BlockListItem>
              </RowListItem>
              <RowListItem span={8}className="gutter-row" >
              </RowListItem>
              <RowListItem span={8}className="gutter-row" >
              </RowListItem>
            </RowList>
            <a href="https://medium.com/@smallworldvc" target="_blank" rel="noopener noreferrer" >
              <LoadMoreBtn >
                <p>Load More</p>
              </LoadMoreBtn>
            </a>
          </ContainerII>
        </ContentI>


        <ContentII>
          <h2>KOOMPI NEWS</h2>
          <ContainerII >
            <RowList gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
              <RowListItem span={8} className="gutter-row" >
                <BlockListItem>
                  <a href="https://medium.com/koompi/winners-of-think-think-world-cup-d5113bb24add" target="_blank" rel="noopener noreferrer">
                    <ImageItemIContentII></ImageItemIContentII>
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
                    <ImageItemIIContentII></ImageItemIIContentII>
                    <BlockListItemContent>
                      <h3>Installing Android Studio on KOOMPI OS</h3>
                      <p>Cross-platform mobile apps development. In the previous section is about installing flutter on KO...</p>
                      <ImageBtn><p>Mr Solo {"(Logan Freed)"}</p></ImageBtn>
                    </BlockListItemContent>
                  </a>
                </BlockListItem>
              </RowListItem>
              <RowListItem span={8} className="gutter-row" >
                <BlockListItem>
                  <a href="https://medium.com/koompi/koompi-to-support-young-volunteers-in-project-competition-78efb1003264" target="_blank" rel="noopener noreferrer">
                    <ImageItemIIIContentII></ImageItemIIIContentII>
                    <BlockListItemContent>
                      <h3>KOOMPI to Support Young Volunteers in Project Competition</h3>
                      <p>4 students from Bayon Secondary School will be participating in {"<"}a href="https://...</p>
                      <ImageBtn><p>Mollika Chum</p></ImageBtn>
                    </BlockListItemContent>
                  </a>
                </BlockListItem>
              </RowListItem>
            </RowList>
            <RowList gutter={{ xs: 8, sm: 16, md: 24, lg: 32}} >
              <RowListItem span={8} className="gutter-row" >
                <BlockListItem>
                  <a href="https://medium.com/koompi/winners-of-think-think-world-cup-d5113bb24add" target="_blank" rel="noopener noreferrer">
                    <ImageItemIContentII></ImageItemIContentII>
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
                    <ImageItemIIContentII></ImageItemIIContentII>
                    <BlockListItemContent>
                      <h3>Installing Android Studio on KOOMPI OS</h3>
                      <p>Cross-platform mobile apps development. In the previous section is about installing flutter on KO...</p>
                      <ImageBtn><p>Mr Solo {"(Logan Freed)"}</p></ImageBtn>
                    </BlockListItemContent>
                  </a>
                </BlockListItem>
              </RowListItem>
              <RowListItem span={8} className="gutter-row" >
                <BlockListItem>
                  <a href="https://medium.com/koompi/koompi-to-support-young-volunteers-in-project-competition-78efb1003264" target="_blank" rel="noopener noreferrer">
                    <ImageItemIIIContentII>
                    </ImageItemIIIContentII>
                    <BlockListItemContent>
                      <h3>KOOMPI to Support Young Volunteers in Project Competition</h3>
                      <p>4 students from Bayon Secondary School will be participating in {"<"}a href="https://...</p>
                      <ImageBtn><p>Mollika Chum</p></ImageBtn>
                    </BlockListItemContent>
                  </a>
                </BlockListItem>
              </RowListItem>
            </RowList>
            <a href="https://medium.com/@koompi" target="_blank" rel="noopener noreferrer" >
              <LoadMoreBtn >
                <p>Load More</p>
              </LoadMoreBtn>
            </a>
          </ContainerII>
        </ContentII>

        <NewSeparator></NewSeparator>

      </NewsNode>
    );
  }
}

export default News;