import React from 'react'
import hero_image from '../images/hero_image.jpg'
import Layout from '../layouts/index'
import Hero from '../components/Hero'
import { Grid, Row, Col } from 'react-bootstrap'

const IndexPage = () => (
  <>
    <Hero />
    <Layout>
      <Grid>
        <Row>
          <Col xs={3}>CONTENT</Col>
          <Col xs={8}><img src={hero_image} /></Col>
          <Col xs={1}><img src={hero_image} /></Col>
        </Row>
        <Row>
          <Col xs={3}>CONTENT 2</Col>
          <Col xs={9}><img src={hero_image} /></Col>
        </Row>
      </Grid>
    </Layout>
  </>
)

export default IndexPage
