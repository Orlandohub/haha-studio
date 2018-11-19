import React from 'react'
import PropTypes from 'prop-types'
import Hero from '../components/Hero'

import { graphql } from 'gatsby'

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    return (
      <Hero data={data} />
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
