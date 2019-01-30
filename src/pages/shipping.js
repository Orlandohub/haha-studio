import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import { css } from 'react-emotion'
import * as styles from '../components/IndexPageStyles/ShippingPageStyles/styles'
import ShopNavigation from '../components/ShopNavigation/index'
import SEO from '../components/SEO/index'

const Shipping = ({ location }) => (
  <Layout location={location}>
    <SEO
      title={'HAHA Studio shipping'}
      description={'HAHA Studio shipping prices and informations'}
      //location={location}
    />
    <div className={css(styles.shippingWrapper)}>
      <div className={css(styles.shippingTitle)}>Shipping</div>
      <div className={css(styles.shippingTextWrapper)}>
        Interior accessory products ares shipped within 3 business days after
        purchased. Lighting products take 2-3 weeks of leading time to prepare.
        The shipping usually takes 5-7 business days to arrive at your address.
        For further information regarding shipping please email
        shipping@hahastudio.se
      </div>

      <div className={css(styles.shippingTitle)}>Shipping fee</div>
      <div className={css(styles.shippingTextWrapper)}>
        {'                                                '}
        <table className={css(styles.tableStyles)}>
          <tbody>
            <tr>
              <td className={css(styles.rowStyles)}>{null}</td>
              <td className={css(styles.rowStyles)}>Europe</td>
              <td className={css(styles.rowStyles)}>
                North
                <br />
                America
              </td>
              <td className={css(styles.rowStyles)}>Asia</td>
              <td className={css(styles.rowStyles)}>
                Rest of
                <br />
                World
              </td>
            </tr>
            <tr>
              <td className={css(styles.bottomRowStyles)}>Accessory</td>
              <td className={css(styles.bottomRowStyles)}>€3.00</td>
              <td className={css(styles.bottomRowStyles)}>€3.00</td>
              <td className={css(styles.bottomRowStyles)}>€3.00</td>
              <td className={css(styles.bottomRowStyles)}>€3.00</td>
            </tr>
            <tr>
              <td>Lighting</td>
              <td>€8.00</td>
              <td>€8.00</td>
              <td>€8.00</td>
              <td>€8.00</td>
            </tr>
          </tbody>
        </table>

        {'                                                '}
        <p className={css(styles.disclaimerStyles)}>
          * Here will be a line to state that the shipping fee could be vary due
          to the certain circumstances. Terms here has to be well thought, so to
          protect ourselves.
        </p>
      </div>
      <ShopNavigation />
    </div>
  </Layout>
)

Shipping.proptypes = {
  location: PropTypes.object.isRequired,
}

export default Shipping
