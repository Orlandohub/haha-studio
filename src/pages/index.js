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
          <Col xs={12}>CONTENT</Col>
        </Row>
      </Grid>
    </Layout>
  </React.Fragment>
)

IndexPage.proptypes = {
  location: PropTypes.object.isRequired
}

export default IndexPage
