import React, { Component } from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'
import { Navbar, NavItem, Nav } from 'react-bootstrap'
import { styles } from './styles'

class Menu extends Component {
  constructor() {
    super()

    this.state = {
      activeMenu: 'projects',
      activeSubMenu: 'selected',
    }
  }
  render() {
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
              className={css(styles.subMenuLink)}
            >
              <b>projects</b>
            </li>
            {this.state.activeMenu === 'projects' ? (
              <React.Fragment>
                <li className={css(styles.subMenuLink)}>
                  <Link>selected</Link>
                </li>
                <li className={css(styles.subMenuLink)}>
                  <Link>archived</Link>
                </li>
              </React.Fragment>
            ) : null}
          </ul>
          {/* ############# STUDIO SECTION ############# */}
          <ul className={css(styles.subMenuCol)}>
            <li
              onClick={() => this.setState({ activeMenu: 'studio' })}
              className={css(styles.subMenuLink)}
            >
              <b>studio</b>
            </li>
            {this.state.activeMenu === 'studio' ? (
              <React.Fragment>
                <li className={css(styles.subMenuLink)}>
                  <Link>about</Link>
                </li>
                <li className={css(styles.subMenuLink)}>
                  <Link>exploration</Link>
                </li>
                <li className={css(styles.subMenuLink)}>
                  <Link>texts</Link>
                </li>
              </React.Fragment>
            ) : null}
          </ul>
          {/* ############# CONTACT SECTION ############# */}
          <ul className={css(styles.subMenuCol)}>
            <li
              onClick={() => this.setState({ activeMenu: 'contact' })}
              className={css(styles.subMenuLink)}
            >
              <b>contact</b>
            </li>
            {this.state.activeMenu === 'contact' ? (
              <React.Fragment>
                <li className={css(styles.subMenuLink)}>
                  <Link>find us</Link>
                </li>
                <li className={css(styles.subMenuLink)}>
                  <Link>press</Link>
                </li>
                <li className={css(styles.subMenuLink)}>
                  <Link>retailers</Link>
                </li>
              </React.Fragment>
            ) : null}
          </ul>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            shop
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default Menu
