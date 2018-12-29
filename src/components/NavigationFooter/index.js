import React from 'react'
import { css } from 'emotion'
import footerArrow from '../../images/03_D_footer_arrow_project_page.png'
import * as styles from './styles'
import Link from 'gatsby-link'

const NavFooter = props => {
  return (
    <div className={css(styles.footerWrapper)}>
      <span className={css(styles.spanLeft)}>
        <Link to={props.linkLeft} className={css(styles.linkStyle)}>
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
          <Link to={props.linkText} className={css(styles.linkText)}>
            {props.text}
          </Link>
        </p>
      </span>

      <span className={css(styles.spanRight)}>
        {' '}
        <Link to={props.linkRight} className={css(styles.linkStyle)}>
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

export default NavFooter
