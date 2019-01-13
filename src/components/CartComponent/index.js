import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import { navigate } from 'gatsby'
import * as styles from './styles'
import prImgDesk from '../../images/D_product_thumbnail_checkout_page.jpg'

const isChkOut = location.pathname
class Cart extends React.Component {
  constructor() {
    super()

    this.state = {
      name: 'Alia, Pack A',
      price: 333,
      activeClass: css(styles.cartWrapper),
    }

    this.hideCart = this.hideCart.bind(this)
  }

  hideCart() {
    this.props.hideCart()
  }

  componentDidMount() {
    window.addEventListener('onmousedown', this.hideCart)
  }

  componentWillUnmount() {
    window.removeEventListener('onmousedown', this.hideCart)
  }

  render() {
    return (
      <div
        className={
          isChkOut !== '/check-out/'
            ? css(styles.cartWrapper)
            : css(styles.cartWrapperForCheckOut)
        }
      >
        {/* *********************** HEADER ************************* */}
        {isChkOut !== '/check-out/' ? (
          <div className={css(styles.cartHeader)}>
            <table style={{ width: '100%' }}>
              <tbody>
                <tr>
                  <td>
                    <p
                      style={{
                        margin: 0,
                        padding: '29px 0px',
                        textAlign: 'left',
                      }}
                    >
                      CART
                    </p>
                  </td>
                  <td>
                    <p style={{ textAlign: 'right' }}>
                      <button
                        className={css(styles.hideBtn)}
                        onClick={this.hideCart}
                      />
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : null}

        {/* *********************** HEADER ************************* */}
        <table className={css(styles.tableStyles)}>
          <tbody>
            <tr>
              {isChkOut === '/check-out/' ? (
                <td className={css(styles.rowStyles)}>
                  <img
                    className={css(styles.imageWrap)}
                    src={prImgDesk}
                    alt="product image"
                  />
                </td>
              ) : null}
              <td className={css(styles.rowStyles)}>{this.state.name}</td>
              <td className={css(styles.rowStylesRight)}>
                <button className={css(styles.cardBtn)}>-</button>
                <span className={css(styles.numWrap)}>11</span>
                <button className={css(styles.cardBtn)}>+</button>
              </td>

              <td className={css(styles.rowStylesRight)}>
                {this.state.price} &#8364;
              </td>
            </tr>
          </tbody>
        </table>

        {isChkOut !== '/check-out/' ? (
          <div className={css(styles.subtotalWrapper)}>
            <table style={{ width: '100%' }}>
              <tbody>
                <tr>
                  <td
                    style={{
                      textAlign: 'left',
                    }}
                  >
                    Subtotal
                    <br /> <br /> <br />
                    Shipping & taxes calculated at checkout
                  </td>
                  <td style={{ textAlign: 'right', verticalAlign: 'initial' }}>
                    value
                  </td>
                </tr>
              </tbody>
            </table>

            <button
              className={css(styles.checkOutBtn)}
              onClick={() => navigate('/check-out/')}
              role="link"
              tabIndex="0"
            >
              CHECKOUT
            </button>
          </div>
        ) : null}
      </div>
    )
  }
}

export default Cart
