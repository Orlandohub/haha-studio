import React from 'react'
import { css } from 'emotion'
import footerArrow from '../../images/03_D_footer_arrow_project_page.png'
import * as styles from './styles'
import Link from 'gatsby-link'

const NavFooter = props => {
  return (
    <div className={css(styles.footerWrapper)}>
      <Link to={props.linkLeft} className={css(styles.linkLeft)}>
        <img
          className={css(styles.arrowLeft)}
          src={footerArrow}
          alt="arrow left"
        />
      </Link>
      <p className={css(styles.paragraph)}>
        <Link to={props.linkText} className={css(styles.linkText)}>
          {props.text}
        </Link>
      </p>
      <Link to={props.linkRight} className={css(styles.linkRight)}>
        <img
          className={css(styles.arrowRight)}
          src={footerArrow}
          alt="arrowr right"
        />
      </Link>
    </div>
  )
}

export default NavFooter
