import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import { Navbar, Nav } from 'react-bootstrap'
import Link from 'gatsby-link'
import { navigate } from 'gatsby'
import { styles } from './styles'
import MenuDropdownLink from '../MenuDropdownLink'
import logo from '../../images/logo_large.png'

const Menu = ({ location }) => (
  <Navbar className={css(styles.menuContainer)}>
    <Navbar.Header className={css(styles.brand)}>
      <Navbar.Brand className={css(styles.logoWrap)}>
        <Link to="/">
          <img className={css(styles.logoImage)} src={logo} alt="HAHA Studio" />
        </Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      {/* ############# PROJECT SECTION ############# */}
      <ul className={css(styles.subMenuCol)}>
        <li onClick={() => navigate('/')} className={css(styles.subMenuItem)}>
          <span className={css(styles.subMenuLink)}>projects</span>
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
          <span className={css(styles.subMenuLink)}>studio</span>
        </li>
        {location.pathname === '/about' ||
        location.pathname === '/exploration' ||
        location.pathname === '/texts' ? (
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
          <span className={css(styles.subMenuLink)}>contact</span>
        </li>
        {location.pathname === '/find-us' ||
        location.pathname === '/press' ||
        location.pathname === '/retailers' ? (
            <React.Fragment>
              <MenuDropdownLink
                alias="find us"
                link="find-us"
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
      <ul className={css(styles.subMenuCol)}>
        <li className={css(styles.subMenuItem)}>
          <span
            onClick={() => navigate('/shop')}
            className={css(styles.subMenuLink)}
          >
            shop
          </span>
        </li>
      </ul>
    </Nav>
  </Navbar>
)
Menu.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Menu
