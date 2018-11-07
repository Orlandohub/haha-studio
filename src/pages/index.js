import React from 'react'
import Layout from '../layouts'
import Hero from '../components/Hero'
import { Grid, Row, Col } from 'react-bootstrap'

const IndexPage = () => (
  <>
    <Hero />
    <Layout>
      <Grid>
        <Row>
          <Col xs={12}>CONTENT</Col>
        </Row>
      </Grid>
    </Layout>
  </>
)

export default IndexPage
