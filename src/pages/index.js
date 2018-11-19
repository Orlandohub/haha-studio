import React from 'react'
import PropTypes from 'prop-types'
import Hero from '../components/Hero'
import Layout from '../layouts'
import Projects from '../components/Projects'

import { graphql } from 'gatsby'

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    return (
      <React.Fragment>
        <Hero data={data} />
        <Layout location={location}>
          <Projects />
        </Layout>
      </React.Fragment>
    )
  }
}

IndexPage.proptypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "logo_large.png" }) {
      childImageSharp {
        fluid(maxWidth: 1060) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
