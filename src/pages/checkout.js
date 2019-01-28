import React from 'react'
import { OverlayTrigger, Tooltip, Modal, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { isEmpty, lowerCase } from 'lodash'
import Layout from '../layouts'
import { css } from 'emotion'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import * as styles from '../components/IndexPageStyles/CheckOutPageStyles/styles'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Cart from '../components/CartComponent/index'
import MaskedInput from 'react-text-mask'
import Loader from 'react-loader-spinner'
import { navigate } from 'gatsby'

const date = new Date()
const year = date.getFullYear()

const tooltip = (
  <Tooltip id="tooltip">Outside EU? Please contact us for tax refund!</Tooltip>
)

class CheckOut extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      total: 0,
      subTotal: 0,
      discount: 0,
      shipping: 0,
      processingPayment: false,
      shippingAgreement: false,
      shippingAgreementModal: false,
      values: {},
    }

    this.connect = this.connect.bind(this)
    this.extraCost = this.extraCost.bind(this)
    this.shippingCosts = this.shippingCosts.bind(this)
  }

  extraCost(country) {
    let extraCost = false
    if (lowerCase(country) !== 'sweden') {
      extraCost = true
    }
    return extraCost
  }

  shippingCosts(values, isValid) {
    if (!isValid) {
      return
    }

    let shippingCost = false
    if (values.shiptoanotheradress) {
      shippingCost = this.extraCost(values.deliveryCountry)
    } else {
      shippingCost = this.extraCost(values.country)
    }

    if (shippingCost) {
      this.setState({
        shippingAgreementModal: true,
      })
    } else {
      this.connect()
    }
  }

  connect() {
    this.setState({ processingPayment: true })
    if (typeof window !== 'undefined') {
      window.Snipcart.api.modal.show()
    }
  }
  componentDidMount() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      window.Snipcart.subscribe('order.completed', order => {
        console.log('items', order)
      })

      const cart = window.Snipcart.api.cart.get()
      this.setState({
        subTotal: cart && cart.itemsTotal,
        total: cart && cart.total,
        cart,
      })

      const discounts = window.Snipcart.api.discounts.all()

      if (!isEmpty(discounts)) {
        this.setState({
          discount: discounts[0].amountSaved,
        })
      }

      document.addEventListener('snipcart.ready', () => {
        const carts = window.Snipcart.api.cart.get()
        this.setState({
          subTotal: carts && carts.itemsTotal,
          total: carts && carts.total,
          cart: carts,
        })

        const discountss = window.Snipcart.api.discounts.all()

        if (!isEmpty(discountss)) {
          this.setState({
            discount: discountss[0].amountSaved,
          })
        }
      })

      window.Snipcart.subscribe('page.changed', page => {
        const { values } = this.state
        if (page === 'cart-content') {
          window.jQuery('.js-next').click()
        }

        if (page === 'billing-address') {
          // Billing address
          this.state.values.shiptoanotheradress
            ? window
                .jQuery('#snip-shippingSameAsBilling')
                .prop('checked', false)
            : window.jQuery('#snip-shippingSameAsBilling').prop('checked', true)

          window
            .jQuery('#snip-name')
            .val(`${values.firstName} ${values.lastName}`)
          window.jQuery('#snip-address1').val(values.adressLine1)
          window.jQuery('#snip-address2').val(values.adressLine2)
          window.jQuery('#snip-city').val(values.city)
          window
            .jQuery('#snip-country option')
            .filter(() => {
              return window.jQuery(this).text() === values.country
            })
            .prop('selected', true)
          window.jQuery('#snip-postalCode').val(values.zipCode)
          window.jQuery('#snip-email').val(values.email)
          window.jQuery('#snip-phone').val(values.phoneNumber)
          setTimeout(function() {
            window.jQuery('#snipcart-next').click()
          }, 1000)
        }

        if (page === 'shipping-address') {
          if (values.shiptoanotheradress) {
            window
              .jQuery('#snip-name')
              .val(`${values.deliveryFirstName} ${values.deliveryLastName}`)
            window.jQuery('#snip-address1').val(values.deliveryAdressLine1)
            window.jQuery('#snip-city').val(values.deliveryCity)
            window.jQuery('#snip-country').val(values.deliveryCountry)
            window
              .jQuery('#snip-country option')
              .filter(function() {
                return window.jQuery(this).text() === values.deliveryCountry
              })
              .prop('selected', true)
            window.jQuery('#snip-postalCode').val(values.deliveryZipCode)
            window.jQuery('#snip-phone').val(values.phoneNumber)
            window.jQuery('#snipcart-next').click()
          }
        }

        if (page === 'shipping-method') {
          window.jQuery('#snipcart-next').click()
        }

        if (page === 'payment-method') {
          //  Card Details
          window.jQuery('#snip-type').val('visa')
          window.jQuery('#snip-ownerName').val('Glenn Quagmire')
          window.jQuery('#snip-number').val('4242424242424242')
          window.jQuery('#snip-cvc').val('345')
          window.jQuery('#snip-expirationMonth').val('5')
          window.jQuery('#snip-expirationYear').val('2022')

          window.jQuery('#snipcart-paymentmethod-pay').click()
        }

        if (page === 'order-confirm') {
          window.jQuery('.js-submit').click()
        }
      })
    }
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.values !== prevProps.values) {
      this.setState({ values: this.props.values })
    }
  }

  render() {
    const { data, values, errors, touched, isSubmitting, isValid } = this.props
    let { typed } = this.props

    return (
      <Layout hideMenu={true}>
        {' '}
        <Modal
          bsSize="small"
          show={this.state.shippingAgreementModal}
          onHide={() => {
            this.setState({
              shippingAgreementModal: false,
            })
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Shipping Costs: 10€</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <br />
            <p className={css(styles.paymentModalTitle)}>
              Total: {this.state.total + 10}€
            </p>
            <br />
          </Modal.Body>
          <Modal.Footer>
            <Button
              bsStyle="info"
              onClick={() => {
                this.setState({
                  shippingAgreementModal: false,
                })
                this.connect()
              }}
            >
              Continue
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal
          bsSize="small"
          show={this.state.processingPayment}
          onHide={() => {
            this.setState({
              processingPayment: false,
            })
          }}
        >
          <Modal.Body>
            <p className={css(styles.paymentModalTitle)}>Processing Payment</p>
            <br />
            <div className={css(styles.paymentModalLoader)}>
              <Loader type="Grid" color="#000" height="50" width="50" />
            </div>
            <br />
          </Modal.Body>
        </Modal>
        <div className={css(styles.pageWrapper)}>
          <div className={css(styles.cartWrapper)}>
            <div className={css(styles.brand)}>
              <div className={css(styles.logoWrap)}>
                <Link to="/selected/">
                  <Img fluid={data.logoimg.childImageSharp.fluid} />
                </Link>
              </div>
              <div className={css(styles.shopWrap)}>
                <Link to="/shop/" className={css(styles.shopLink)}>
                  shop
                </Link>
              </div>
            </div>

            <div className={css(styles.headerStyles)}>
              <p>Order summary</p>
            </div>

            <Cart showElements={true} />

            {/* #############################    DISCOUNT SUBMISSION     #############################*/}

            <div className={css(styles.promoWrapper)}>
              <form
                onSubmit={event => {
                  event.preventDefault()
                  window.Snipcart.api.discounts
                    .applyDiscountCode(typed)
                    .then(appliedCode => {
                      const cart = window.Snipcart.api.cart.get()
                      this.setState({
                        total: cart && cart.total,
                        discount: appliedCode.amountSaved,
                      })
                    })
                    .fail(() => {
                      alert(
                        "Something went wrong when adding the discount code, are you sure it's a valid code?"
                      )
                    })
                }}
              >
                <table style={{ width: '100%' }}>
                  <tbody>
                    <tr>
                      <td>
                        <label className={css(styles.promoLabelStyles)}>
                          Have a promo code? Enter code here:
                          <br />
                          <input
                            className={css(styles.placeholderStyles)}
                            type="text"
                            value={typed}
                            onChange={event => {
                              typed = event.target.value
                            }}
                            placeholder="Enter code"
                          />
                        </label>
                      </td>
                      <td className={css(styles.arrowWrap)}>
                        <button
                          type="submit"
                          value=""
                          className={css(styles.submitBtn)}
                        >
                          &rarr;
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>

            {/* #############################     SUMMARY TABLE   #############################*/}

            <table className={css(styles.summaryTable)}>
              <tbody>
                {this.state.discount > 0 ? (
                  <React.Fragment>
                    <tr>
                      <td className={css(styles.sumRowTop)}>Subtotal</td>
                      <td className={css(styles.sumRowTopRight)}>
                        {this.state.total + this.state.discount} &#8364;
                      </td>
                    </tr>
                    <tr>
                      <td className={css(styles.middleRows)}>Discount</td>
                      <td className={css(styles.middleRowsRight)}>
                        - {this.state.discount} &#8364;
                      </td>
                    </tr>
                  </React.Fragment>
                ) : null}
                <tr>
                  <td className={css(styles.middleRows)}>Total</td>
                  <td className={css(styles.middleRowsRight)}>
                    {this.state.total} &#8364;
                  </td>
                </tr>
                <tr>
                  <td className={css(styles.sumRowBottom)}>
                    <OverlayTrigger placement="right" overlay={tooltip}>
                      <span>Tax included 25% </span>
                    </OverlayTrigger>
                  </td>
                  <td
                    className={css(styles.middleRowsRight.sumRowBottomRight)}
                  />
                </tr>
              </tbody>
            </table>
          </div>

          {/*########################## CLIENT FORM ################################*/}

          <div className={css(styles.clientFormWrapper)}>
            <div className={css(styles.shopWrapRight)}>
              <Link to="/shop/" className={css(styles.shopLink)}>
                shop
              </Link>
            </div>

            <div className={css(styles.ClientDetails)}>
              <p style={{ margin: 0 }}>Your details</p>

              <p className={css(styles.paragraph)}>
                Form is restricted to latin characters only
              </p>
            </div>
            <Form>
              <label className={css(styles.formLabels)}>
                First name
                <Field
                  type="text"
                  name="firstName"
                  className={css(styles.inputWrapper)}
                />
                {touched.firstName && errors.firstName && (
                  <div className={css(styles.errorStyles)}>
                    {errors.firstName}
                  </div>
                )}
              </label>
              <label className={css(styles.formLabels)}>
                Last name
                <Field
                  type="text"
                  name="lastName"
                  className={css(styles.inputWrapper)}
                />
                {touched.lastName && errors.lastName && (
                  <div className={css(styles.errorStyles)}>
                    {errors.lastName}
                  </div>
                )}
              </label>
              <label className={css(styles.formLabels)}>
                Email
                <Field
                  type="text"
                  name="email"
                  className={css(styles.inputWrapper)}
                />
                {touched.email && errors.email && (
                  <div className={css(styles.errorStyles)}>{errors.email}</div>
                )}
              </label>
              <label className={css(styles.formLabels)}>
                Phone number
                <Field
                  type="tel"
                  name="phoneNumber"
                  render={({ field }) => {
                    return (
                      <MaskedInput
                        {...field}
                        mask={[
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                        ]}
                        guide={false}
                        keepCharPositions={false}
                        className={css(styles.inputWrapper)}
                      />
                    )
                  }}
                />
                {touched.phoneNumber && errors.phoneNumber && (
                  <div className={css(styles.errorStyles)}>
                    {errors.phoneNumber}
                  </div>
                )}
              </label>
              <label className={css(styles.formLabels)}>
                Address line 1
                <Field
                  type="text"
                  name="adressLine1"
                  className={css(styles.inputWrapper)}
                />
                {touched.adressLine1 && errors.adressLine1 && (
                  <div className={css(styles.errorStyles)}>
                    {errors.adressLine1}
                  </div>
                )}
              </label>
              <label className={css(styles.formLabels)}>
                Address line 2
                <Field
                  type="text"
                  name="adressLine2"
                  className={css(styles.inputWrapper)}
                />
                {touched.adressLine2 && errors.adressLine2 && (
                  <div className={css(styles.errorStyles)}>
                    {errors.adressLine2}
                  </div>
                )}
              </label>
              <label className={css(styles.halfWidthFormsCenter)}>
                City
                <Field
                  type="text"
                  name="city"
                  className={css(styles.halfWidthFormsInputs)}
                />
                {touched.city && errors.city && (
                  <div className={css(styles.errorStyles)}>{errors.city}</div>
                )}
              </label>
              <label className={css(styles.halfWidthForms)}>
                Zip code
                <Field
                  type="text"
                  name="zipCode"
                  className={css(styles.halfWidthFormsInputs)}
                />
                {touched.zipCode && errors.zipCode && (
                  <div className={css(styles.errorStyles)}>
                    {errors.zipCode}
                  </div>
                )}
              </label>
              <label className={css(styles.formLabels)}>
                Country
                <Field
                  type="text"
                  name="country"
                  className={css(styles.inputWrapper)}
                />
                {touched.country && errors.country && (
                  <div className={css(styles.errorStyles)}>
                    {errors.country}
                  </div>
                )}
              </label>

              {/*####################### CHECK BOX HERE  ##################*/}

              <label className={css(styles.checkBox)}>
                <Field
                  style={{ visibility: 'hidden' }}
                  id="chk"
                  type="checkbox"
                  name="shiptoanotheradress"
                  checked={values.shiptoanotheradress}
                />
                <div className={css(styles.customCheckBox)}>
                  {values.shiptoanotheradress ? (
                    <p style={{ lineHeight: 0.7, fontSize: '22px' }}>
                      &#10004;
                    </p>
                  ) : null}
                </div>
                Ship to another adress?
              </label>

              {/*####################### END here##################*/}

              {/*#######################  ANOTHER ADDRESS FORM  ##################*/}

              <div
                className={
                  values.shiptoanotheradress
                    ? css(styles.deliveryForm)
                    : css(styles.deliveryFormHidden)
                }
              >
                <div className={css(styles.paddingWrap)} />
                <label className={css(styles.formLabels)}>
                  First name
                  <Field
                    type="text"
                    name="deliveryFirstName"
                    className={css(styles.inputWrapper)}
                  />
                  {touched.deliveryFirstName && errors.deliveryFirstName && (
                    <div className={css(styles.errorStyles)}>
                      {errors.deliveryFirstName}
                    </div>
                  )}
                </label>
                <label className={css(styles.formLabels)}>
                  Last name
                  <Field
                    type="text"
                    name="deliveryLastName"
                    className={css(styles.inputWrapper)}
                  />
                  {touched.deliveryLastName && errors.deliveryLastName && (
                    <div className={css(styles.errorStyles)}>
                      {errors.deliveryLastName}
                    </div>
                  )}
                </label>

                <label className={css(styles.formLabels)}>
                  Address line 1
                  <Field
                    type="text"
                    name="deliveryAdressLine1"
                    className={css(styles.inputWrapper)}
                  />
                  {touched.deliveryAdressLine1 &&
                    errors.deliveryAdressLine1 && (
                      <div className={css(styles.errorStyles)}>
                        {errors.deliveryAdressLine1}
                      </div>
                    )}
                </label>
                <label className={css(styles.formLabels)}>
                  Address line 2
                  <Field
                    type="text"
                    name="deliveryAdressLine2"
                    className={css(styles.inputWrapper)}
                  />
                  {touched.deliveryAdressLine2 &&
                    errors.deliveryAdressLine2 && (
                      <div className={css(styles.errorStyles)}>
                        {errors.deliveryAdressLine2}
                      </div>
                    )}
                </label>
                <label className={css(styles.halfWidthFormsCenter)}>
                  City
                  <Field
                    type="text"
                    name="deliveryCity"
                    className={css(styles.halfWidthFormsInputs)}
                  />
                  {touched.deliveryCity && errors.deliveryCity && (
                    <div className={css(styles.errorStyles)}>
                      {errors.deliveryCity}
                    </div>
                  )}
                </label>
                <label className={css(styles.halfWidthForms)}>
                  Zip code
                  <Field
                    type="text"
                    name="deliveryZipCode"
                    className={css(styles.halfWidthFormsInputs)}
                  />
                  {touched.deliveryZipCode && errors.deliveryZipCode && (
                    <div className={css(styles.errorStyles)}>
                      {errors.deliveryZipCode}
                    </div>
                  )}
                </label>
                <label className={css(styles.formLabels)}>
                  Country
                  <Field
                    type="text"
                    name="deliveryCountry"
                    className={css(styles.inputWrapper)}
                  />
                  {touched.deliveryCountry && errors.deliveryCountry && (
                    <div className={css(styles.errorStyles)}>
                      {errors.deliveryCountry}
                    </div>
                  )}
                </label>
              </div>

              {/*#######################       END            ##################*/}

              <div className={css(styles.cardInfoWrap)}>
                <p>Card details</p>

                <label className={css(styles.formLabels)}>
                  Card number
                  <Field
                    type="text"
                    name="cardNumber"
                    render={({ field }) => {
                      return (
                        <MaskedInput
                          {...field}
                          mask={[
                            /\d/,
                            /\d/,
                            /\d/,
                            /\d/,
                            ' ',
                            /\d/,
                            /\d/,
                            /\d/,
                            /\d/,
                            ' ',
                            /\d/,
                            /\d/,
                            /\d/,
                            /\d/,
                            ' ',
                            /\d/,
                            /\d/,
                            /\d/,
                            /\d/,
                          ]}
                          guide={false}
                          keepCharPositions={false}
                          className={css(styles.inputWrapper)}
                        />
                      )
                    }}
                  />
                  {touched.cardNumber && errors.cardNumber && (
                    <div className={css(styles.errorStyles)}>
                      {errors.cardNumber}
                    </div>
                  )}
                </label>
                <label className={css(styles.formLabels)}>
                  Name on Card
                  <Field
                    type="text"
                    name="nameOnCard"
                    className={css(styles.inputWrapper)}
                  />
                  {touched.nameOnCard && errors.nameOnCard && (
                    <div className={css(styles.errorStyles)}>
                      {errors.nameOnCard}
                    </div>
                  )}
                </label>
                <label className={css(styles.halfWidthDateCenter)}>
                  Expiry year
                  <Field
                    component="select"
                    name="expiryYear"
                    className={css(styles.halfWidthDateInputs)}
                  >
                    <option value={year}>{year}</option>
                    <option value={year + 1}>{year + 1}</option>
                    <option value={year + 2}>{year + 2}</option>
                    <option value={year + 3}>{year + 3}</option>
                    <option value={year + 4}>{year + 4}</option>
                    <option value={year + 5}>{year + 5}</option>
                    <option value={year + 6}>{year + 6}</option>
                    <option value={year + 7}>{year + 7}</option>
                    <option value={year + 8}>{year + 8}</option>
                    <option value={year + 9}>{year + 9}</option>
                    <option value={year + 10}>{year + 10}</option>
                    <option value={year + 11}>{year + 11}</option>
                  </Field>
                </label>
                <label className={css(styles.halfWidthDate)}>
                  Expiry month
                  <Field
                    component="select"
                    name="expiryMonth"
                    className={css(styles.halfWidthDateInputs)}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </Field>
                </label>
                <label className={css(styles.halfWidthFormsCVC)}>
                  CVC
                  <Field
                    type="text"
                    name="CVC"
                    render={({ field }) => {
                      return (
                        <MaskedInput
                          {...field}
                          mask={[/\d/, /\d/, /\d/, /\d/]}
                          guide={false}
                          keepCharPositions={false}
                          className={css(styles.halfWidthFormsInputs)}
                        />
                      )
                    }}
                  />
                  {touched.CVC && errors.CVC && (
                    <div className={css(styles.errorStyles)}>{errors.CVC}</div>
                  )}
                </label>
              </div>

              <div style={{ float: 'left', width: '100%' }}>
                {/* ####################################      BUTTON IS HERE         ################################ */}

                <button
                  className={css(styles.purchaseBtn)}
                  type="submit"
                  disabled={isSubmitting}
                  onClick={() => this.shippingCosts(values, isValid)}
                >
                  COMPLETE PURCHASE
                </button>
                <p className={css(styles.paragraphBottom)}>
                  By completing your purchase you accept to the{' '}
                  <Link
                    to="/terms-licenses/"
                    className={css(styles.bottomLinkDecoration)}
                  >
                    <u>terms and conditions</u>
                  </Link>
                </p>
              </div>
            </Form>
          </div>
        </div>{' '}
      </Layout>
    )
  }
}

CheckOut.proptypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

const FormikCheckOut = withFormik({
  mapPropsToValues({
    email,
    firstName,
    lastName,
    phoneNumber,
    adressLine1,
    adressLine2,
    city,
    zipCode,
    country,
    deliveryFirstName,
    deliveryLastName,
    deliveryAdressLine1,
    deliveryAdressLine2,
    deliveryCity,
    deliveryZipCode,
    deliveryCountry,
    shiptoanotheradress,
    cardNumber,
    nameOnCard,
    expiryYear,
    expiryMonth,
    CVC,
  }) {
    return {
      email: email || '',
      firstName: firstName || '',
      lastName: lastName || '',
      phoneNumber: phoneNumber || '',
      adressLine1: adressLine1 || '',
      adressLine2: adressLine2 || '',
      city: city || '',
      zipCode: zipCode || '',
      country: country || '',
      deliveryFirstName: deliveryFirstName || '',
      deliveryLastName: deliveryLastName || '',
      deliveryAdressLine1: deliveryAdressLine1 || '',
      deliveryAdressLine2: deliveryAdressLine2 || '',
      deliveryCity: deliveryCity || '',
      deliveryZipCode: deliveryZipCode || '',
      deliveryCountry: deliveryCountry || '',
      shiptoanotheradress: shiptoanotheradress || false,
      cardNumber: cardNumber || '',
      nameOnCard: nameOnCard || '',
      expiryYear: expiryYear || '2019',
      expiryMonth: expiryMonth || '01',
      CVC: CVC || '',
    }
  },
  validationSchema: Yup.object().shape({
    // ************************** BILLING ADDRESS

    email: Yup.string()
      .email('Email not valid!')
      .required('Email is required!'),
    firstName: Yup.string().required('First name is required!'),
    lastName: Yup.string().required('Last name is required!'),
    phoneNumber: Yup.number().required('Phone number is required!'),
    adressLine1: Yup.string().required('Adress is required!'),
    adressLine2: Yup.string(),
    city: Yup.string().required('Required!'),
    zipCode: Yup.string().required('Required!'),
    country: Yup.string().required('Country is required!'),
    shiptoanotheradress: Yup.boolean().notRequired(),

    // ************************ DELIVERY ADDRESS

    deliveryFirstName: Yup.string().when('shiptoanotheradress', {
      is: true,
      then: Yup.string().required('First name is required!'),
      otherwise: Yup.string().notRequired(),
    }),
    deliveryLastName: Yup.string().when('shiptoanotheradress', {
      is: true,
      then: Yup.string().required('Last name is required!'),
      otherwise: Yup.string().notRequired(),
    }),
    deliveryAdressLine1: Yup.string().when('shiptoanotheradress', {
      is: true,
      then: Yup.string().required('Address is required!'),
      otherwise: Yup.string().notRequired(),
    }),
    deliveryAdressLine2: Yup.string().notRequired(),
    deliveryCity: Yup.string().when('shiptoanotheradress', {
      is: true,
      then: Yup.string().required('Required!'),
      otherwise: Yup.string().notRequired(),
    }),
    deliveryZipCode: Yup.string().when('shiptoanotheradress', {
      is: true,
      then: Yup.string().required('Required!'),
      otherwise: Yup.string().notRequired(),
    }),
    deliveryCountry: Yup.string().when('shiptoanotheradress', {
      is: true,
      then: Yup.string().required('Country is required!'),
      otherwise: Yup.string().notRequired(),
    }),

    // *************************** CARD DETAILS

    cardNumber: Yup.string()
      .min(12, 'Minimum 12 digits')
      .required('Card number is required!'),
    nameOnCard: Yup.string().required('Name on card is required!'),
    CVC: Yup.string()
      .min(3, 'Minimum 3 digits')
      .max(4, 'Maximum 3 digits')
      .required('CVC is required!'),
  }),

  // ************************** HANDLE SUBMIT AND VALIDATION

  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      // resetForm()
      setSubmitting(false)
    }, 2000)
  },
})(CheckOut)

export default FormikCheckOut

export const query = graphql`
  query {
    logoimg: file(relativePath: { eq: "logo_large.png" }) {
      childImageSharp {
        fluid(maxWidth: 1060) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
