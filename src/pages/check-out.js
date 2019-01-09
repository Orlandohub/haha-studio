import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import { css } from 'emotion'
import * as styles from '../components/IndexPageStyles/CheckOutPageStyles/styles'
import prImgMob from '../images/M_product_thumbnail_checkout_page.jpg'
import prImgDesk from '../images/D_product_thumbnail_checkout_page.jpg'
import { Formik, Field, Form, ErrorMessage } from 'formik'

const CheckOut = ({ client }) => {
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
      <div className={css(styles.cartWrapper)}>
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

        {/* #############################         end        #############################*/}
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
                      value="{this.state.value}"
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

        {/* #############################      end   #############################*/}
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
      <br />
      <br />
      <br />
      <div className={css(styles.formWrapper)}>
        <div>
          Your details
          <br />
          Form is restricted to latin characters only
        </div>
        {/*<form onSubmit={this.handleSubmit}>
            <label className={css(styles.formLabels)}>
              First name
              <input
                className={css(styles.inputWrapper)}
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
          </form>
          <br />
          <br />
          <br />
    <br />*/}
        <Formik
          initialValues={client /** { email, social } */}
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
                actions.setStatus({ msg: 'Set some arbitrary status or data' })
              }
            )
          }}
          render={({ errors, status, touched, isSubmitting }) => (
            <Form>
              <label>
                First name
                <Field type="text" name="First name" />
                <ErrorMessage name="First name" component="div" />
              </label>
              <label>
                Second name
                <Field type="text" className="error" name="Last name" />
                <ErrorMessage name="Last name">
                  {errorMessage => <div className="error">{errorMessage}</div>}
                </ErrorMessage>
              </label>

              <label>
                Email
                <Field type="text" name="email" />
                <ErrorMessage name="email" className="error" component="div" />
                {status && status.msg && <div>{status.msg}</div>}
              </label>

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        />
      </div>
    </Layout>
  )
}

CheckOut.proptypes = {
  location: PropTypes.object.isRequired,
}

export default CheckOut
