import React from 'react'
import { map } from 'lodash'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import Layout from '../layouts'
import { navigate } from 'gatsby'
import * as styles from '../components/IndexPageStyles/ThankYouNoteStyles/styles'

class ThankYouNote extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      order: {},
      items: [],
      clientName: '',
      attempts: 0
    }

    this.fetchOrder = this.fetchOrder.bind(this)
  }
  fetchOrder() {
    const { attempts } = this.state
    const { location } = this.props
    const { token } = location && location.state && location.state.order
    fetch(`/.netlify/functions/get-order?token=${token}`)
      .then(response => {
        return response.json()
      })
      .then(order => {
        const { items } = order
        const { name } = order && order.billingAddress
        this.setState({
          order,
          items,
          clientName: name
        })
      })
      .catch(() => {
        if (attempts < 5) {
          this.setState({
            attempts: attempts + 1
          }, this.fetchOrder())
        }
      })
  }
  componentDidMount() {
    this.fetchOrder()

  }
  render() {
    const { items, clientName, order } = this.state
    const { location } = this.props
    const { summary, rebateAmount, shippingFees } = order
    if (!clientName) {
      return null
    }
    return (
      <Layout location={location} hideMenu={true}>
        <div className={css(styles.thankYouWrapper)}>
          <div className={css(styles.clientName)}>Hey {clientName},</div>
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

          {
            map(items, (item, key) => {

              return (
                <table key={key} className={css(styles.tableStyles)}>
                  <tbody>
                    <tr>
                      <td className={css(styles.rowStyles)}>
                        <img
                          className={css(styles.imageWrap)}
                          src={item.image}
                          alt="product image"
                        />
                      </td>

                      <td className={css(styles.rowStyles)}>{item.name}</td>
                      <td className={css(styles.rowStylesCenter)}>{item.quantity}</td>

                      <td className={css(styles.rowStylesRight)}>{item.unitPrice} &#8364;</td>
                    </tr>
                  </tbody>
                </table>
              )
            })
          }

          {/* #############################     SUMMARY TABLE   #############################*/}
          {
            summary ?
              <table className={css(styles.thanksSummaryTable)}>
                <tbody>
                  <tr>
                    <td className={css(styles.thanksSumRowTop)}>Subtotal</td>
                    <td className={css(styles.thanksSumRowTopRight)}>{summary.taxableTotal} &#8364;</td>
                  </tr>
                  <tr>
                    <td className={css(styles.middleRows)}>Shipping</td>
                    <td className={css(styles.middleRowsRight)}>{shippingFees} &#8364;</td>
                  </tr>
                  {
                    rebateAmount > 0 ?
                      <tr>
                        <td className={css(styles.middleRows)}>Discount</td>
                        <td className={css(styles.middleRowsRight)}>- {rebateAmount} &#8364;</td>
                      </tr>
                      :
                      null
                  }
                  <tr>
                    <td className={css(styles.sumRowBottom)}>Total</td>
                    <td className={css(styles.sumRowBottomRight)}>{summary.total} &#8364;</td>
                  </tr>
                </tbody>
              </table>
              :
              null
          }
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
}

ThankYouNote.proptypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default ThankYouNote
