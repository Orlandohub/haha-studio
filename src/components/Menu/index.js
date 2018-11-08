import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import { Navbar, NavItem, Nav } from 'react-bootstrap'
import { navigate } from 'gatsby'
import { styles } from './styles'
import MenuDropdownLink from '../MenuDropdownLink'

const Menu = ({ location }) => (
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
          onClick={() => navigate('/')}
          className={css(styles.subMenuItem)}
        >
          <span className={css(styles.subMenuLink)}>
            <b>projects</b>
          </span>
        </li>
        {location.pathname === '/' || location.pathname === '/archived' ? (
          <React.Fragment>
            <MenuDropdownLink
              alias="selected"
              link="/"
              activeSubMenu={location.pathname === '/'}
            />
            <MenuDropdownLink
              link="archived"
              activeSubMenu={location.pathname === '/archived'}
            />
          </React.Fragment>
        ) : null}
      </ul>
      {/* ############# STUDIO SECTION ############# */}
      <ul className={css(styles.subMenuCol)}>
        <li
          onClick={() => navigate('/about')}
          className={css(styles.subMenuItem)}
        >
          <span className={css(styles.subMenuLink)}>
            <b>studio</b>
          </span>
        </li>
        {location.pathname === '/about' || location.pathname === '/exploration' || location.pathname === '/texts' ? (
          <React.Fragment>
            <MenuDropdownLink
              link="about"
              activeSubMenu={location.pathname === '/about'}
            />
            <MenuDropdownLink
              link="exploration"
              activeSubMenu={location.pathname === '/exploration'}
            />
            <MenuDropdownLink
              link="texts"
              activeSubMenu={location.pathname === '/texts'}
            />
          </React.Fragment>
        ) : null}
      </ul>
      {/* ############# CONTACT SECTION ############# */}
      <ul className={css(styles.subMenuCol)}>
        <li
          onClick={() => navigate('/find-us')}
          className={css(styles.subMenuItem)}
        >
          <span className={css(styles.subMenuLink)}>
            <b>contact</b>
          </span>
        </li>
        {location.pathname === '/find-us' || location.pathname === '/contact' || location.pathname === '/retailers' ? (
          <React.Fragment>
            <MenuDropdownLink
              link="find us"
              activeSubMenu={location.pathname === '/find-us'}
            />
            <MenuDropdownLink
              link="press"
              activeSubMenu={location.pathname === '/press'}
            />
            <MenuDropdownLink
              link="retailers"
              activeSubMenu={location.pathname === '/retailers'}
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
Menu.propTypes = {
  location: PropTypes.object.isRequired
}

export default Menu
