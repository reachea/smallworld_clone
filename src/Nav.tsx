import React, { Component } from 'react';
import { Layout, Menu, Button} from 'antd';
import { NavLink } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import styled from 'styled-components';

/* Image */
import Logo from './images/logo/sw-green.png';


/* Styled Components */
import { Container } from './styled-components/Style'


const { Header } = Layout;

  /* Custom Styled Components */
    const NavHeader = styled(Header)`
      background: none;
    `;

    const NavLogo = styled.div`
      float: left;
      content: url(${Logo});
      height: 75px;
      width: 134px;
      cursor: pointer;
    `;

    const NavHamburgerBtn = styled(Button)`
      color: white;
      padding-top: 20px;
      display: none;

      span {
        color: white;
        font-size: 30px;
      }

      @media (max-width: 768px) {
        display: block;
        float: right;
      }
    `;

    const NavMobileBackground = styled.div`

      @media (max-width: 768px) {
        background-color: rgba(1,94,152,.56);
        position: fixed;
        top: 0px;
        left: -100vh;
        width: 100%;
        height: 100vh;
        cursor: pointer;
        z-index: 2;
      }
    `;

    const NavMenu = styled(Menu)`

      padding-top: 5px;
      float: right;
      background-color: transparent;
      border: none;
      font-size: 20px;

      :not(.ant-menu-horizontal) .ant-menu-item-selected {
        background-color: transparent;
      }

      .ant-menu-item-active {
        background-color: transparent;
        a {
          color: orange;

          :hover {
            color: orange;
          }
        }
      }

      .ant-menu-item-selected {
        a {
          color: orange;

          :hover {
            color: orange;
          }
        }
      }

      @media (max-width: 768px) {
        float: initial;
        position: fixed;
        width: 60%;
        height: 100vh;
        top: 0px;
        transition: .5s !important;
        background-color: white;
        z-index: 10;
      }
    `;

    const NavMenuItem = styled(Menu.Item)`
      display: inline;
      background-color: transparent;

      a {
        color: white;

        :active {
          color: orange;
        }

        :hover {
          color: orange;
        }

        :focus {
          color: orange;
        }
      }

      .active {
        color: orange;
      }

      @media (max-width: 768px) {
        display: block;

        a {
          color: #015e98;
        }
      }
    `;

    const NavLinkItem = styled(NavLink)`
      border-bottom: none;
      color: white;

      @media (max-width: 768px) {
        border-bottom: none;
        color: #015e98;
      }
    `;





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
      <NavHeader>
        <Container >
          <NavLink to="/" >
            <NavLogo />
          </NavLink>

          <NavHamburgerBtn onClick={this.menuClick} type="text" icon={this.state.navMenuOpen? <CloseOutlined /> : <MenuOutlined/>} >
          </NavHamburgerBtn>

          <NavMobileBackground onClick={this.menuClick} style={{ left: `${this.hideNav? "0px" : "-100vw"}` }} ></NavMobileBackground>

          <NavMenu style={{ left: `${this.hideNav? "0px" : "-100vw"}` }} >
            <NavMenuItem key="1"  ><NavLinkItem to="/about" >About</NavLinkItem></NavMenuItem>
            <NavMenuItem key="2"  ><NavLinkItem to="/works" >Works</NavLinkItem></NavMenuItem>
            <NavMenuItem key="3"  ><NavLinkItem to="/news" >News</NavLinkItem></NavMenuItem>
            <NavMenuItem key="4"  ><NavLinkItem to="/spaces" >Spaces</NavLinkItem></NavMenuItem>
            <NavMenuItem key="5"  ><NavLinkItem to="/contact" >Contact</NavLinkItem></NavMenuItem>
          </NavMenu>
        </Container>
    </NavHeader>
    );
  }
}

export default Nav;