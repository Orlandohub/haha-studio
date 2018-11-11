import React from 'react'
import hero_image from '../images/hero_image.jpg'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import Hero from '../components/Hero'
import { Grid, Row, Col } from 'react-bootstrap'

const IndexPage = ({ location }) => (
  <React.Fragment>
    {
      sessionStorage.getItem('pathOnStart') === '/' ?
        <Hero />
        :
        null
    }
    <Layout location={location}>
      <Grid>
        <Row>
          <Col xs={12} md={3}>
            <p style={{ fontSize: '2em', color: 'black'}}>Spin Lamp, 2018</p>
          </Col>
          <Col xs={12} md={9}><img src={hero_image} /></Col>
        </Row>
        <Row>
          <Col xs={12} md={3}>
            <p style={{ fontSize: '2em', color: 'black'}}>Liberty Lamp, 2018</p>
          </Col>
          <Col xs={12} md={9}><img src={hero_image} /></Col>
        </Row>
        <Row>
          <Col xs={12} md={3}>
            <p style={{ fontSize: '2em', color: 'black'}}>Alia, 2017</p>
          </Col>
          <Col xs={12} md={9}><img src={hero_image} /></Col>
        </Row>
      </Grid>
    </Layout>
  </React.Fragment>
)

IndexPage.proptypes = {
  location: PropTypes.object.isRequired,
}

export default IndexPage
