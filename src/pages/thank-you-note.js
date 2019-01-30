import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import Layout from '../layouts'
import { navigate } from 'gatsby'
import * as styles from '../components/IndexPageStyles/ThankYouNoteStyles/styles'
import prImgDesk from '../images/D_product_thumbnail_checkout_page.jpg'

const ThankYouNote = () => {
  return (
    <Layout hideMenu={true}>
      <div className={css(styles.thankYouWrapper)}>
        <div className={css(styles.clientName)}>Hey {'<First name>'},</div>
        <div className={css(styles.thankYouText)}>
          Wanted to take a second and thank you for shopping with us. If there
          is anything else we can do for you, please do not be shy to reach out.
          <br />
          <br />
          Thank you again!
          <br />
          <br /> HAHA studio
        </div>

        <div className={css(styles.orderConfirmation)}>
          <p>Order Confirmation</p>
        </div>

        <table className={css(styles.tableStyles)}>
          <tbody>
            <tr>
              <td className={css(styles.rowStyles)}>
                <img
                  className={css(styles.imageWrap)}
                  src={prImgDesk}
                  alt="product image"
                />
              </td>

              <td className={css(styles.rowStyles)}>Alia, Pack A</td>
              <td className={css(styles.rowStylesCenter)}>1</td>

              <td className={css(styles.rowStylesRight)}>5000 &#8364;</td>
            </tr>
          </tbody>
        </table>

        <table className={css(styles.tableStyles)}>
          <tbody>
            <tr>
              <td className={css(styles.rowStyles)}>
                <img
                  className={css(styles.imageWrap)}
                  src={prImgDesk}
                  alt="product image"
                />
              </td>

              <td className={css(styles.rowStyles)}>Alia, Pack A</td>
              <td className={css(styles.rowStylesCenter)}>1</td>

              <td className={css(styles.rowStylesRight)}>5000 &#8364;</td>
            </tr>
          </tbody>
        </table>
        <table className={css(styles.tableStyles)}>
          <tbody>
            <tr>
              <td className={css(styles.rowStyles)}>
                <img
                  className={css(styles.imageWrap)}
                  src={prImgDesk}
                  alt="product image"
                />
              </td>

              <td className={css(styles.rowStyles)}>Alia, Pack A</td>
              <td className={css(styles.rowStylesCenter)}>1</td>

              <td className={css(styles.rowStylesRight)}>5000 &#8364;</td>
            </tr>
          </tbody>
        </table>

        {/* #############################     SUMMARY TABLE   #############################*/}

        <table className={css(styles.thanksSummaryTable)}>
          <tbody>
            <tr>
              <td className={css(styles.thanksSumRowTop)}>Subtotal</td>
              <td className={css(styles.thanksSumRowTopRight)}>35 &#8364;</td>
            </tr>
            <tr>
              <td className={css(styles.middleRows)}>Shipping</td>
              <td className={css(styles.middleRowsRight)}>25 &#8364;</td>
            </tr>
            <tr>
              <td className={css(styles.middleRows)}>Tax included 25% </td>
              <td className={css(styles.middleRowsRight)}>55 &#8364;</td>
            </tr>
            <tr>
              <td className={css(styles.sumRowBottom)}>Total</td>
              <td className={css(styles.sumRowBottomRight)}>55 &#8364;</td>
            </tr>
          </tbody>
        </table>
        <button
          className={css(styles.backToHomeBtn)}
          onClick={() => navigate('/selected/')}
        >
          BACK TO HOME PAGE
        </button>
      </div>
    </Layout>
  )
}

ThankYouNote.proptypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default ThankYouNote
