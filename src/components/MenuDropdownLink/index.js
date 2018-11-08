import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import Link from 'gatsby-link'

import { styles } from './styles'

class MenuDropdownLink extends Component {
  render() {
    const { alias, link, activeSubMenu } = this.props

    return (
      <li
        className={css(styles.subMenuDropdownLink)}
      >
        {
          activeSubMenu ?
            <Link to={`/${link}`}><b>{alias || link}</b></Link>
            :
            <Link to={`/${link}`}>{alias || link}</Link>
        }
      </li>
    )
  }
}

MenuDropdownLink.propTypes = {
  alias: PropTypes.string,
  link: PropTypes.string.isRequired,
  activeSubMenu: PropTypes.string.isRequired,
}

export default MenuDropdownLink
