import React, { Component } from 'react';
import './New.css';
import Nav from '../Nav';
import styled from 'styled-components';


/* Styled Components */
import { RowList, RowListItem, BlockListItem, BlockListItemContent, ImageItem, ImageBtn, LoadMoreBtn } from '../styled-components/Style';

  /* Content I */
  const ContentI = styled.div`

    min-height: 550px;
    padding-top: 90px;

    h2 {
      margin: 50px 0px;
      font-size: 25px !important;
      text-align: center;
    }
  `;

  /* Content II */
  const ContentII = styled.div`
    min-height: 1050px;

    h2 {
      margin: 50px 0px;
      font-size: 25px !important;
      text-align: center;
    }
  `;


class News extends Component {
  render() {
    return (
      <div className="new" >
        <div className="news-navbar" >
          <Nav />
        </div>
        

        <ContentI>
          <h2>COMMUNITY UPDATE</h2>
          <div className="container container-2 home-community" >
            <RowList gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
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
                    <ImageItem className="community-image-2">
                    </ImageItem>
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
                    <ImageItem className="community-image-3">
                    </ImageItem>
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
                    <ImageItem className=" community-image-2">
                    </ImageItem>
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
          </div>
        </ContentI>


        <ContentII>
          <h2>KOOMPI NEWS</h2>
          <div className="container container-2 home-community" >
            <RowList gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
              <RowListItem span={8} className="gutter-row" >
                <BlockListItem>
                  <a href="https://medium.com/koompi/winners-of-think-think-world-cup-d5113bb24add" target="_blank" rel="noopener noreferrer">
                    <ImageItem className="koompi-image-1"></ImageItem>
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
                <BlockListItem>
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
            <RowList gutter={{ xs: 8, sm: 16, md: 24, lg: 32}} >
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
                <BlockListItem>
                  <a href="https://medium.com/koompi/koompi-to-support-young-volunteers-in-project-competition-78efb1003264" target="_blank" rel="noopener noreferrer">
                    <ImageItem className=" koompi-image-3">
                    </ImageItem>
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
          </div>
        </ContentII>

        <div className="work-separator"></div>

      </div>
    );
  }
}

export default News;