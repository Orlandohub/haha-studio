import React from 'react'
import hero_image from '../images/hero_image.jpg'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import { Grid, Row, Col } from 'react-bootstrap'

import { graphql } from 'gatsby'

class IndexPage extends React.Component {
  constructor() {
    super()

    this.state = {
      pathOnStart: null,
    }
  }
  componentDidMount() {
    this.setState({
      pathOnStart: sessionStorage.getItem('pathOnStart'),
    })
  }

  render() {
    const { location, data } = this.props
    return (
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
