import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import Link from 'gatsby-link'
import { navigate } from 'gatsby'
import * as styles from './styles'
import MenuDropdownLink from '../MenuDropdownLink'
import Media from 'react-media'
import Img from 'gatsby-image'

const Menu = ({ location, data }) => {
  console.log('data', data)
  let pathname = null

  if (location) {
    pathname = location.pathname
  }

  return (
    <Media query="(max-width: 1024px)">
      {matches =>
        matches ? (
          <div className={css(styles.menuContainer)}>
            <div className={css(styles.brand)}>
              <div className={css(styles.logoWrap)}>
                <Link
                  to="/selected/"
                  data-cy="logo"
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
                      pathname === '/' ||
                      pathname === '/selected/' ||
                      pathname === '/archived/'
                        ? css(styles.subMenuLinkBlack)
                        : css(styles.subMenuLink)
                    }
                  >
                    projects
                  </span>
                </li>

                {pathname === '/' ||
                pathname === '/selected/' ||
                pathname === '/archived/' ? (
                  <React.Fragment>
                    <MenuDropdownLink
                      link="selected"
                      activeSubMenu={
                        pathname === '/' || pathname === '/selected/'
                      }
                    />
                    <MenuDropdownLink
                      link="archived"
                      activeSubMenu={pathname === '/archived/'}
                    />
                  </React.Fragment>
                ) : null}
              </ul>

              {/* ############# STUDIO SECTION ############# */}
              <ul className={css(styles.subMenuCol)}>
                <li
                  onClick={() => navigate('/about/')}
                  className={css(styles.subMenuItem)}
                >
                  <span
                    data-cy="studio"
                    className={
                      pathname === '/about/' ||
                      pathname === '/exploration/' ||
                      pathname === '/texts/'
                        ? css(styles.subMenuLinkBlack)
                        : css(styles.subMenuLink)
                    }
                  >
                    studio
                  </span>
                </li>
                {pathname === '/about/' ||
                pathname === '/exploration/' ||
                pathname === '/texts/' ? (
                  <React.Fragment>
                    <MenuDropdownLink
                      link="about"
                      activeSubMenu={pathname === '/about/'}
                    />
                    <MenuDropdownLink
                      link="exploration"
                      activeSubMenu={pathname === '/exploration/'}
                    />
                    <MenuDropdownLink
                      link="texts"
                      activeSubMenu={pathname === '/texts/'}
                    />
                  </React.Fragment>
                ) : null}
              </ul>

              {/* ############# CONTACT SECTION ############# */}
              <ul className={css(styles.subMenuCol)}>
                <li
                  onClick={() => navigate('/find-us/')}
                  className={css(styles.subMenuItem)}
                >
                  <span
                    data-cy="contact"
                    className={
                      pathname === '/find-us/' ||
                      pathname === '/press/' ||
                      pathname === '/retailers/'
                        ? css(styles.subMenuLinkBlack)
                        : css(styles.subMenuLink)
                    }
                  >
                    contact
                  </span>
                </li>
                {pathname === '/find-us/' ||
                pathname === '/press/' ||
                pathname === '/retailers/' ? (
                  <React.Fragment>
                    <MenuDropdownLink
                      alias="find us"
                      link="find-us"
                      activeSubMenu={pathname === '/find-us/'}
                    />
                    <MenuDropdownLink
                      link="press"
                      activeSubMenu={pathname === '/press/'}
                    />
                    <MenuDropdownLink
                      link="retailers"
                      activeSubMenu={pathname === '/retailers/'}
                    />
                  </React.Fragment>
                ) : null}
              </ul>
            </div>

            <div className={css(styles.shopWrap)}>
              <ul className={css(styles.shopLink)}>
                <li className={css(styles.subMenuItemShop)}>
                  <span
                    onClick={() => navigate('/shop/')}
                    className={
                      pathname === '/shop/'
                        ? css(styles.subMenuLinkShopBlack)
                        : css(styles.subMenuLinkShop)
                    }
                  >
                    shop
                  </span>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className={css(styles.menuContainer)}>
            <div className={css(styles.brand)}>
              <div className={css(styles.logoWrap)}>
                <Link
                  to="/selected/"
                  data-cy="logo"
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
                      pathname !== '/shop/'
                        ? css(styles.subMenuLinkBlack)
                        : css(styles.subMenuLink)
                    }
                  >
                    projects
                  </span>
                </li>

                {pathname === '/' ||
                pathname === '/selected/' ||
                pathname === '/archived/' ? (
                  <React.Fragment>
                    <MenuDropdownLink
                      link="selected"
                      activeSubMenu={
                        pathname === '/' || pathname === '/selected/'
                      }
                    />
                    <MenuDropdownLink
                      link="archived"
                      activeSubMenu={pathname === '/archived/'}
                    />
                  </React.Fragment>
                ) : null}
              </ul>

              {/* ############# STUDIO SECTION ############# */}
              <ul className={css(styles.subMenuCol)}>
                <li
                  onClick={() => navigate('/about/')}
                  className={css(styles.subMenuItem)}
                >
                  <span
                    data-cy="studio"
                    className={
                      pathname !== '/shop/'
                        ? css(styles.subMenuLinkBlack)
                        : css(styles.subMenuLink)
                    }
                  >
                    studio
                  </span>
                </li>
                {pathname === '/about/' ||
                pathname === '/exploration/' ||
                pathname === '/texts/' ? (
                  <React.Fragment>
                    <MenuDropdownLink
                      link="about"
                      activeSubMenu={pathname === '/about/'}
                    />
                    <MenuDropdownLink
                      link="exploration"
                      activeSubMenu={pathname === '/exploration/'}
                    />
                    <MenuDropdownLink
                      link="texts"
                      activeSubMenu={pathname === '/texts/'}
                    />
                  </React.Fragment>
                ) : null}
              </ul>

              {/* ############# CONTACT SECTION ############# */}
              <ul className={css(styles.subMenuCol)}>
                <li
                  onClick={() => navigate('/find-us/')}
                  className={css(styles.subMenuItem)}
                >
                  <span
                    data-cy="constact"
                    className={
                      pathname !== '/shop/'
                        ? css(styles.subMenuLinkBlack)
                        : css(styles.subMenuLink)
                    }
                  >
                    contact
                  </span>
                </li>
                {pathname === '/find-us/' ||
                pathname === '/press/' ||
                pathname === '/retailers/' ? (
                  <React.Fragment>
                    <MenuDropdownLink
                      alias="find us"
                      link="find-us"
                      activeSubMenu={pathname === '/find-us/'}
                    />
                    <MenuDropdownLink
                      link="press"
                      activeSubMenu={pathname === '/press/'}
                    />
                    <MenuDropdownLink
                      link="retailers"
                      activeSubMenu={pathname === '/retailers/'}
                    />
                  </React.Fragment>
                ) : null}
              </ul>
            </div>

            <div className={css(styles.shopWrap)}>
              <ul className={css(styles.shopLink)}>
                <li className={css(styles.subMenuItemShop)}>
                  <span
                    onClick={() => navigate('/shop/')}
                    className={
                      pathname === '/shop/'
                        ? css(styles.subMenuLinkShopBlack)
                        : css(styles.subMenuLinkShop)
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
    </Media>
  )
}
Menu.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}

export default Menu
