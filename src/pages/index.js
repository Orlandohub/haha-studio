import React from 'react'
import PropTypes from 'prop-types'
import Hero from '../components/Hero'
import Layout from '../layouts'
import Projects from '../components/Projects'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'

import { graphql } from 'gatsby'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      scrollLock: true,
    }
    this.reloadToTop = this.reloadToTop.bind(this)
    this.enableScroll = this.enableScroll.bind(this)
    this.scrollView = React.createRef()
  }

  reloadToTop() {
    window.scrollTo(0, 0)
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.reloadToTop)
    disableBodyScroll(this.scrollView.current)
  }
  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.reloadToTop)
    clearAllBodyScrollLocks()
  }
  enableScroll() {
    enableBodyScroll(this.scrollView.current)
  }
  render() {
    const { data, location } = this.props
    const { projectsList } = data
    return (
      <div ref={this.scrollView}>
        <Hero data={data} enableScroll={this.enableScroll} />
        <Layout location={location}>
          <Projects projects={projectsList} />
        </Layout>
      </div>
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
    mobileFileName: file(relativePath: { eq: "00_M_logo_large@2x.png" }) {
      childImageSharp {
        fluid(maxWidth: 1060) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    projectsList: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
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
