import React from 'react'
import { map } from 'lodash'
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
      items: [],
    }

    this.hideCart = this.hideCart.bind(this)
    this.add = this.add.bind(this)
    this.substract = this.substract.bind(this)
    this.refreshItems = this.refreshItems.bind(this)
  }

  add(id) {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 }
    })
  }

  substract(id) {
    this.setState(prevState => {
      return { counter: prevState.counter - 1 }
    })
  }

  hideCart() {
    this.props.hideCart()
  }
  refreshItems() {
    this.setState({
      items: window.Snipcart.api.items.all()
    })
  }

  componentDidMount() {
    window.addEventListener('onmousedown', this.hideCart)
    const refreshItems = this.refreshItems

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      refreshItems()

      document.addEventListener('snipcart.ready', function() {
        refreshItems()
      })
    }
  }

  componentWillUnmount() {
    window.removeEventListener('onmousedown', this.hideCart)
  }

  render() {
    const showElements = this.props.showElements
    let counterValue = this.state.counter
    const { items } = this.state
    console.log('items', items);
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

        {/* *********************** HEADER END ************************* */}


        <table className={css(styles.tableStyles)}>
          <tbody>
            {
              map(items, item => {
                console.log('item', item);
                return (
                  <tr key={item.id}>
                    {showElements && (
                      <td className={css(styles.rowStyles)}>
                        <img
                          className={css(styles.imageWrap)}
                          src={item.image}
                          alt={item.name}
                        />
                      </td>
                    )}
                    <td className={css(styles.rowStyles)}>{item.name}</td>
                    {
                      showElements ?
                        <td className={css(styles.rowStylesRight)}>
                          <span>
                            &times;{item.quantity}
                          </span>
                        </td>
                        :
                        <td className={css(styles.rowStylesRight)}>
                          {counterValue < 2 ? (
                            <button
                              className={css(styles.cardBtn)}
                              onClick={this.substract(item.id)}
                            >
                              &times;
                            </button>
                          ) : (
                            <button
                              className={css(styles.cardBtn)}
                              onClick={() => this.substract(item.id)}
                            >
                              -
                            </button>
                          )}
                          <span className={css(styles.numWrap)}>
                            {item.quantity}
                          </span>
                          <button className={css(styles.cardBtn)} onClick={() => this.add(item.id)}>
                            +
                          </button>
                        </td>
                    }

                    <td className={css(styles.rowStylesRight)}>
                      {this.state.counter * this.state.price} &#8364;
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>


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
        ) : null}
      </div>
    )
  }
}
Cart.propTypes = {
  showElements: PropTypes.bool.isRequired,
  hideCart: PropTypes.func.isRequired,
}

export default Cart
