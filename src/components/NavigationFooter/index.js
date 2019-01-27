import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import footerArrow from '../../images/03_D_footer_arrow_project_page.png'
import * as styles from './styles'
import Link from 'gatsby-link'
import { genericHashLink } from 'react-router-hash-link'

const MyHashLink = props => genericHashLink(props, Link)

const NavFooter = props => {
  const { linkLeft, linkRight, linkText, text } = props
  return (
    <div className={css(styles.footerWrapper)}>
      <span className={css(styles.spanLeft)}>
        <MyHashLink to={`${linkLeft}#Menu`} className={css(styles.linkStyle)}>
          <span className={css(styles.arrowRight)} style={{color: '#000'}}>&larr;</span>
        </MyHashLink>
      </span>

      <span className={css(styles.spanCenter)}>
        {' '}
        <p className={css(styles.paragraph)}>
          <MyHashLink to={`${linkText}#Menu`} className={css(styles.linkText)}>
            {text}
          </MyHashLink>
        </p>
      </span>

      <span className={css(styles.spanRight)}>
        {' '}
        <MyHashLink to={`${linkRight}#Menu`} className={css(styles.linkStyle)}>
          <span className={css(styles.arrowLeft)} style={{color: '#000'}}>&larr;</span>
        </MyHashLink>
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
