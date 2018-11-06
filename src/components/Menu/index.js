import React, { Component } from 'react'
import Link from 'gatsby-link'
import { css, cx } from 'emotion'

import { Navbar, NavItem, Nav } from 'react-bootstrap'


import { styles } from './styles'
import MenuDropdownLink from '../MenuDropdownLink'

class Menu extends Component {
  constructor() {
    super()

    this.state = {
      activeMenu: null,
      activeSubMenu: null,
    }

    this.setActiveSubMenu = this.setActiveSubMenu.bind(this)
  }

  componentDidMount() {
    this.setState({
      activeMenu: 'projects',
      activeSubMenu: 'selected',
    })
  }

  setActiveSubMenu(subMenu) {
    console.log('subMenu', subMenu);
    this.setState({
      activeSubMenu: subMenu,
    })
  }

  render() {
    console.log('window.location.pathname', window.location.pathname);
    return (
      <Navbar className={css(styles.menuContainer)}>
        <Navbar.Header className={css(styles.brand)}>
          <Navbar.Brand>
            <a href="#home">HAHA Studio</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          {/* ############# PROJECT SECTION ############# */}
          <ul className={css(styles.subMenuCol)}>
            <li
              onClick={() => this.setState({ activeMenu: 'projects' })}
              className={css(styles.subMenuItem)}
            >
              <span className={css(styles.subMenuLink)}>
                <b>projects</b>
              </span>
            </li>
            {this.state.activeMenu === 'projects' ? (
              <React.Fragment>
                <MenuDropdownLink
                  link="selected"
                  activeSubMenu={this.state.activeSubMenu}
                  setActiveSubMenu={() => this.setActiveSubMenu('selected')}
                />
                <MenuDropdownLink
                  link="archived"
                  activeSubMenu={this.state.activeSubMenu}
                  setActiveSubMenu={() => this.setActiveSubMenu('archived')}
                />
              </React.Fragment>
            ) : null}
          </ul>
          {/* ############# STUDIO SECTION ############# */}
          <ul className={css(styles.subMenuCol)}>
            <li
              onClick={() => this.setState({ activeMenu: 'studio' })}
              className={css(styles.subMenuItem)}
            >
              <span className={css(styles.subMenuLink)}>
                <b>studio</b>
              </span>
            </li>
            {this.state.activeMenu === 'studio' ? (
              <React.Fragment>
                <MenuDropdownLink
                  link="about"
                  activeSubMenu={this.state.activeSubMenu}
                  setActiveSubMenu={() => this.setActiveSubMenu('about')}
                />
                <MenuDropdownLink
                  link="exploration"
                  activeSubMenu={this.state.activeSubMenu}
                  setActiveSubMenu={() => this.setActiveSubMenu('exploration')}
                />
                <MenuDropdownLink
                  link="texts"
                  activeSubMenu={this.state.activeSubMenu}
                  setActiveSubMenu={() => this.setActiveSubMenu('texts')}
                />
              </React.Fragment>
            ) : null}
          </ul>
          {/* ############# CONTACT SECTION ############# */}
          <ul className={css(styles.subMenuCol)}>
            <li
              onClick={() => this.setState({ activeMenu: 'contact' })}
              className={css(styles.subMenuItem)}
            >
              <span className={css(styles.subMenuLink)}>
                <b>contact</b>
              </span>
            </li>
            {this.state.activeMenu === 'contact' ? (
              <React.Fragment>
                <MenuDropdownLink
                  link="find us"
                  activeSubMenu={this.state.activeSubMenu}
                  setActiveSubMenu={() => this.setActiveSubMenu('find us')}
                />
                <MenuDropdownLink
                  link="press"
                  activeSubMenu={this.state.activeSubMenu}
                  setActiveSubMenu={() => this.setActiveSubMenu('press')}
                />
                <MenuDropdownLink
                  link="retailers"
                  activeSubMenu={this.state.activeSubMenu}
                  setActiveSubMenu={() => this.setActiveSubMenu('retailers')}
                />
              </React.Fragment>
            ) : null}
          </ul>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            <b>shop</b>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default Menu
