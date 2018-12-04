import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import Link from 'gatsby-link'
import { navigate } from 'gatsby'
import { styles } from './styles'
import MenuDropdownLink from '../MenuDropdownLink'
//import logo from '../../images/logo_large.png'

const Menu = ({ location }) => {
  let pathname = null

  if (location) {
    pathname = location.pathname
  }
  return (
    <div className={css(styles.menuContainer)}>
      <div className={css(styles.brand)}>
        <div className={css(styles.logoWrap)}>
          <Link to="/selected" className={css(styles.logoLink)}>
            HAHA studio
          </Link>
        </div>
      </div>

      {/* ############# PROJECT SECTION ############# */}
      <div className={css(styles.dropDownWrap)}>
        <ul className={css(styles.subMenuCol)}>
          <li
            onClick={() => navigate('/selected')}
            className={css(styles.subMenuItem)}
          >
            <span
              className={
                pathname === '/' ||
                pathname === '/selected' ||
                pathname === '/archived'
                  ? css(styles.subMenuLinkBlack)
                  : css(styles.subMenuLink)
              }
            >
              projects
            </span>
          </li>

          {pathname === '/' ||
          pathname === '/selected' ||
          pathname === '/archived' ? (
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
            <span
              className={
                pathname === '/about' ||
                pathname === '/exploration' ||
                pathname === '/texts'
                  ? css(styles.subMenuLinkBlack)
                  : css(styles.subMenuLink)
              }
            >
              studio
            </span>
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
            <span
              className={
                pathname === '/find-us' ||
                pathname === '/press' ||
                pathname === '/retailers'
                  ? css(styles.subMenuLinkBlack)
                  : css(styles.subMenuLink)
              }
            >
              contact
            </span>
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
      </div>

      <div className={css(styles.shopWrap)}>
        <ul className={css(styles.subMenuCol2)}>
          <li className={css(styles.subMenuItemLeft)}>
            <span
              onClick={() => navigate('/shop')}
              className={css(styles.subMenuLinkShop)}
            >
              shop
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
Menu.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Menu
