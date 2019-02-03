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
    console.log('country', country);
    let extraCost = false
    if (country !== 'SE') {
      extraCost = true
    }
    console.log('extraCost', extraCost);
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
    console.log('shippingCost', shippingCost);
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
        setTimeout(navigate('/thank-you-note/', { state: { order: order }}), 2000)
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
          window.jQuery('#snip-country option').val(values.country)
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
            window.jQuery('#snip-country option').val(values.deliveryCountry)
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
    const { location, data, values, errors, touched, isSubmitting, isValid } = this.props
    let { typed } = this.props

    return (
      <Layout location={location} hideMenu={true}>
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
              Total: {this.state.total + 10} €
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
            <div style={{ overflowY: 'auto' }}>
              <Cart showElements={true} />
            </div>

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
                        />
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
                        {this.state.total + this.state.discount} €
                      </td>
                    </tr>
                    <tr>
                      <td className={css(styles.middleRows)}>Discount</td>
                      <td className={css(styles.middleRowsRight)}>
                        - {this.state.discount} €
                      </td>
                    </tr>
                  </React.Fragment>
                ) : null}
                <tr>
                  <td className={css(styles.middleRows)}>Total</td>
                  <td className={css(styles.middleRowsRight)}>
                    {this.state.total} €
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
                  component="select"
                  name="country"
                  className={css(styles.fullWidthSelect)}
                >
                  <option value="SE">Sweden</option><option value="CA">Canada</option><option value="US">United States</option><option value="AF">Afghanistan</option><option value="AX">Åland</option><option value="AL">Albania</option><option value="DZ">Algeria</option><option value="AS">American Samoa</option><option value="AD">Andorra</option><option value="AO">Angola</option><option value="AI">Anguilla</option><option value="AQ">Antarctica</option><option value="AG">Antigua and Barbuda</option><option value="AR">Argentina</option><option value="AM">Armenia</option><option value="AW">Aruba</option><option value="AU">Australia</option><option value="AT">Austria</option><option value="AZ">Azerbaijan</option><option value="BS">Bahamas</option><option value="BH">Bahrain</option><option value="BD">Bangladesh</option><option value="BB">Barbados</option><option value="BY">Belarus</option><option value="BE">Belgium</option><option value="BZ">Belize</option><option value="BJ">Benin</option><option value="BM">Bermuda</option><option value="BT">Bhutan</option><option value="BO">Bolivia</option><option value="BQ">Bonaire</option><option value="BA">Bosnia and Herzegovina</option><option value="BW">Botswana</option><option value="BV">Bouvet Island</option><option value="BR">Brazil</option><option value="IO">British Indian Ocean Territory</option><option value="VG">British Virgin Islands</option><option value="BN">Brunei</option><option value="BG">Bulgaria</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option><option value="KH">Cambodia</option><option value="CM">Cameroon</option><option value="CV">Cape Verde</option><option value="KY">Cayman Islands</option><option value="CF">Central African Republic</option><option value="TD">Chad</option><option value="CL">Chile</option><option value="CN">China</option><option value="CX">Christmas Island</option><option value="CC">Cocos [Keeling] Islands</option><option value="CO">Colombia</option><option value="KM">Comoros</option><option value="CD">Congo</option><option value="CK">Cook Islands</option><option value="CR">Costa Rica</option><option value="HR">Croatia</option><option value="CU">Cuba</option><option value="CW">Curacao</option><option value="CY">Cyprus</option><option value="CZ">Czechia</option><option value="DK">Denmark</option><option value="DJ">Djibouti</option><option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="TL">East Timor</option><option value="EC">Ecuador</option><option value="EG">Egypt</option><option value="SV">El Salvador</option><option value="GQ">Equatorial Guinea</option><option value="ER">Eritrea</option><option value="EE">Estonia</option><option value="ET">Ethiopia</option><option value="FK">Falkland Islands</option><option value="FO">Faroe Islands</option><option value="FJ">Fiji</option><option value="FI">Finland</option><option value="FR">France</option><option value="GF">French Guiana</option><option value="PF">French Polynesia</option><option value="TF">French Southern Territories</option><option value="GA">Gabon</option><option value="GM">Gambia</option><option value="GE">Georgia</option><option value="DE">Germany</option><option value="GH">Ghana</option><option value="GI">Gibraltar</option><option value="GR">Greece</option><option value="GL">Greenland</option><option value="GD">Grenada</option><option value="GP">Guadeloupe</option><option value="GU">Guam</option><option value="GT">Guatemala</option><option value="GG">Guernsey</option><option value="GN">Guinea</option><option value="GW">Guinea-Bissau</option><option value="GY">Guyana</option><option value="HT">Haiti</option><option value="HM">Heard Island and McDonald Islands</option><option value="HN">Honduras</option><option value="HK">Hong Kong</option><option value="HU">Hungary</option><option value="IS">Iceland</option><option value="IN">India</option><option value="ID">Indonesia</option><option value="IR">Iran</option><option value="IQ">Iraq</option><option value="IE">Ireland</option><option value="IM">Isle of Man</option><option value="IL">Israel</option><option value="IT">Italy</option><option value="CI">Ivory Coast</option><option value="JM">Jamaica</option><option value="JP">Japan</option><option value="JE">Jersey</option><option value="JO">Jordan</option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option><option value="KI">Kiribati</option><option value="XK">Kosovo</option><option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Laos</option><option value="LV">Latvia</option><option value="LB">Lebanon</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LY">Libya</option><option value="LI">Liechtenstein</option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="MO">Macao</option><option value="MK">Macedonia</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option><option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option><option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="YT">Mayotte</option><option value="MX">Mexico</option><option value="FM">Micronesia</option><option value="MD">Moldova</option><option value="MC">Monaco</option><option value="MN">Mongolia</option><option value="ME">Montenegro</option><option value="MS">Montserrat</option><option value="MA">Morocco</option><option value="MZ">Mozambique</option><option value="MM">Myanmar [Burma]</option><option value="NA">Namibia</option><option value="NR">Nauru</option><option value="NP">Nepal</option><option value="NL">Netherlands</option><option value="NC">New Caledonia</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option><option value="NG">Nigeria</option><option value="NU">Niue</option><option value="NF">Norfolk Island</option><option value="KP">North Korea</option><option value="MP">Northern Mariana Islands</option><option value="NO">Norway</option><option value="OM">Oman</option><option value="PK">Pakistan</option><option value="PW">Palau</option><option value="PS">Palestine</option><option value="PA">Panama</option><option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option><option value="PN">Pitcairn Islands</option><option value="PL">Poland</option><option value="PT">Portugal</option><option value="PR">Puerto Rico</option><option value="QA">Qatar</option><option value="CG">Republic of the Congo</option><option value="RE">Réunion</option><option value="RO">Romania</option><option value="RU">Russia</option><option value="RW">Rwanda</option><option value="BL">Saint Barthélemy</option><option value="SH">Saint Helena</option><option value="KN">Saint Kitts and Nevis</option><option value="LC">Saint Lucia</option><option value="MF">Saint Martin</option><option value="PM">Saint Pierre and Miquelon</option><option value="VC">Saint Vincent and the Grenadines</option><option value="WS">Samoa</option><option value="SM">San Marino</option><option value="ST">São Tomé and Príncipe</option><option value="SA">Saudi Arabia</option><option value="SN">Senegal</option><option value="RS">Serbia</option><option value="SC">Seychelles</option><option value="SL">Sierra Leone</option><option value="SG">Singapore</option><option value="SX">Sint Maarten</option><option value="SK">Slovakia</option><option value="SI">Slovenia</option><option value="SB">Solomon Islands</option><option value="SO">Somalia</option><option value="ZA">South Africa</option><option value="GS">South Georgia and the South Sandwich Islands</option><option value="KR">South Korea</option><option value="SS">South Sudan</option><option value="ES">Spain</option><option value="LK">Sri Lanka</option><option value="SD">Sudan</option><option value="SR">Suriname</option><option value="SJ">Svalbard and Jan Mayen</option><option value="SZ">Swaziland</option><option value="CH">Switzerland</option><option value="SY">Syria</option><option value="TW">Taiwan</option><option value="TJ">Tajikistan</option><option value="TZ">Tanzania</option><option value="TH">Thailand</option><option value="TG">Togo</option><option value="TK">Tokelau</option><option value="TO">Tonga</option><option value="TT">Trinidad and Tobago</option><option value="TN">Tunisia</option><option value="TR">Turkey</option><option value="TM">Turkmenistan</option><option value="TC">Turks and Caicos Islands</option><option value="TV">Tuvalu</option><option value="UM">U.S. Minor Outlying Islands</option><option value="VI">U.S. Virgin Islands</option><option value="UG">Uganda</option><option value="UA">Ukraine</option><option value="AE">United Arab Emirates</option><option value="GB">United Kingdom</option><option value="UY">Uruguay</option><option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VA">Vatican City</option><option value="VE">Venezuela</option><option value="VN">Vietnam</option><option value="WF">Wallis and Futuna</option><option value="EH">Western Sahara</option><option value="YE">Yemen</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option>
                </Field>
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
                    component="select"
                    name="deliveryCountry"
                    className={css(styles.inputWrapper)}
                  >
                    <option value="SE">Sweden</option><option value="CA">Canada</option><option value="US">United States</option><option value="AF">Afghanistan</option><option value="AX">Åland</option><option value="AL">Albania</option><option value="DZ">Algeria</option><option value="AS">American Samoa</option><option value="AD">Andorra</option><option value="AO">Angola</option><option value="AI">Anguilla</option><option value="AQ">Antarctica</option><option value="AG">Antigua and Barbuda</option><option value="AR">Argentina</option><option value="AM">Armenia</option><option value="AW">Aruba</option><option value="AU">Australia</option><option value="AT">Austria</option><option value="AZ">Azerbaijan</option><option value="BS">Bahamas</option><option value="BH">Bahrain</option><option value="BD">Bangladesh</option><option value="BB">Barbados</option><option value="BY">Belarus</option><option value="BE">Belgium</option><option value="BZ">Belize</option><option value="BJ">Benin</option><option value="BM">Bermuda</option><option value="BT">Bhutan</option><option value="BO">Bolivia</option><option value="BQ">Bonaire</option><option value="BA">Bosnia and Herzegovina</option><option value="BW">Botswana</option><option value="BV">Bouvet Island</option><option value="BR">Brazil</option><option value="IO">British Indian Ocean Territory</option><option value="VG">British Virgin Islands</option><option value="BN">Brunei</option><option value="BG">Bulgaria</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option><option value="KH">Cambodia</option><option value="CM">Cameroon</option><option value="CV">Cape Verde</option><option value="KY">Cayman Islands</option><option value="CF">Central African Republic</option><option value="TD">Chad</option><option value="CL">Chile</option><option value="CN">China</option><option value="CX">Christmas Island</option><option value="CC">Cocos [Keeling] Islands</option><option value="CO">Colombia</option><option value="KM">Comoros</option><option value="CD">Congo</option><option value="CK">Cook Islands</option><option value="CR">Costa Rica</option><option value="HR">Croatia</option><option value="CU">Cuba</option><option value="CW">Curacao</option><option value="CY">Cyprus</option><option value="CZ">Czechia</option><option value="DK">Denmark</option><option value="DJ">Djibouti</option><option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="TL">East Timor</option><option value="EC">Ecuador</option><option value="EG">Egypt</option><option value="SV">El Salvador</option><option value="GQ">Equatorial Guinea</option><option value="ER">Eritrea</option><option value="EE">Estonia</option><option value="ET">Ethiopia</option><option value="FK">Falkland Islands</option><option value="FO">Faroe Islands</option><option value="FJ">Fiji</option><option value="FI">Finland</option><option value="FR">France</option><option value="GF">French Guiana</option><option value="PF">French Polynesia</option><option value="TF">French Southern Territories</option><option value="GA">Gabon</option><option value="GM">Gambia</option><option value="GE">Georgia</option><option value="DE">Germany</option><option value="GH">Ghana</option><option value="GI">Gibraltar</option><option value="GR">Greece</option><option value="GL">Greenland</option><option value="GD">Grenada</option><option value="GP">Guadeloupe</option><option value="GU">Guam</option><option value="GT">Guatemala</option><option value="GG">Guernsey</option><option value="GN">Guinea</option><option value="GW">Guinea-Bissau</option><option value="GY">Guyana</option><option value="HT">Haiti</option><option value="HM">Heard Island and McDonald Islands</option><option value="HN">Honduras</option><option value="HK">Hong Kong</option><option value="HU">Hungary</option><option value="IS">Iceland</option><option value="IN">India</option><option value="ID">Indonesia</option><option value="IR">Iran</option><option value="IQ">Iraq</option><option value="IE">Ireland</option><option value="IM">Isle of Man</option><option value="IL">Israel</option><option value="IT">Italy</option><option value="CI">Ivory Coast</option><option value="JM">Jamaica</option><option value="JP">Japan</option><option value="JE">Jersey</option><option value="JO">Jordan</option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option><option value="KI">Kiribati</option><option value="XK">Kosovo</option><option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Laos</option><option value="LV">Latvia</option><option value="LB">Lebanon</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LY">Libya</option><option value="LI">Liechtenstein</option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="MO">Macao</option><option value="MK">Macedonia</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option><option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option><option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="YT">Mayotte</option><option value="MX">Mexico</option><option value="FM">Micronesia</option><option value="MD">Moldova</option><option value="MC">Monaco</option><option value="MN">Mongolia</option><option value="ME">Montenegro</option><option value="MS">Montserrat</option><option value="MA">Morocco</option><option value="MZ">Mozambique</option><option value="MM">Myanmar [Burma]</option><option value="NA">Namibia</option><option value="NR">Nauru</option><option value="NP">Nepal</option><option value="NL">Netherlands</option><option value="NC">New Caledonia</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option><option value="NG">Nigeria</option><option value="NU">Niue</option><option value="NF">Norfolk Island</option><option value="KP">North Korea</option><option value="MP">Northern Mariana Islands</option><option value="NO">Norway</option><option value="OM">Oman</option><option value="PK">Pakistan</option><option value="PW">Palau</option><option value="PS">Palestine</option><option value="PA">Panama</option><option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option><option value="PN">Pitcairn Islands</option><option value="PL">Poland</option><option value="PT">Portugal</option><option value="PR">Puerto Rico</option><option value="QA">Qatar</option><option value="CG">Republic of the Congo</option><option value="RE">Réunion</option><option value="RO">Romania</option><option value="RU">Russia</option><option value="RW">Rwanda</option><option value="BL">Saint Barthélemy</option><option value="SH">Saint Helena</option><option value="KN">Saint Kitts and Nevis</option><option value="LC">Saint Lucia</option><option value="MF">Saint Martin</option><option value="PM">Saint Pierre and Miquelon</option><option value="VC">Saint Vincent and the Grenadines</option><option value="WS">Samoa</option><option value="SM">San Marino</option><option value="ST">São Tomé and Príncipe</option><option value="SA">Saudi Arabia</option><option value="SN">Senegal</option><option value="RS">Serbia</option><option value="SC">Seychelles</option><option value="SL">Sierra Leone</option><option value="SG">Singapore</option><option value="SX">Sint Maarten</option><option value="SK">Slovakia</option><option value="SI">Slovenia</option><option value="SB">Solomon Islands</option><option value="SO">Somalia</option><option value="ZA">South Africa</option><option value="GS">South Georgia and the South Sandwich Islands</option><option value="KR">South Korea</option><option value="SS">South Sudan</option><option value="ES">Spain</option><option value="LK">Sri Lanka</option><option value="SD">Sudan</option><option value="SR">Suriname</option><option value="SJ">Svalbard and Jan Mayen</option><option value="SZ">Swaziland</option><option value="CH">Switzerland</option><option value="SY">Syria</option><option value="TW">Taiwan</option><option value="TJ">Tajikistan</option><option value="TZ">Tanzania</option><option value="TH">Thailand</option><option value="TG">Togo</option><option value="TK">Tokelau</option><option value="TO">Tonga</option><option value="TT">Trinidad and Tobago</option><option value="TN">Tunisia</option><option value="TR">Turkey</option><option value="TM">Turkmenistan</option><option value="TC">Turks and Caicos Islands</option><option value="TV">Tuvalu</option><option value="UM">U.S. Minor Outlying Islands</option><option value="VI">U.S. Virgin Islands</option><option value="UG">Uganda</option><option value="UA">Ukraine</option><option value="AE">United Arab Emirates</option><option value="GB">United Kingdom</option><option value="UY">Uruguay</option><option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VA">Vatican City</option><option value="VE">Venezuela</option><option value="VN">Vietnam</option><option value="WF">Wallis and Futuna</option><option value="EH">Western Sahara</option><option value="YE">Yemen</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option>
                  </Field>
                  {touched.deliveryCountry && errors.deliveryCountry && (
                    <div className={css(styles.errorStyles)}>
                      {errors.deliveryCountry}
                    </div>
                  )}
                </label>
              </div>

              {/*#######################       END            ##################*/}

              <div className={css(styles.cardInfoWrap)}>
                <label className={css(styles.halfWidthDateCardType)}>
                  Card type
                  <Field
                    component="select"
                    name="cardType"
                    className={css(styles.halfWidthDateInputs)}
                  >
                    <option value="visa">Visa</option>
                    <option value="mastercard">Mastercard</option>
                    <option value="amex">American Express</option>
                  </Field>
                </label>

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
    cardType,
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
      country: country || 'SE',
      deliveryFirstName: deliveryFirstName || '',
      deliveryLastName: deliveryLastName || '',
      deliveryAdressLine1: deliveryAdressLine1 || '',
      deliveryAdressLine2: deliveryAdressLine2 || '',
      deliveryCity: deliveryCity || '',
      deliveryZipCode: deliveryZipCode || '',
      deliveryCountry: deliveryCountry || 'SE',
      shiptoanotheradress: shiptoanotheradress || false,
      cardType: cardType || 'Visa',
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

