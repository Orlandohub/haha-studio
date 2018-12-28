import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'

const Shop = ({ location }) => (
  <React.Fragment>
    <Layout location={location}>
    <div>9</div>
    
    </Layout>
  </React.Fragment>
)

Shop.proptypes = {
  location: PropTypes.object.isRequired,
}

export default Shop
