import React from 'react'
import Link from 'gatsby-link'
import Layout from '../layout/layout'


const SecondPage = () => (
  <div>
    <Layout>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </div>
)

export default SecondPage
