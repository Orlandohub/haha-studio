import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import { css } from 'emotion'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import * as styles from '../components/IndexPageStyles/CheckOutPageStyles/styles'
import prImgMob from '../images/M_product_thumbnail_checkout_page.jpg'
import prImgDesk from '../images/D_product_thumbnail_checkout_page.jpg'
import { Formik, Field, Form, ErrorMessage } from 'formik'

const CheckOut = ({ client, data }) => {
  {
    /*constructor() {
    super()

    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    const { location, errors, status, touched, isSubmitting } = this.props*/
  }
  return (
    <Layout location={location}>
      <div>
        <div className={css(styles.cartWrapper)}>
          <Img fluid={data.logoimg.childImageSharp.fluid} />
          <div className={css(styles.headerStyles)}>Order summary</div>

          {/* #############################     cart goest here        #############################*/}

          <table className={css(styles.tableStyles)}>
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

              <td className={css(styles.rowStylesRight)}>1000 &#8364;</td>
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

              <td className={css(styles.rowStylesRight)}>1000 &#8364;</td>
            </tr>
          </table>

          {/* #############################      Form submission   #############################*/}

          <div className={css(styles.promoWrapper)}>
            <form onSubmit="{this.handleSubmit}">
              <table style={{ width: '100%' }}>
                <tr>
                  <td>
                    <label>
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
              </table>
            </form>
          </div>

          {/* #############################      Summmary table   #############################*/}

          <table className={css(styles.summaryTable)}>
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
          </table>
        </div>

        {/*########################## Client Form ################################*/}

        <div className={css(styles.clientFormWrapper)}>
          <div className={css(styles.ClientDetails)}>
            Your details
            <br />
            <p className={css(styles.paragraph)}>
              Form is restricted to latin characters only
            </p>
          </div>

          <Formik
            initialValues={client}
            onSubmit={(values, actions) => {
              MyImaginaryRestApiCall(user.id, values).then(
                updatedUser => {
                  actions.setSubmitting(false)
                  updateUser(updatedUser)
                  onClose()
                },
                error => {
                  actions.setSubmitting(false)
                  actions.setErrors(transformMyRestApiErrorsToAnObject(error))
                  actions.setStatus({
                    msg: 'Set some arbitrary status or data',
                  })
                }
              )
            }}
            render={({ errors, status, touched, isSubmitting }) => (
              <Form>
                <label className={css(styles.formLabels)}>
                  First name
                  <Field
                    type="text"
                    name="First name"
                    className={css(styles.inputWrapper)}
                  />
                  <ErrorMessage name="First name" component="div" />
                </label>
                <label className={css(styles.formLabels)}>
                  Last name
                  <Field
                    type="text"
                    className="error"
                    name="Last name"
                    className={css(styles.inputWrapper)}
                  />
                  <ErrorMessage name="Last name">
                    {errorMessage => (
                      <div className="error">{errorMessage}</div>
                    )}
                  </ErrorMessage>
                </label>

                <label className={css(styles.formLabels)}>
                  Email
                  <Field
                    type="text"
                    name="email"
                    className={css(styles.inputWrapper)}
                  />
                  <ErrorMessage
                    name="email"
                    className="error"
                    component="div"
                  />
                  {status && status.msg && <div>{status.msg}</div>}
                </label>

                <label className={css(styles.formLabels)}>
                  Phone number
                  <Field
                    type="tel"
                    name="Phone number"
                    className={css(styles.inputWrapper)}
                  />
                  <ErrorMessage name="Phone number" component="div" />
                </label>
                <label className={css(styles.formLabels)}>
                  Adress line 1
                  <Field
                    type="text"
                    className="error"
                    name="Adress line 1"
                    className={css(styles.inputWrapper)}
                  />
                  <ErrorMessage name="Adress line 1">
                    {errorMessage => (
                      <div className="error">{errorMessage}</div>
                    )}
                  </ErrorMessage>
                </label>
                <label className={css(styles.formLabels)}>
                  Adress line 2
                  <Field
                    type="text"
                    className="error"
                    name="Adress line 2"
                    className={css(styles.inputWrapper)}
                  />
                  <ErrorMessage name="Adress line 2">
                    {errorMessage => (
                      <div className="error">{errorMessage}</div>
                    )}
                  </ErrorMessage>
                </label>

                <label className={css(styles.halfWidthFormsCenter)}>
                  City
                  <Field
                    type="text"
                    className="error"
                    name="City"
                    className={css(styles.halfWidthFormsInputs)}
                  />
                  <ErrorMessage name="City">
                    {errorMessage => (
                      <div className="error">{errorMessage}</div>
                    )}
                  </ErrorMessage>
                </label>

                <label className={css(styles.halfWidthForms)}>
                  Zip code
                  <Field
                    type="text"
                    className="error"
                    name="Zip code"
                    className={css(styles.halfWidthFormsInputs)}
                  />
                  <ErrorMessage name="Zip code">
                    {errorMessage => (
                      <div className="error">{errorMessage}</div>
                    )}
                  </ErrorMessage>
                </label>

                <label className={css(styles.formLabels)}>
                  Country
                  <Field
                    type="text"
                    className="error"
                    name="Country"
                    className={css(styles.inputWrapper)}
                  />
                  <ErrorMessage name="Country">
                    {errorMessage => (
                      <div className="error">{errorMessage}</div>
                    )}
                  </ErrorMessage>
                </label>

                {/*####################### check box here##################*/}
                <br />
                <br />

                <br />
                <br />
                <br />
                <label className={css(styles.formLabels)}>
                  Card details
                  <Field
                    type="text"
                    className="error"
                    name="Card details"
                    className={css(styles.inputWrapper)}
                  />
                  <ErrorMessage name="Card details">
                    {errorMessage => (
                      <div className="error">{errorMessage}</div>
                    )}
                  </ErrorMessage>
                </label>
                <label className={css(styles.formLabels)}>
                  Card number
                  <Field
                    type="text"
                    className="error"
                    name="Card number"
                    className={css(styles.inputWrapper)}
                  />
                  <ErrorMessage name="Card number">
                    {errorMessage => (
                      <div className="error">{errorMessage}</div>
                    )}
                  </ErrorMessage>
                </label>
                <label className={css(styles.formLabels)}>
                  Name on Card
                  <Field
                    type="text"
                    className="error"
                    name="Name on Card"
                    className={css(styles.inputWrapper)}
                  />
                  <ErrorMessage name="Name on Card">
                    {errorMessage => (
                      <div className="error">{errorMessage}</div>
                    )}
                  </ErrorMessage>
                </label>

                <label className={css(styles.halfWidthDateCenter)}>
                  Expiry year
                  <Field
                    type="text"
                    className="error"
                    name="Expiry year"
                    className={css(styles.halfWidthDateInputs)}
                  />
                  <ErrorMessage name="Expiry year">
                    {errorMessage => (
                      <div className="error">{errorMessage}</div>
                    )}
                  </ErrorMessage>
                </label>

                <label className={css(styles.halfWidthDate)}>
                  Expiry month
                  <Field
                    type="text"
                    className="error"
                    name="Expiry month"
                    className={css(styles.halfWidthDateInputs)}
                  />
                  <ErrorMessage name="Expiry month">
                    {errorMessage => (
                      <div className="error">{errorMessage}</div>
                    )}
                  </ErrorMessage>
                </label>

                <label className={css(styles.halfWidthFormsCVC)}>
                  CVC
                  <Field
                    type="text"
                    className="error"
                    name="CVC"
                    className={css(styles.halfWidthDateInputs)}
                  />
                  <ErrorMessage name="CVC">
                    {errorMessage => (
                      <div className="error">{errorMessage}</div>
                    )}
                  </ErrorMessage>
                </label>

                <button
                  className={css(styles.purchaseBtn)}
                  type="submit"
                  disabled={isSubmitting}
                >
                  COMPLETE PURCHASE
                </button>
                <p className={css(styles.paragraph)}>
                  By completing your purchase you accept to the terms and
                  conditions
                </p>
              </Form>
            )}
          />
        </div>
      </div>
    </Layout>
  )
}

CheckOut.proptypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default CheckOut

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
