import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import { navigate } from 'gatsby'
import * as styles from '../components/IndexPageStyles/CheckOutPageStyles/styles'
import Cart from '../components/CartComponent/index'

const ThankYouNote = () => {
  return (
    <div className={css(styles.thankYouWrapper)}>
      <div className={css(styles.clientName)}>Hey {'<First name>'},</div>
      <div className={css(styles.thankYouText)}>
        Wanted to take a second and thank you for shopping with us. If there is
        anything else we can do for you, please do not be shy to reach out.
        <br />
        <br />
        Thank you again!
        <br />
        <br /> HAHA studio
      </div>

      <div className={css(styles.orderConfirmation)}>
        <p>Order Confirmation</p>
      </div>

      <Cart showElements={true} />
      <Cart showElements={true} />
      <Cart showElements={true} />

      {/* #############################     SUMMARY TABLE   #############################*/}

      <table className={css(styles.summaryTable)}>
        <tbody>
          <tr>
            <td className={css(styles.sumRowTop)}>Subtotal</td>
            <td className={css(styles.sumRowTopRight)}>35 &#8364;</td>
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
  )
}

ThankYouNote.proptypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default ThankYouNote
