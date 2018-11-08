import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Layout from '../layouts'

const Archived = ({ location }) => (
  <div>
    <Layout location={location}>
      <h1>Hi from the Archived page</h1>
      <p>Welcome to Archived</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </div>
)

Archived.proptypes = {
  location: PropTypes.object.isRequired
}

export default Archived
