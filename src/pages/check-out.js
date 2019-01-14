import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import * as styles from '../components/IndexPageStyles/CheckOutPageStyles/styles'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Cart from '../components/CartComponent/index'

const date = new Date()
const year = date.getFullYear()
const product = 999
const promoCode = 0.15
const submitPromoCode = () => {
  console.log('Quantity of product is ' + product.lenght())
}

const CheckOut = ({ data, values, errors, touched, isSubmitting }) => {
  return (
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

        {/* #############################     CART GOES HERE        #############################*/}
        <Cart showElements={true} />
        {/*<table className={css(styles.tableStyles)}>
          <tbody>
            <tr>
              <td className={css(styles.rowStyles)}>
                <img src={prImgMob} alt="product image" />
              </td>
              <td className={css(styles.rowStyles)}>Alia, Pack A</td>
              <td className={css(styles.rowStylesRight)}>
                <button className={css(styles.cardBtn)}>-</button>
                <span className={css(styles.numWrap)}>11</span>
                <button className={css(styles.cardBtn)}>+</button>
              </td>
              <td className={css(styles.rowStylesRight)}>{product} &#8364;</td>
            </tr>
            <tr>
              <td className={css(styles.rowStyles)}>
                <img src={prImgMob} alt="product image" />
              </td>
              <td className={css(styles.rowStyles)}>Alia, Pack A</td>
              <td className={css(styles.rowStylesRight)}>
                <button className={css(styles.cardBtn)}>-</button>
                <span className={css(styles.numWrap)}>11</span>
                <button className={css(styles.cardBtn)}>+</button>
              </td>

              <td className={css(styles.rowStylesRight)}>{product} &#8364;</td>
            </tr>
          </tbody>
  </table>*/}

        {/* #############################    DISCOUNT SUBMISSION     #############################*/}

        <div className={css(styles.promoWrapper)}>
          <form onSubmit={submitPromoCode}>
            <table style={{ width: '100%' }}>
              <tbody>
                <tr>
                  <td>
                    <label style={{ fontWeight: 'normal' }}>
                      Have a promo code? Enter code here:
                      <br />
                      <input
                        className={css(styles.placeholderStyles)}
                        type="text"
                        value=""
                        onChange="{this.handleChange}"
                        placeholder="Enter code"
                      />
                    </label>
                  </td>
                  <td className={css(styles.arrowWrap)}>
                    <input
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
              <td className={css(styles.sumRowTopRight)}>as</td>
            </tr>
            <tr>
              <td className={css(styles.middleRows)}>Shipping</td>
              <td className={css(styles.middleRowsRight)}>as</td>
            </tr>
            <tr>
              <td className={css(styles.middleRows)}>Tax included 25% </td>
              <td className={css(styles.middleRowsRight)}>as</td>
            </tr>
            <tr>
              <td className={css(styles.sumRowBottom)}>Total</td>
              <td className={css(styles.sumRowBottomRight)}>as</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/*########################## CLIENT FORM ################################*/}

      <div className={css(styles.clientFormWrapper)}>
        <div className={css(styles.brand)}>
          <div className={css(styles.shopWrapRight)}>
            <Link to="/shop/" className={css(styles.shopLink)}>
              shop
            </Link>
          </div>
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
              <div className={css(styles.errorStyles)}>{errors.firstName}</div>
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
              <div className={css(styles.errorStyles)}>{errors.lastName}</div>
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
              className={css(styles.inputWrapper)}
            />
            {touched.phoneNumber && errors.phoneNumber && (
              <div className={css(styles.errorStyles)}>
                {errors.phoneNumber}
              </div>
            )}
          </label>
          <label className={css(styles.formLabels)}>
            Adress line 1
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
            Adress line 2
            <Field
              type="text"
              name="adressLine2"
              className={css(styles.inputWrapper)}
            />
            {values.shiptoanotheradress &&
              touched.adressLine2 &&
              errors.adressLine2 && (
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
              <div className={css(styles.errorStyles)}>{errors.zipCode}</div>
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
              <div className={css(styles.errorStyles)}>{errors.country}</div>
            )}
          </label>

          {/*####################### CHECK BOX HERE  ##################*/}

          <label for="chk" className={css(styles.checkBox)}>
            <Field
              style={{ visibility: 'hidden' }}
              id="chk"
              type="checkbox"
              name="shiptoanotheradress"
              checked={values.shipToAnotherAdress}
            />
            <div className={css(styles.customCheckBox)}>
              {values.shiptoanotheradress ? (
                <p style={{ lineHeight: 0.7, fontSize: '22px' }}>&#10004;</p>
              ) : null}
            </div>
            Ship to another adress?
          </label>

          {/*####################### END here##################*/}

          <label className={css(styles.formLabels)}>
            Card details
            <Field
              type="text"
              name="cardDetails"
              className={css(styles.inputWrapper)}
            />
            {touched.cardDetails && errors.cardDetails && (
              <div className={css(styles.errorStyles)}>
                {errors.cardDetails}
              </div>
            )}
          </label>
          <label className={css(styles.formLabels)}>
            Card number
            <Field
              type="text"
              name="cardNumber"
              className={css(styles.inputWrapper)}
            />
            {touched.cardNumber && errors.cardNumber && (
              <div className={css(styles.errorStyles)}>{errors.cardNumber}</div>
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
              <div className={css(styles.errorStyles)}>{errors.nameOnCard}</div>
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
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="09">09</option>
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
              className={css(styles.halfWidthFormsInputs)}
            />
            {touched.CVC && errors.CVC && (
              <div className={css(styles.errorStyles)}>{errors.CVC}</div>
            )}
          </label>
          <div style={{ float: 'left', width: '100%' }}>
            <button
              className={css(styles.purchaseBtn)}
              type="submit"
              disabled={isSubmitting}
            >
              COMPLETE PURCHASE
            </button>
            <p className={css(styles.paragraph)}>
              By completing your purchase you accept to the{' '}
              <Link
                to="/terms-licenses/"
                style={{ textDecoration: 'none', color: '#7B7C81' }}
              >
                <u>terms and conditions</u>
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  )
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
    shiptoanotheradress,
    cardDetails,
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
      shiptoanotheradress: shiptoanotheradress || false,
      cardDetails: cardDetails || '',
      cardNumber: cardNumber || '',
      nameOnCard: nameOnCard || '',
      expiryYear: expiryYear || '2019',
      expiryMonth: expiryMonth || '01',
      CVC: CVC || '',
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Email not valid!')
      .required('Email is required!'),
    firstName: Yup.string().required('First name is required!'),
    lastName: Yup.string().required('Last name is required!'),
    phoneNumber: Yup.number().required('Phone number is required!'),
    adressLine1: Yup.string().required('Adress is required!'),
    adressLine2: Yup.string().required('Adress 2 is required!'),
    city: Yup.string().required('Required!'),
    zipCode: Yup.string().required('Required!'),
    country: Yup.string().required('Country is required!'),
    cardDetails: Yup.string().required('Card details are required!'),
    cardNumber: Yup.number().required('Card number is required!'),
    nameOnCard: Yup.string().required('Name on card is required!'),
    CVC: Yup.string()
      .min(3, 'Minimum 3 digits')
      .max(3, 'Maximum 3 digits')
      .required('CVC is required!'),
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    console.log(values)
    setTimeout(() => {
      if (values.shiptoanotheradress === true) {
        setErrors({ adressLine2: 'Secondary adress is required!' })
      } else {
        resetForm()
      }
      setSubmitting(false)
    }, 1000)
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
