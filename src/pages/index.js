import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import Hero from '../components/Hero'
import { Grid, Row, Col } from 'react-bootstrap'

const IndexPage = ({ location }) => (
  <React.Fragment>
    <Hero />
    <Layout location={location}>
      <Grid>
        <Row>
          ;
          <Col xs={12}>
            <h2>Selected</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
              nobis, molestias labore reprehenderit laborum ad necessitatibus
              rem quam voluptatem temporibus amet similique tempore ullam cum
              nulla et voluptatum! Eius, ab!
            </p>
          </Col>
        </Row>
      </Grid>
    </Layout>
  </React.Fragment>
)

IndexPage.proptypes = {
  location: PropTypes.object.isRequired,
}

export default IndexPage
