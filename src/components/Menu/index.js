import React, { Component } from 'react'
import { css } from 'emotion'
import { Navbar, NavItem, Nav } from 'react-bootstrap'
import { Subscribe } from "unstated";
import { styles } from './styles'
import MenuDropdownLink from '../MenuDropdownLink'
import CurrentPageContainer from '../../state/CurrentPageContainer'
import Link from 'gatsby-link'

class Menu extends Component {
  render() {
    return (
      <Subscribe to={[CurrentPageContainer]}>
        {currentPage => (
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
                  onClick={() => currentPage.setActiveMenu('projects')}
                  className={css(styles.subMenuItem)}
                >
                  <span className={css(styles.subMenuLink)}>
                    <b>projects</b>
                  </span>
                </li>
                {currentPage.state.activeMenu === 'projects' ? (
                  <React.Fragment>
                    <li>
                            <Link to="/">Go back to the homepage</Link>
                    </li>
                    <MenuDropdownLink
                      link="selected"
                      activeSubMenu={currentPage.state.activeSubMenu}
                      setActiveSubMenu={() => currentPage.setActiveSubMenu('selected')}
                    />
                    <MenuDropdownLink
                      link="page-2"
                      activeSubMenu={currentPage.state.activeSubMenu}
                      setActiveSubMenu={() => currentPage.setActiveSubMenu('page-2')}
                    />
                  </React.Fragment>
                ) : null}
              </ul>
              {/* ############# STUDIO SECTION ############# */}
              <ul className={css(styles.subMenuCol)}>
                <li
                  onClick={() => currentPage.setActiveMenu('studio')}
                  className={css(styles.subMenuItem)}
                >
                  <span className={css(styles.subMenuLink)}>
                    <b>studio</b>
                  </span>
                </li>
                {currentPage.state.activeMenu === 'studio' ? (
                  <React.Fragment>
                    <MenuDropdownLink
                      link="about"
                      activeSubMenu={currentPage.state.activeSubMenu}
                      setActiveSubMenu={() => currentPage.setActiveSubMenu('about')}
                    />
                    <MenuDropdownLink
                      link="exploration"
                      activeSubMenu={currentPage.state.activeSubMenu}
                      setActiveSubMenu={() => currentPage.setActiveSubMenu('exploration')}
                    />
                    <MenuDropdownLink
                      link="texts"
                      activeSubMenu={currentPage.state.activeSubMenu}
                      setActiveSubMenu={() => currentPage.setActiveSubMenu('texts')}
                    />
                  </React.Fragment>
                ) : null}
              </ul>
              {/* ############# CONTACT SECTION ############# */}
              <ul className={css(styles.subMenuCol)}>
                <li
                  onClick={() => currentPage.setActiveMenu('contact')}
                  className={css(styles.subMenuItem)}
                >
                  <span className={css(styles.subMenuLink)}>
                    <b>contact</b>
                  </span>
                </li>
                {currentPage.state.activeMenu === 'contact' ? (
                  <React.Fragment>
                    <MenuDropdownLink
                      link="find us"
                      activeSubMenu={currentPage.state.activeSubMenu}
                      setActiveSubMenu={() => currentPage.setActiveSubMenu('find us')}
                    />
                    <MenuDropdownLink
                      link="press"
                      activeSubMenu={currentPage.state.activeSubMenu}
                      setActiveSubMenu={() => currentPage.setActiveSubMenu('press')}
                    />
                    <MenuDropdownLink
                      link="retailers"
                      activeSubMenu={currentPage.state.activeSubMenu}
                      setActiveSubMenu={() => currentPage.setActiveSubMenu('retailers')}
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
        )}
      </Subscribe>
    )
  }
}

export default Menu
