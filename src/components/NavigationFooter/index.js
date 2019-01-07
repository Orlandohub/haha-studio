import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import footerArrow from '../../images/03_D_footer_arrow_project_page.png'
import * as styles from './styles'
import Link from 'gatsby-link'

const NavFooter = props => {
  const {
    linkLeft,
    linkRight,
    linkText,
    text
  } = props
  return (
    <div className={css(styles.footerWrapper)}>
      <span className={css(styles.spanLeft)}>
        <Link to={linkLeft} className={css(styles.linkStyle)}>
          <img
            className={css(styles.arrowLeft)}
            src={footerArrow}
            alt="arrow left"
          />
        </Link>
      </span>

      <span className={css(styles.spanCenter)}>
        {' '}
        <p className={css(styles.paragraph)}>
          <Link to={linkText} className={css(styles.linkText)}>
            {text}
          </Link>
        </p>
      </span>

      <span className={css(styles.spanRight)}>
        {' '}
        <Link to={linkRight} className={css(styles.linkStyle)}>
          <img
            className={css(styles.arrowRight)}
            src={footerArrow}
            alt="arrowr right"
          />
        </Link>
      </span>
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
