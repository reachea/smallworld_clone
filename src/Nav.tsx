import React, { Component } from 'react';
import { Layout, Menu, Button} from 'antd';
import { NavLink } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import styled from 'styled-components';
import { withTranslation, WithTranslation } from 'react-i18next';

import i18n from './i18next';

/* Image */
import Logo from './images/logo/sw-green.png';

import CambodiaFlag from './images/flag/cambodia-flag.jpg';
import UnitedKingdomFlag from './images/flag/english-flag.jpg';


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
        left: 0px;
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

  /* Component for Translation */
      /* Khmer Flag */

      const KhmerFlag = styled.div`
        display: inline-block;
        width: 35px;
        height: 20px;
        cursor: pointer;
        background-image: url(${CambodiaFlag});
        background-size: 100% auto;
        background-repeat: no-repeat;

        :hover {
          box-shadow: 0 0 40px 5px hsla(0,0%,77.3%,.85);
          transform: translateY(2px);
          transition: .5s !important;
        }
      `;

      const EnglishFlag = styled.div`
        display: inline-block;
        width: 35px;
        height: 20px;
        cursor: pointer;
        background-image: url(${UnitedKingdomFlag});
        background-size: 100% auto;
        background-repeat: no-repeat;

        :hover {
          box-shadow: 0 0 40px 5px hsla(0,0%,77.3%,.85);
          transform: translateY(2px);
          transition: .5s !important;
        }
      `;


interface NavState {
  navMenuOpen: boolean;
}

class Nav extends Component<WithTranslation, NavState> {

  protected hideNav: boolean;

  constructor(props: any) {
    super(props);
    this.state = { navMenuOpen: false };
    this.hideNav = false;

    this.menuClick = this.menuClick.bind(this);
    this.handleLanguage = this.handleLanguage.bind(this);
  }

  menuClick = () => {
    this.setState((state) => ({ navMenuOpen: !this.state.navMenuOpen }));
    this.hideNav = !this.hideNav;
  }

  handleLanguage = (lang: any) => {
    i18n.changeLanguage(lang);
  }

  render() {

    const { t } = this.props;

    return (
      <NavHeader  style={{ fontFamily: t('Font.src') }}>
        <Container >
          <NavLink to="/" >
            <NavLogo />
          </NavLink>

          <NavHamburgerBtn onClick={this.menuClick} type="text" icon={this.state.navMenuOpen? <CloseOutlined /> : <MenuOutlined/>} >
          </NavHamburgerBtn>

          <NavMobileBackground onClick={this.menuClick} style={{ left: `${this.hideNav? "0px" : "-100vw"}` }} ></NavMobileBackground>

          <NavMenu style={{ left: `${this.hideNav? "0px" : "-100vw" }` }} >
            <NavMenuItem key="1"  ><NavLinkItem to="/about" >{t('NavBar.About')}</NavLinkItem></NavMenuItem>
            <NavMenuItem key="2"  ><NavLinkItem to="/works" >{t('NavBar.Works')}</NavLinkItem></NavMenuItem>
            <NavMenuItem key="3"  ><NavLinkItem to="/news" >{t('NavBar.News')}</NavLinkItem></NavMenuItem>
            <NavMenuItem key="4"  ><NavLinkItem to="/spaces" >{t('NavBar.Spaces')}</NavLinkItem></NavMenuItem>
            <NavMenuItem key="5"  ><NavLinkItem to="/contact" >{t('NavBar.Contact')}</NavLinkItem></NavMenuItem>
            <NavMenuItem >{t('Font.isKH')? <EnglishFlag onClick={() => this.handleLanguage('en')} ></EnglishFlag> : <KhmerFlag onClick={() => this.handleLanguage('kh')} ></KhmerFlag>  }</NavMenuItem>
          </NavMenu>

        </Container>
    </NavHeader>
    );
  }
}

export default withTranslation()(Nav);