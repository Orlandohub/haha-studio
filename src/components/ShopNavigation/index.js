import React from 'react'
import { css } from 'react-emotion'
import Link from 'gatsby-link'
import * as styles from './styles'

const ShopNavigation = () => (
  <div className={css(styles.ShopNavigationWrapper)}>
    <span className={css(styles.navFooter)}>
      <a href="mailto:shop@hahastudio.se" className={css(styles.linkStyles)}>
        support
      </a>
    </span>
    <span className={css(styles.navFooter)}>
      <Link
        to={'/shipping/'}
        className={css(styles.linkStyles)}
        activeClassName={css(styles.activeLink)}
      >
        shipping
      </Link>
    </span>
    <span className={css(styles.navFooter)}>
      <Link
        to={'/terms-licenses/'}
        className={css(styles.linkStyles)}
        activeClassName={css(styles.activeLink)}
      >
        terms/licenses
      </Link>
    </span>
  </div>
)

export default ShopNavigation
