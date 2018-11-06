import React, { Component } from 'react'
import { navigate } from "gatsby"
import PropTypes from 'prop-types'
import { css, cx } from 'emotion'

import { styles } from './styles'

class MenuDropdownLink extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(link) {
    const { setActiveSubMenu } = this.props

    console.log('setActiveSubMenu', setActiveSubMenu);
    setActiveSubMenu()
    navigate(`/page-2`)
  }

  render() {
    const { link, activeSubMenu } = this.props

    return (
      <li
        className={css(styles.subMenuDropdownLink)}
      >
      {
        link === activeSubMenu ?
          <div onClick={ () => this.handleClick(link)} role="link" tabIndex="0">
            <b>{link}</b>
          </div>
        :
          <div onClick={ () => this.handleClick(link)} role="link" tabIndex="0">
            {link}
          </div>
      }
      </li>
    );
  }
}

MenuDropdownLink.propTypes = {
  link: PropTypes.string.isRequired,
  activeSubMenu: PropTypes.string.isRequired,
  setActiveSubMenu: PropTypes.func.isRequired,
}

export default MenuDropdownLink
