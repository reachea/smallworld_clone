import React, { Component } from 'react';
import './Nav.css';
import { Layout, Menu, Button} from 'antd';
import { NavLink } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'

const { Header } = Layout;

interface NavState {
  navMenuOpen: boolean;
}

class Nav<T> extends Component<T, NavState> {

  protected hideNav: boolean;

  constructor(props: T) {
    super(props);
    this.state = { navMenuOpen: false };
    this.hideNav = false;

    this.menuClick = this.menuClick.bind(this)
  }

  menuClick = () => {
    this.setState((state) => ({ navMenuOpen: !this.state.navMenuOpen }));
    this.hideNav = !this.hideNav;
  }

  render() {
    return (
      <Header>
        <div className="container" >
          <NavLink to="/" >
            <div className="logo" />
          </NavLink>

          <Button onClick={this.menuClick} type="text" className="nav-btn nav-menu" icon={this.state.navMenuOpen? <CloseOutlined /> : <MenuOutlined/>} >
          </Button>

          <button onClick={this.menuClick} >
            <div className="mobile-background" style={{ left: `${this.hideNav? "0px" : "-100vw"}` }} ></div>
          </button>

          <Menu className="nav-list" style={{ left: `${this.hideNav? "0px" : "-100vw"}` }} >
            <Menu.Item key="1"  ><NavLink to="/about" className="nav-item" >About</NavLink></Menu.Item>
            <Menu.Item key="2"  ><NavLink to="/works" className="nav-item" >Works</NavLink></Menu.Item>
            <Menu.Item key="3"  ><NavLink to="/news" className="nav-item" >News</NavLink></Menu.Item>
            <Menu.Item key="4"  ><NavLink to="/spaces" className="nav-item" >Spaces</NavLink></Menu.Item>
            <Menu.Item key="5"  ><NavLink to="/contact" className="nav-item" >Contact</NavLink></Menu.Item>
          </Menu>
        </div>
    </Header>
    );
  }
}

export default Nav;