import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
// import footerArrow from '../../images/03_D_footer_arrow_project_page.png'
import * as styles from './styles'
import Link from 'gatsby-link'
import { genericHashLink } from 'react-router-hash-link'

const MyHashLink = props => genericHashLink(props, Link)

const NavFooter = props => {
  const { linkLeft, linkRight, linkText, text } = props
  return (
    <div className={css(styles.footerWrapper)}>
      <MyHashLink to={linkLeft}>
        <span className={css(styles.arrows)}>&#8592;</span>
      </MyHashLink>

      <span className={css(styles.spanCenter)}>
        <p className={css(styles.paragraph)}>
          <MyHashLink to={linkText} className={css(styles.linkText)}>
            {text}
          </MyHashLink>
        </p>
      </span>

      <MyHashLink className={css(styles.arrows)} to={linkRight}>
        <span className={css(styles.arrows)}>&#8594;</span>
      </MyHashLink>
    </div>
  )
}

NavFooter.propTypes = {
  linkLeft: PropTypes.string.isRequired,
  linkRight: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default NavFooter
