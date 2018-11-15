import React from 'react'
import hero_image from '../images/hero_image.jpg'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import Hero from '../components/Hero'
import { Grid, Row, Col } from 'react-bootstrap'
import { Subscribe } from 'unstated'
import CurrentPageContainer from '../state/CurrentPageContainer'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

import { graphql } from 'gatsby'

class IndexPage extends React.Component {
  constructor() {
    super()

    this.state = {
      pathOnStart: null,
    }

    this.scrollLocker = React.createRef()
  }
  componentDidMount() {
    disableBodyScroll(this.scrollLocker.current)
    this.setState({
      pathOnStart: sessionStorage.getItem('pathOnStart'),
    })
  }

  componentWillUnmount() {
    // 5. Useful if we have called disableBodyScroll for multiple target elements,
    // and we just want a kill-switch to undo all that.
    // OR useful for if the `hideTargetElement()` function got circumvented eg. visitor 
    // clicks a link which takes him/her to a different page within the app.
    clearAllBodyScrollLocks()
  }

  render() {
    const { location, data } = this.props
    return (
      <Subscribe to={[CurrentPageContainer]}>
        {currentPage => {
          if (!currentPage.state.disableBodyScroll) {
            enableBodyScroll(this.scrollLocker.current)
          }
          return (
            <div ref={this.scrollLocker}>
              {
                this.state.pathOnStart === '/' ?
                  <Hero data={data} />
                  :
                  null
              }
              <Layout location={location}>
                <Grid fluid>
                  <Row>
                    <Col xs={2} md={3}>
                      <p style={{ marginTop: 40, lineHeight: 0.5, fontSize: '2em', color: 'black'}}>Spin Lamp, 2018</p>
                    </Col>
                    <Col xs={10} md={9}><img style={{ height: 894, marginTop: 40 }} src={hero_image} /></Col>
                  </Row>
                  <Row>
                    <Col xs={2} md={3}>
                      <p style={{ marginTop: 40, lineHeight: 0.5, fontSize: '2em', color: 'black'}}>Liberty Lamp, 2018</p>
                    </Col>
                    <Col xs={10} md={9}><img style={{ height: 894, marginTop: 40 }} src={hero_image} /></Col>
                  </Row>
                  <Row>
                    <Col xs={2} md={3}>
                      <p style={{ marginTop: 40, lineHeight: 0.5, fontSize: '2em', color: 'black'}}>Alia, 2017</p>
                    </Col>
                    <Col xs={10} md={9}><img style={{ height: 894, marginTop: 40 }} src={hero_image} /></Col>
                  </Row>
                </Grid>
              </Layout>
            </div>
          )
        }}
      </Subscribe>
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
