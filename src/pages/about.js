import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Layout from '../layouts'

const About = ({ location }) => (
  <div>
    <Layout location={location}>
      <h1>Hi from the About page</h1>
      <p>Welcome to About</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </div>
)

About.proptypes = {
  location: PropTypes.object.isRequired
}

export default About
