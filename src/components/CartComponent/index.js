import React from 'react'
import { map } from 'lodash'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import { navigate } from 'gatsby'
import * as styles from './styles'

class Cart extends React.Component {
  constructor() {
    super()

    this.state = {
      name: 'Alia, Pack A',
      price: 333,
      activeClass: css(styles.cartWrapper),
      counter: 1,
      items: [],
      total: 0,
    }

    this.hideCart = this.hideCart.bind(this)
    this.add = this.add.bind(this)
    this.substract = this.substract.bind(this)
    this.refreshItems = this.refreshItems.bind(this)
  }

  add(id, quantity) {
    const refreshItems = this.refreshItems
    window.Snipcart.api.items
      .update(id, {
        quantity: quantity + 1,
      })
      .then(() => {
        refreshItems()
      })
  }

  substract(id, quantity) {
    const refreshItems = this.refreshItems
    const hideCart = this.hideCart

    quantity === 1
      ? window.Snipcart.api.items.remove(id).then(() => {
          refreshItems()
          window.Snipcart.api.items.count() === 0 ? hideCart() : null
        })
      : window.Snipcart.api.items
          .update(id, {
            quantity: quantity - 1,
          })
          .then(() => {
            refreshItems()
          })
  }

  hideCart() {
    this.props.hideCart()
  }
  refreshItems() {
    const { setItemsCount } = this.props

    if (typeof setItemsCount !== 'undefined') {
      setItemsCount()
    }
    this.setState({
      items: window.Snipcart.api.items.all(),
    })
  }

  componentDidMount() {
    window.addEventListener('onmousedown', this.hideCart)
    const refreshItems = this.refreshItems

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      refreshItems()

      const cart = window.Snipcart.api.cart.get()
      this.setState({
        total: cart && cart.total,
      })

      document.addEventListener('snipcart.ready', () => {
        refreshItems()

        const carts = window.Snipcart.api.cart.get()
        this.setState({
          total: carts && carts.total,
        })
      })

      window.Snipcart.subscribe('item.added', () => {
        refreshItems()
        const cart_d = window.Snipcart.api.cart.get()
        this.setState({
          total: cart_d && cart_d.total,
        })
      })
      window.Snipcart.subscribe('item.removed', () => {
        refreshItems()
        const cart_b = window.Snipcart.api.cart.get()
        this.setState({
          total: cart_b && cart_b.total,
        })
      })
      window.Snipcart.subscribe('item.updated', () => {
        refreshItems()
        const cart_c = window.Snipcart.api.cart.get()
        this.setState({
          total: cart_c && cart_c.total,
        })
      })
    }
  }

  componentWillUnmount() {
    window.removeEventListener('onmousedown', this.hideCart)
  }

  render() {
    const { showElements } = this.props
    const { items, total } = this.state
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

        <div
          className={`${css(styles.tableStyles)} ${
            showElements ? css(styles.checkoutTableStyles) : null
          }`}
        >
          {map(items, item => {
            return (
              <div key={item.id} className={css(styles.flexRows)}>
                {showElements && (
                  <span className={css(styles.imageContainer)}>
                    <img
                      className={css(styles.imageWrap)}
                      src={item.image}
                      alt={item.name}
                    />
                  </span>
                )}
                <span style={{ width: '40%' }}>{item.name}</span>
                {showElements ? (
                  <span className={css(styles.rowStyles)}>
                    &times;{item.quantity}
                  </span>
                ) : (
                  <span className={css(styles.rowStylesRight)}>
                    {item.quantity === 1 ? (
                      <button
                        className={css(styles.cardBtn)}
                        onClick={() => this.substract(item.id, item.quantity)}
                      >
                        &times;
                      </button>
                    ) : (
                      <button
                        className={css(styles.cardBtn)}
                        onClick={() => this.substract(item.id, item.quantity)}
                      >
                        -
                      </button>
                    )}
                    <span className={css(styles.numWrap)}>{item.quantity}</span>
                    <button
                      className={css(styles.cardBtn)}
                      onClick={() => this.add(item.id, item.quantity)}
                    >
                      +
                    </button>
                  </span>
                )}

                <span className={css(styles.rowStylesRight)}>
                  {item.quantity * item.price} &#8364;
                </span>
              </div>
            )
          })}
        </div>
        <div style={{ marginTop: 'auto' }} />
        {/* #######################################   BOTTOM PART   ##################################### */}

        {showElements === false ? (
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
                  <td style={{ textAlign: 'right', verticalAlign: 'initial' }}>
                    {total} &#8364;
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
        ) : null}
      </div>
    )
  }
}
Cart.propTypes = {
  showElements: PropTypes.bool.isRequired,
  //hideCart: PropTypes.func.isRequired,
  setItemsCount: PropTypes.func,
}

export default Cart
