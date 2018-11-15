import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import { Grid, Row, Col } from 'react-bootstrap'

const Texts = ({ location }) => (
  <React.Fragment>
    <Layout location={location}>
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <h2>Texts</h2>
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

Texts.proptypes = {
  location: PropTypes.object.isRequired,
}

export default Texts
