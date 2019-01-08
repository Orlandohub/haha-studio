import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import { css } from 'emotion'
import * as styles from '../components/IndexPageStyles/CheckOutPageStyles/styles'
import prImgMob from '../images/M_product_thumbnail_checkout_page.jpg'
import prImgDesk from '../images/D_product_thumbnail_checkout_page.jpg'

class CheckOut extends React.Component {
  constructor() {
    super()

    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    const { location } = this.props
    return (
      <Layout location={location}>
        <div className={css(styles.checkoutWrapper)}>
          <div className={css(styles.headerStyles)}>Order summary</div>

          {/* #############################     cart goest here        #############################*/}

          <table className={css(styles.tableStyles)}>
            <tr>
              <td className={css(styles.rowStyles)}>
                <img src={prImgMob} alt="product image" />
              </td>
              <td className={css(styles.rowStyles)}>Alia, Pack A</td>
              <td className={css(styles.rowStylesRight)}>
                <button className={css(styles.cardBtn)}>-</button>
                <span className={css(styles.numWrap)}>11</span>
                <button className={css(styles.cardBtn)}>+</button>
              </td>

              <td className={css(styles.rowStylesRight)}>1000 &#8364;</td>
            </tr>
            <tr>
              <td className={css(styles.rowStyles)}>
                <img src={prImgMob} alt="product image" />
              </td>
              <td className={css(styles.rowStyles)}>Alia, Pack A</td>
              <td className={css(styles.rowStylesRight)}>
                <button className={css(styles.cardBtn)}>-</button>
                <span className={css(styles.numWrap)}>11</span>
                <button className={css(styles.cardBtn)}>+</button>
              </td>

              <td className={css(styles.rowStylesRight)}>1000 &#8364;</td>
            </tr>
          </table>

          {/* #############################         end        #############################*/}
          {/* #############################      Form submission   #############################*/}
          <div className={css(styles.promoWrapper)}>
            <form onSubmit={this.handleSubmit}>
              <table style={{ width: '100%' }}>
                <tr>
                  <td>
                    <label>
                      Have a promo code? Enter code here:
                      <br />
                      <input
                        className={css(styles.placeholderStyles)}
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="Enter code"
                      />
                    </label>
                  </td>
                  <td className={css(styles.arrowWrap)}>
                    {' '}
                    <input
                      type="submit"
                      value=""
                      className={css(styles.submitBtn)}
                    />
                  </td>
                </tr>
              </table>
            </form>
          </div>

          {/* #############################      Form submission   #############################*/}
          {/* #############################      Summmary table   #############################*/}
          <table className={css(styles.summaryTable)}>
            <tr>
              <td className={css(styles.sumRowTop)}>Subtotal</td>
              <td className={css(styles.sumRowTopRight)}>as</td>
            </tr>
            <tr>
              <td className={css(styles.middleRows)}>Shipping</td>
              <td className={css(styles.middleRowsRight)}>as</td>
            </tr>
            <tr>
              <td className={css(styles.middleRows)}>Tax included 25% </td>
              <td className={css(styles.middleRowsRight)}>as</td>
            </tr>
            <tr>
              <td className={css(styles.sumRowBottom)}>Total</td>
              <td className={css(styles.sumRowBottomRight)}>as</td>
            </tr>
          </table>
        </div>
        <br />
        <br />
        <br />
      </Layout>
    )
  }
}

CheckOut.proptypes = {
  location: PropTypes.object.isRequired,
}

export default CheckOut
