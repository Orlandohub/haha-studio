import React from 'react'
import PropTypes from 'prop-types'
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

const date = new Date()
const year = date.getFullYear()

function connect() {
  if (typeof window !== 'undefined') {
    window.Snipcart.api.modal.show()
    window.jQuery('.js-next').click()

    window.jQuery('#snip-name').val('Yujin haha')
    window.jQuery('#snip-address1').val('Tellusborgsvägen')
    window.jQuery('#snip-city').val('Stockholm')
    window.jQuery('#snip-country').val('Canada')
    window
      .jQuery('#snip-country option')
      .filter(function() {
        return window.jQuery(this).text() === 'Sweden'
      })
      .prop('selected', true)
    window.jQuery('#snip-postalCode').val('126 28')
    window.jQuery('#snip-email').val('orlando.goncalves@gmail.com')
    window.jQuery('#snip-phone').val('2134234234')

    window.jQuery('#snipcart-next').click()
    window.jQuery('#snip-type').val('visa')
    window.jQuery('#snip-ownerName').val('Glenn Quagmire')
    window.jQuery('#snip-number').val('4242424242424242')
    window.jQuery('#snip-cvc').val('345')
    window.jQuery('#snip-expirationMonth').val('5')
    window.jQuery('#snip-expirationYear').val('2022')

    setTimeout(function() {
      window.jQuery('#snipcart-paymentmethod-pay').click()
    }, 1000)
    setTimeout(function() {
      window.jQuery('.js-submit').click()
    }, 1000)
  }
}

class CheckOut extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      total: 0,
    }
  }
  componentDidMount() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const cart = window.Snipcart.api.cart.get()
      this.setState({
        total: cart && cart.total,
      })

      document.addEventListener('snipcart.ready', () => {
        const carts = window.Snipcart.api.cart.get()
        this.setState({
          total: carts && carts.total,
        })
      })
    }
  }

  render() {
    const { data, values, errors, touched, isSubmitting } = this.props
    let { typed } = this.props

    return (
      <Layout hideMenu={true}>
        {' '}
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
                  alert('A code was submitted: ' + typed)
                  event.preventDefault()
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
                <tr>
                  <td className={css(styles.sumRowTop)}>Subtotal</td>
                  <td className={css(styles.sumRowTopRight)}>
                    {this.state.total} &#8364;
                  </td>
                </tr>
                <tr>
                  <td className={css(styles.middleRows)}>Shipping</td>
                  <td className={css(styles.middleRowsRight)}>## &#8364;</td>
                </tr>
                <tr>
                  <td className={css(styles.middleRows)}>Tax included 25% </td>
                  <td className={css(styles.middleRowsRight)}>## &#8364;</td>
                </tr>
                <tr>
                  <td className={css(styles.sumRowBottom)}>Total</td>
                  <td className={css(styles.sumRowBottomRight)}>## &#8364;</td>
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
                >
                  COMPLETE PURCHASE
                </button>
                <button type="button" onClick={connect}>
                  CONNECT
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
    console.log('handle submit values', values)
    setTimeout(() => {
      console.log('values are ' + values)
      // errors example below
      if (values.email === 'andrew@test.io') {
        setErrors({ email: 'That email is already taken' })
      } else {
        resetForm()
      }
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
