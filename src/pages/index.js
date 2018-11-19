import React from 'react'
import PropTypes from 'prop-types'
import Hero from '../components/Hero'
import Layout from '../layouts'
import Projects from '../components/Projects'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import { graphql } from 'gatsby'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      scrollLock: true
    }

    this.enableScroll = this.enableScroll.bind(this)
    this.scrollView = React.createRef()
  }
  componentDidMount() {
    disableBodyScroll(this.scrollView.current)
  }
  componentWillUnmount() {
    clearAllBodyScrollLocks()
  }
  enableScroll() {
    enableBodyScroll(this.scrollView.current)
  }
  render() {
    const { data, location } = this.props
    return (
      <React.Fragment ref={this.scrollView}>
        <Hero data={data} enableScroll={this.enableScroll} />
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
