import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import Link from 'gatsby-link'
import { navigate } from 'gatsby'
import * as styles from './styles'
import MenuDropdownLink from '../MenuDropdownLink'

import Img from 'gatsby-image'

class Menu extends Component {
  constructor(props) {
    super(props)

    this.pathname = null

    if (props.location) {
      this.pathname = props.location.pathname
    }

    this.setActiveMenu = this.setActiveMenu.bind(this)
    this.isActiveMenu = this.isActiveMenu.bind(this)
    this.isActiveSubMenu = this.isActiveSubMenu.bind(this)
    this.isShopCurrentPath = this.isShopCurrentPath.bind(this)

    this.state = {
      activeMenu: null,
      activeSubMenu: null,
    }
  }

  setActiveMenu() {
    let activeMenu = null
    let activeSubMenu = null
    switch (this.pathname) {
      case '/':
        activeMenu = 'projects'
        activeSubMenu = '/'
        break
      case '/selected/':
        activeMenu = 'projects'
        activeSubMenu = 'selected'
        break
      case '/archived/':
        activeMenu = 'projects'
        activeSubMenu = 'archived'
        break
      case '/about/':
        activeMenu = 'studio'
        activeSubMenu = 'about'
        break
      case '/exploration/':
        activeMenu = 'studio'
        activeSubMenu = 'exploration'
        break
      case '/texts/':
        activeMenu = 'studio'
        activeSubMenu = 'texts'
        break
      case '/find-us/':
        activeMenu = 'contact'
        activeSubMenu = 'find-us'
        break
      case '/press/':
        activeMenu = 'contact'
        activeSubMenu = 'press'
        break
      case '/press-expanded/':
        activeMenu = 'contact'
        activeSubMenu = 'press'
        break
      case '/retailers/':
        activeMenu = 'contact'
        activeSubMenu = 'retailers'
        break
      case '/shop/':
        activeMenu = 'shop'
        break
      default:
        activeMenu = null
    }

    this.setState({
      activeMenu,
      activeSubMenu,
    })
  }

  isActiveMenu(menu) {
    return menu === this.state.activeMenu
  }

  isActiveSubMenu(subMenu) {
    return subMenu === this.state.activeSubMenu
  }

  isShopCurrentPath() {
    return 'shop' === this.state.activeMenu
  }

  componentDidMount() {
    this.setActiveMenu()
  }

  render() {
    const { data } = this.props
    return (
      <div className={css(styles.menuContainer)}>
        <div className={css(styles.brand)}>
          <div className={css(styles.logoWrap)}>
            <Link
              data-cy="logo"
              to="/selected/"
              className={css(styles.logoLink)}
            >
              <Img fluid={data.logoImage.childImageSharp.fluid} />
            </Link>
          </div>
        </div>

        {/* ############# PROJECT SECTION ############# */}
        <div className={css(styles.dropDownWrap)}>
          <ul className={css(styles.subMenuCol)}>
            <li
              onClick={() => navigate('/selected/')}
              className={css(styles.subMenuItem)}
            >
              <span
                className={
                  this.isShopCurrentPath()
                    ? css(styles.subMenuLinkInactive)
                    : this.isActiveMenu('projects')
                    ? css(styles.subMenuLinkActive)
                    : css(styles.subMenuLink)
                }
              >
                projects
              </span>
            </li>

            {this.isActiveMenu('projects') ? (
              <React.Fragment>
                <MenuDropdownLink
                  link="selected"
                  activeSubMenu={
                    this.isActiveSubMenu('/') ||
                    this.isActiveSubMenu('selected')
                  }
                />
                <MenuDropdownLink
                  link="archived"
                  activeSubMenu={this.isActiveSubMenu('archived')}
                />
              </React.Fragment>
            ) : null}
          </ul>

          {/* ############# STUDIO SECTION ############# */}
          <ul className={css(styles.subMenuCol)}>
            <li
              data-cy="studio"
              onClick={() => navigate('/about/')}
              className={css(styles.subMenuItem)}
            >
              <span
                className={
                  this.isShopCurrentPath()
                    ? css(styles.subMenuLinkInactive)
                    : this.isActiveMenu('studio')
                    ? css(styles.subMenuLinkActive)
                    : css(styles.subMenuLink)
                }
              >
                studio
              </span>
            </li>
            {this.isActiveMenu('studio') ? (
              <React.Fragment>
                <MenuDropdownLink
                  link="about"
                  activeSubMenu={this.isActiveSubMenu('about')}
                />
                <MenuDropdownLink
                  link="exploration"
                  activeSubMenu={this.isActiveSubMenu('exploration')}
                />
                <MenuDropdownLink
                  link="texts"
                  activeSubMenu={this.isActiveSubMenu('texts')}
                />
              </React.Fragment>
            ) : null}
          </ul>
          {/* ############# CONTACT SECTION ############# */}
          <ul className={css(styles.subMenuCol)}>
            <li
              data-cy="contact"
              onClick={() => navigate('/find-us/')}
              className={css(styles.subMenuItem)}
            >
              <span
                className={
                  this.isShopCurrentPath()
                    ? css(styles.subMenuLinkInactive)
                    : this.isActiveMenu('contact')
                    ? css(styles.subMenuLinkActive)
                    : css(styles.subMenuLink)
                }
              >
                contact
              </span>
            </li>
            {this.isActiveMenu('contact') ? (
              <React.Fragment>
                <MenuDropdownLink
                  alias="find us"
                  link="find-us"
                  activeSubMenu={this.isActiveSubMenu('find-us')}
                />
                <MenuDropdownLink
                  link="press"
                  activeSubMenu={this.isActiveSubMenu('press')}
                />
                <MenuDropdownLink
                  link="retailers"
                  activeSubMenu={this.isActiveSubMenu('retailers')}
                />
              </React.Fragment>
            ) : null}
          </ul>
        </div>
        <div className={css(styles.shopWrap)}>
          <ul className={css(styles.subMenuColShop)}>
            <li className={css(styles.subMenuItemShop)}>
              <span
                onClick={() => navigate('/shop/')}
                className={
                  this.isShopCurrentPath()
                    ? css(styles.subMenuLinkActive)
                    : css(styles.subMenuLinkInactive)
                }
              >
                shop
              </span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
Menu.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}

export default Menu
