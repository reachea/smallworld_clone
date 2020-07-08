import React from 'react';
import './App.css';
import { Layout, Menu } from 'antd';

import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import News from './components/News';
import Spaces from './components/Spaces';
import Works from './components/Works';

const { Header, Content, Footer } = Layout;

interface AppState {
  nav: any;
  keyNav: any;
  bg: any;
}

class App<T> extends React.Component<T, AppState> {
  
  private about: any = <About />;
  private home: any = <Home />;
  private contact: any = <Contact />;
  private news: any = <News />;
  private spaces: any = <Spaces />;
  private works: any = <Works />;

  constructor(props: T) {
    super(props);

    this.state = { nav: this.home, keyNav: "1", bg: "home" };

    // Binding
    this.navHome = this.navHome.bind(this);
    this.navAbout = this.navAbout.bind(this);
    this.navWork = this.navWork.bind(this);
    this.navNews = this.navNews.bind(this);
    this.navSpaces = this.navSpaces.bind(this);
    this.navContact = this.navContact.bind(this);
  }

  navHome() {
    this.setState( state => ({ nav: this.home, keyNav: "1", bg: "home" }));
  }

  navAbout() {
    this.setState( state => ({ nav: this.about, keyNav: "2", bg: "about" }));
  }

  navWork() {
    this.setState( state => ({ nav: this.works, keyNav: "3", bg: "work" }));
  }

  navNews() {
    this.setState( state => ({ nav: this.news, keyNav: "4", bg: "new" }));
  }

  navSpaces() {
    this.setState( state => ({ nav: this.spaces, keyNav: "5", bg: "space" }));
  }

  navContact() {
    this.setState( state => ({ nav: this.contact, keyNav: "6", bg: "contact" }));
  }

  render() {
    return(
      <div className="App" >
        <Content >
          <div className={`${this.state.bg}-navbar`} >
            <Header>
              <div className="container" >
                <div className="logo" onClick={this.navHome} />
                <Menu mode="horizontal" selectedKeys={[this.state.keyNav]} >
                  <Menu.Item key="2" onClick={this.navAbout} >About</Menu.Item>
                  <Menu.Item key="3" onClick={this.navWork} >Works</Menu.Item>
                  <Menu.Item key="4" onClick={this.navNews} >News</Menu.Item>
                  <Menu.Item key="5" onClick={this.navSpaces} >Spaces</Menu.Item>
                  <Menu.Item key="6" onClick={this.navContact} >Contact</Menu.Item>
                </Menu>
              </div>
            </Header>
          </div>
          <div className="all-content">
            {this.state.nav}
          </div>
        </Content>
        <Footer >

        </Footer>
    </div>
    );
  }
}

export default App;
