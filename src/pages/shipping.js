import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import { css } from 'react-emotion'
import * as styles from '../components/IndexPageStyles/ShippingPageStyles/styles'

const Shipping = ({ location }) => (
  <React.Fragment>
    <Layout location={location}>
      <div className={css(styles.shippingWrapper)}>
        <div>
          <div className={css(styles.shippingTitle)}>
            Shipping
            <br />
            <br />
          </div>
          <div className={css(styles.shippingTextWrapper)}>
            Interior accessory products ares shipped within 3 business days
            after purchased. Lighting products take 2-3 weeks of leading time to
            prepare. The shipping usually takes 5-7 business days to arrive at
            your address. For further information regarding shipping please
            email shipping@hahastudio.se
          </div>
        </div>

        <div>
          <div className={css(styles.shippingTitle)}>
            Shipping fee
            <br />
            <br />
          </div>
          <div className={css(styles.shippingTextWrapper)}>
            <table className={css(styles.tableStyles)}>
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
                <td className={css(styles.bottomRowStyles)}>&#8364;3.00</td>
                <td className={css(styles.bottomRowStyles)}>&#8364;3.00</td>
                <td className={css(styles.bottomRowStyles)}>&#8364;3.00</td>
                <td className={css(styles.bottomRowStyles)}>&#8364;3.00</td>
              </tr>
              <tr>
                <td>Lighting</td>
                <td>&#8364;8.00</td>
                <td>&#8364;8.00</td>
                <td>&#8364;8.00</td>
                <td>&#8364;8.00</td>
              </tr>
            </table>
          </div>
        </div>

        {/*############### SHOP FOOTER MENU GOES HERE ################*/}
      </div>
    </Layout>
  </React.Fragment>
)

Shipping.proptypes = {
  location: PropTypes.object.isRequired,
}

export default Shipping
