import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import { navigate } from 'gatsby'
import * as styles from './styles'
import prImgDesk from '../../images/D_product_thumbnail_checkout_page.jpg'

class Cart extends React.Component {
  constructor() {
    super()

    this.state = {
      name: 'Alia, Pack A',
      price: 333,
      activeClass: css(styles.cartWrapper),
      counter: 1,
    }

    this.hideCart = this.hideCart.bind(this)
    this.add = this.add.bind(this)
    this.substract = this.substract.bind(this)
  }

  add() {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 }
    })
  }

  substract() {
    this.setState(prevState => {
      return { counter: prevState.counter - 1 }
    })
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
    const showElements = this.props.showElements
    let counterValue = this.state.counter
    return (
      <div
        className={
          showElements === false
            ? this.state.activeClass
            : css(styles.cartWrapperForCheckOut)
        }
      >
        {/* *********************** HEADER ************************* */}
        {showElements === false ? (
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
                    <p style={{ textAlign: 'right', margin: 0 }}>
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

        {/* *********************** HEADER END ************************* */}

        {counterValue > 0 ? (
          <table className={css(styles.tableStyles)}>
            <tbody>
              <tr>
                {showElements && (
                  <td className={css(styles.rowStyles)}>
                    <img
                      className={css(styles.imageWrap)}
                      src={prImgDesk}
                      alt="product image"
                    />
                  </td>
                )}
                <td className={css(styles.rowStyles)}>{this.state.name}</td>
                <td className={css(styles.rowStylesRight)}>
                  {counterValue < 2 ? (
                    <button
                      className={css(styles.cardBtn)}
                      onClick={this.substract}
                    >
                      &times;
                    </button>
                  ) : (
                    <button
                      className={css(styles.cardBtn)}
                      onClick={this.substract}
                    >
                      -
                    </button>
                  )}
                  <span className={css(styles.numWrap)}>
                    {this.state.counter}
                  </span>
                  <button className={css(styles.cardBtn)} onClick={this.add}>
                    +
                  </button>
                </td>

                <td className={css(styles.rowStylesRight)}>
                  {this.state.counter * this.state.price} &#8364;
                </td>
              </tr>
            </tbody>
          </table>
        ) : null}

        {/* #######################################   BOTTOM PART   ##################################### */}

        {showElements === false ? (
          <div
            style={{
              position: 'absolute',
              width: '100%',
              bottom: 0,
              paddingRight: 58,
            }}
          >
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
                      Shipping & taxes calculated at checkout <br />
                    </td>
                    <td
                      style={{ textAlign: 'right', verticalAlign: 'initial' }}
                    >
                      {this.state.counter * this.state.price}
                    </td>
                  </tr>
                </tbody>
              </table>

              <button
                className={css(styles.checkOutBtn)}
                onClick={() => navigate('/checkout/')}
                role="link"
                tabIndex="0"
              >
                CHECKOUT
              </button>
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}
Cart.propTypes = {
  showElements: PropTypes.bool.isRequired,
}

export default Cart
