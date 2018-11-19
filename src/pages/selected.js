import React from 'react'
import hero_image from '../images/hero_image.jpg'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import { Grid, Row, Col } from 'react-bootstrap'

class Selected extends React.Component {
  render() {
    const { location } = this.props
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

Selected.proptypes = {
  location: PropTypes.object.isRequired,
}

export default Selected

