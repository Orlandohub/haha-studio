import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import Cart from '../components/CartComponent'

const CartPage = ({ location }) => (
  <Layout location={location}>
    <Cart />
  </Layout>
)

CartPage.proptypes = {
  location: PropTypes.object.isRequired,
}

export default CartPage
