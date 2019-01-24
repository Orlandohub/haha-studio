import { startsWith } from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import Link from 'gatsby-link'
import { navigate } from 'gatsby'
import * as styles from './styles'
import MenuDropdownLink from '../MenuDropdownLink'
import Cart from '../CartComponent/index'
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
    this.hideCart = this.hideCart.bind(this)
    this.showCart = this.showCart.bind(this)
    this.setItemsCount = this.setItemsCount.bind(this)

    this.state = {
      activeMenu: null,
      activeSubMenu: null,
      activeClass: css(styles.cartWrapperHidden),
      itemCounter: 0,
    }
  }

  hideCart() {
    this.setState({
      activeClass: css(styles.cartWrapperHidden),
    })
  }

  showCart() {
    this.setState({
      activeClass: css(styles.cartWrapper),
    })
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
      case '/find-us/':
        activeMenu = 'contact'
        activeSubMenu = 'find-us'
        break
      case '/retailers/':
        activeMenu = 'contact'
        activeSubMenu = 'retailers'
        break
      case '/shipping/':
        activeMenu = 'shop'
        break
      case '/terms-licenses/':
        activeMenu = 'shop'
        break
      case '/shop-product-page/':
        activeMenu = 'shop'
        break
      case '/shop/':
        activeMenu = 'shop'
        break
      default:
        activeMenu = null
    }

    if (startsWith(this.pathname, '/texts/')) {
      activeMenu = 'studio'
      activeSubMenu = 'texts'
    }

    if (startsWith(this.pathname, '/press/')) {
      activeMenu = 'contact'
      activeSubMenu = 'press'
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

  setItemsCount() {
    this.setState({itemCounter: window.Snipcart.api.items.count()})
  }

  componentDidMount() {
    this.setActiveMenu()
    const setItemsCount = this.setItemsCount

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      setItemsCount()

      window.Snipcart.subscribe('page.changed', function (page) {
        console.log('page', page)
        // clearInterval(paymentDetailsButton)
      })

      document.addEventListener('snipcart.ready', function() {
        setItemsCount()
      })

      window.Snipcart.subscribe('item.added', function () {
        setItemsCount()
      })
      window.Snipcart.subscribe('item.removed', function () {
        setItemsCount()
      })
      window.Snipcart.subscribe('item.updated', function () {
        setItemsCount()
      })
    }
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
              {
                this.state.itemCounter > 0 ?
                  <button
                    className={css(styles.cartShowBtn)}
                    onClick={this.showCart}
                  >
                    {this.state.itemCounter}
                  </button> : null
              }
            </li>
          </ul>
        </div>
        <div className={this.state.activeClass}>
          <Cart setItemsCount={this.setItemsCount} showElements={false} hideCart={this.hideCart} />
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
