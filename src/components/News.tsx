import React, { Component } from 'react';
import './New.css';
import Nav from '../Nav';
import { Row, Col } from 'antd';

class News extends Component {
  render() {
    return (
      <div className="new" >
        <div className="news-navbar" >
          <Nav />
        </div>
        

        <div className="news-content-1">
          <h2>COMMUNITY UPDATE</h2>
          <div className="container container-2 home-community" >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="row-list">
              <Col span={8} className="gutter-row row-item-mobile-1" >
                <div className="community-item">
                  <a href="https://medium.com/smallworldvc/smallworld-realty-soft-opening-6efc25e9b3c4" target="_blank" rel="noopener noreferrer">
                    <div className="list-image community-image-1">
                    </div>
                    <div className="community-content">
                      <h3>SmallWorld Realty Soft Openning</h3>
                      <p>On 18th November 2019, SmallWorld celebrated the official opening of our latest shared-workspace with a so...</p>
                      <div className="item-btn"><p>SmallWorld Venture</p></div>
                    </div>
                  </a>
                </div>
              </Col>
              <Col span={8} className="gutter-row row-item-mobile-1" >
                <div className="community-item">
                  <a href="https://medium.com/smallworldvc/smallworld-for-good-causes-2920ba067b3e" target="_blank" rel="noopener noreferrer">
                    <div className="list-image community-image-2">
                    </div>
                    <div className="community-content">
                      <h3>SmallWorld For Good Causes</h3>
                      <p>SmallWorld, KOOMPI and it’s affiliated start-ups are committed to spending our marketing dollars #ForGoodC...</p>
                      <div className="item-btn"><p>SmallWorld Venture</p></div>
                    </div>
                  </a>
                </div>
              </Col>
              <Col span={8} className="gutter-row row-item-mobile-1" >
                <div className="community-item" >
                  <a href="https://medium.com/smallworldvc/press-release-smallworld-realty-launches-two-new-locations-65ea1a8697e7" target="_blank" rel="noopener noreferrer">
                    <div className="list-image community-image-3">
                    </div>
                    <div className="community-content">
                      <h3>Press Release: SmallWorld Realty Launches Two New Locations</h3>
                      <p>Phnom Penh — The SmallWorld team is excited to announce the official opening of SmallWorld Realty, the two...</p>
                      <div className="item-btn"><p>SmallWorld Venture</p></div>
                    </div>
                  </a>
                </div>
              </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="row-list">
              <Col span={8} className="gutter-row row-item-mobile-1" >
                <div className="community-item">
                  <a href="https://medium.com/smallworldvc/smallworld-for-good-causes-2920ba067b3e" target="_blank" rel="noopener noreferrer">
                    <div className="list-image community-image-2">
                    </div>
                    <div className="community-content">
                      <h3>SmallWorld For Good Causes</h3>
                      <p>SmallWorld, KOOMPI and it’s affiliated start-ups are committed to spending our marketing dollars #ForGoodC...</p>
                      <div className="item-btn"><p>SmallWorld Venture</p></div>
                    </div>
                  </a>
                </div>
              </Col>
              <Col span={8}className="gutter-row row-item-mobile-1" >
              </Col>
              <Col span={8}className="gutter-row row-item-mobile-1" >
              </Col>
            </Row>
            <a href="https://medium.com/@smallworldvc" target="_blank" rel="noopener noreferrer" >
              <div className="news-item-btn" >
                <p>Load More</p>
              </div>
            </a>
          </div>
        </div>


        <div className="news-content-2">
          <h2>KOOMPI NEWS</h2>
          <div className="container container-2 home-community" >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="row-list" >
              <Col span={8} className="gutter-row row-item-mobile-1" >
                <div className="community-item">
                  <a href="https://medium.com/koompi/winners-of-think-think-world-cup-d5113bb24add" target="_blank" rel="noopener noreferrer">
                    <div className="list-image koompi-image-1">
                    </div>
                    <div className="community-content">
                      <h3>Winners of Think! Think! World Cup!</h3>
                      <p>13th July 2020 The result of Think! Think! World Cup! is finally out! {"<"}img alt="" src"...</p>
                      <div className="item-btn"><p>Mollika Chum</p></div>
                    </div>
                  </a>
                </div>
              </Col>
              <Col span={8} className="gutter-row row-item-mobile-1" >
                <div className="community-item">
                  <a href="https://medium.com/koompi/installing-android-studio-on-koompi-os-86aa5b6b199c" target="_blank" rel="noopener noreferrer">
                    <div className="list-image koompi-image-2">
                    </div>
                    <div className="community-content">
                      <h3>Installing Android Studio on KOOMPI OS</h3>
                      <p>Cross-platform mobile apps development. In the previous section is about installing flutter on KO...</p>
                        <div className="item-btn"><p>Mr Solo {"(Logan Freed)"}</p></div>
                    </div>
                  </a>
                </div>
              </Col>
              <Col span={8} className="gutter-row row-item-mobile-1" >
                <div className="community-image community-item" >
                  <a href="https://medium.com/koompi/koompi-to-support-young-volunteers-in-project-competition-78efb1003264" target="_blank" rel="noopener noreferrer">
                    <div className="list-image koompi-image-3">
                    </div>
                    <div className="community-content">
                      <h3>KOOMPI to Support Young Volunteers in Project Competition</h3>
                      <p>4 students from Bayon Secondary School will be participating in {"<"}a href="https://...</p>
                      <div className="item-btn"><p>Mollika Chum</p></div>
                    </div>
                  </a>
                </div>
              </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32}} className="row-list" >
              <Col span={8} className="gutter-row newline-content row-item-mobile-1" >
                <div className="community-item">
                  <a href="https://medium.com/koompi/winners-of-think-think-world-cup-d5113bb24add" target="_blank" rel="noopener noreferrer">
                    <div className="list-image koompi-image-1">
                    </div>
                    <div className="community-content">
                      <h3>Winners of Think! Think! World Cup!</h3>
                      <p>13th July 2020 The result of Think! Think! World Cup! is finally out! {"<"}img alt="" src"...</p>
                      <div className="item-btn"><p>Mollika Chum</p></div>
                    </div>
                  </a>
                </div>
              </Col>
              <Col span={8} className="gutter-row row-item-mobile-1" >
                <div className="community-item">
                  <a href="https://medium.com/koompi/installing-android-studio-on-koompi-os-86aa5b6b199c" target="_blank" rel="noopener noreferrer">
                    <div className="list-image koompi-image-2">
                    </div>
                    <div className="community-content">
                      <h3>Installing Android Studio on KOOMPI OS</h3>
                      <p>Cross-platform mobile apps development. In the previous section is about installing flutter on KO...</p>
                        <div className="item-btn"><p>Mr Solo {"(Logan Freed)"}</p></div>
                    </div>
                  </a>
                </div>
              </Col>
              <Col span={8} className="gutter-row row-item-mobile-1" >
                <div className="community-image community-item" >
                  <a href="https://medium.com/koompi/koompi-to-support-young-volunteers-in-project-competition-78efb1003264" target="_blank" rel="noopener noreferrer">
                    <div className="list-image koompi-image-3">
                    </div>
                    <div className="community-content">
                      <h3>KOOMPI to Support Young Volunteers in Project Competition</h3>
                      <p>4 students from Bayon Secondary School will be participating in {"<"}a href="https://...</p>
                      <div className="item-btn"><p>Mollika Chum</p></div>
                    </div>
                  </a>
                </div>
              </Col>
            </Row>
            <a href="https://medium.com/@koompi" target="_blank" rel="noopener noreferrer" >
              <div className="news-item-btn" >
                <p>Load More</p>
              </div>
            </a>
          </div>
        </div>

        <div className="work-separator"></div>

      </div>
    );
  }
}

export default News;