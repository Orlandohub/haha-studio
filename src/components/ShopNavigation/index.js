import React from 'react'
import { css } from 'react-emotion'
import Link from 'gatsby-link'
import * as styles from './styles'

const ShopNavigation = () => (
  <div className={css(styles.ShopNavigationWrapper)}>
    <span className={css(styles.supportLink)}>
      <Link
        to={'/support/'}
        className={css(styles.linkStyles)}
        activeClassName={css(styles.activeLink)}
      >
        support
      </Link>
    </span>
    <span className={css(styles.shippingLink)}>
      <Link
        to={'/shipping/'}
        className={css(styles.linkStyles)}
        activeClassName={css(styles.activeLink)}
      >
        shipping
      </Link>
    </span>
    <span className={css(styles.termsLink)}>
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
