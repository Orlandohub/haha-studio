import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import { css } from 'react-emotion'
import * as styles from '../components/IndexPageStyles/SupportPageStyles/styles'
import ShopNavigation from '../components/ShopNavigation/index'

const Support = ({ location }) => (
  <React.Fragment>
    <Layout location={location}>
      <div className={css(styles.supportWrapper)}>
        <div className={css(styles.supportTitle)}>Support</div>
        <div className={css(styles.supportTextWrapper)}>
          Support page is under construction
        </div>
        <ShopNavigation />
      </div>
    </Layout>
  </React.Fragment>
)

Support.proptypes = {
  location: PropTypes.object.isRequired,
}

export default Support
