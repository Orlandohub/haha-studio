import React from 'react'
import PropTypes from 'prop-types'
import Hero from '../components/Hero'
import Layout from '../layouts'
import Projects from '../components/Projects'
import { graphql } from 'gatsby'
import ScrollTop from '../components/ScrollToTop/index'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      content: false,
    }

    this.showContent = this.showContent.bind(this)
  }

  showContent() {
    this.setState({ content: true })
  }

  render() {
    const { data, location } = this.props
    const { projectsList } = data
    return (
      <React.Fragment>
        <Hero data={data} showContent={this.showContent} />
        {this.state.content && (
          <Layout location={location}>
            <ScrollTop />
            <Projects projects={projectsList} />
          </Layout>
        )}
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
    fileName: file(relativePath: { eq: "00_D_logo_landing_page.png" }) {
      childImageSharp {
        fluid(maxWidth: 2120) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    mobileFileName: file(relativePath: { eq: "00_M_logo_large@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 1060) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    projectsList: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "project-page" }
          is_selected: { eq: true }
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
