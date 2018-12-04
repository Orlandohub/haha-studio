import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import Link from 'gatsby-link'

import * as styles from './styles'

class MenuDropdownLink extends Component {
  render() {
    const { alias, link, activeSubMenu } = this.props

    return (
      <li
        className={css(styles.subMenuDropdownItem)}
      >
        {
          activeSubMenu ?
            <Link className={css(styles.subMenuDropdownLinkActive)} to={`/${link}`}>{alias || link}</Link>
            :
            <Link className={css(styles.subMenuDropdownLink)} to={`/${link}`}>{alias || link}</Link>
        }
      </li>
    )
  }
}

MenuDropdownLink.propTypes = {
  alias: PropTypes.string,
  link: PropTypes.string.isRequired,
  activeSubMenu: PropTypes.bool.isRequired,
}

export default MenuDropdownLink
