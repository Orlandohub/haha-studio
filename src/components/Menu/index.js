import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import { Navbar, Nav } from 'react-bootstrap'
import Link from 'gatsby-link'
import { navigate } from 'gatsby'
import { styles } from './styles'
import MenuDropdownLink from '../MenuDropdownLink'
import logo from '../../images/logo_large.png'

const Menu = ({ location }) => {
  let pathname = null

  if (location) {
    pathname = location.pathname
  } 
  return (
    <Navbar fluid={true} className={css(styles.menuContainer)}>
      <Navbar.Header className={css(styles.brand)}>
        <Navbar.Brand className={css(styles.logoWrap)}>
          <Link to="/selected">
            <img className={css(styles.logoImage)} src={logo} alt="HAHA Studio" />
          </Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        {/* ############# PROJECT SECTION ############# */}
        <ul className={css(styles.subMenuCol)}>
          <li onClick={() => navigate('/selected')} className={css(styles.subMenuItem)}>
            <span className={css(styles.subMenuLink)}>projects</span>
          </li>
          {pathname === '/' || pathname === '/selected' || pathname === '/archived' ? (
            <React.Fragment>
              <MenuDropdownLink
                link="selected"
                activeSubMenu={pathname === '/' || pathname === '/selected'}
              />
              <MenuDropdownLink
                link="archived"
                activeSubMenu={pathname === '/archived'}
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
          {pathname === '/about' ||
          pathname === '/exploration' ||
          pathname === '/texts' ? (
              <React.Fragment>
                <MenuDropdownLink
                  link="about"
                  activeSubMenu={pathname === '/about'}
                />
                <MenuDropdownLink
                  link="exploration"
                  activeSubMenu={pathname === '/exploration'}
                />
                <MenuDropdownLink
                  link="texts"
                  activeSubMenu={pathname === '/texts'}
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
          {pathname === '/find-us' ||
          pathname === '/press' ||
          pathname === '/retailers' ? (
              <React.Fragment>
                <MenuDropdownLink
                  alias="find us"
                  link="find-us"
                  activeSubMenu={pathname === '/find-us'}
                />
                <MenuDropdownLink
                  link="press"
                  activeSubMenu={pathname === '/press'}
                />
                <MenuDropdownLink
                  link="retailers"
                  activeSubMenu={pathname === '/retailers'}
                />
              </React.Fragment>
            ) : null}
        </ul>
      </Nav>
      <Nav pullRight>
        <ul className={css(styles.subMenuCol)}>
          <li className={css(styles.subMenuItemLeft)}>
            <span
              onClick={() => navigate('/shop')}
              className={css(styles.subMenuLinkShop)}
            >
              shop
            </span>
          </li>
        </ul>
      </Nav>
    </Navbar>
  )
}
Menu.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Menu
