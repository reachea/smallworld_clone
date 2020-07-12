import React, { Component } from 'react';
import './Nav.css';
import { Layout, Menu} from 'antd';
import { NavLink } from 'react-router-dom';

const { Header } = Layout;

class Nav extends Component {
  render() {
    return (
      <Header>
        <div className="container" >
          <NavLink to="/" >
            <div className="logo" />
          </NavLink>
          <Menu mode="horizontal" >
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