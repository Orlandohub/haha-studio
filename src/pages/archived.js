import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import Projects from '../components/Projects'
import { graphql } from 'gatsby'
import SEO from '../components/SEO/index'

class Archived extends React.Component {
  render() {
    const { location, data } = this.props
    const { projectsList } = data
    return (
      <Layout location={location}>
        <SEO
          title={'HAHA Studio archives'}
          description={'HAHA Studio, all of products and projects'}
        />
        <Projects projects={projectsList} />
      </Layout>
    )
  }
}

Archived.proptypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}

export default Archived

export const query = graphql`
  query {
    projectsList: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "project-page" }
          is_selected: { eq: false }
        }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            year
            image_gallery {
              image {
                childImageSharp {
                  fluid(maxWidth: 1060) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
