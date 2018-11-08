import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Layout from '../layouts'

const FindUs = ({ location }) => (
  <div>
    <Layout location={location}>
      <h1>Hi from the FindUs page</h1>
      <p>Welcome to FindUs</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </div>
)

FindUs.proptypes = {
  location: PropTypes.object.isRequired
}

export default FindUs
