import React, { Component } from 'react'
// import Link from 'gatsby-link'
import Layout from '../components/layout'

import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';


class IndexPage extends Component {
  render() {
    console.log('this.props', this.props);
    return (
      <Layout >      
        <Grid>
          <Row>
            <Col xs={12}>CONTENT</Col>
          </Row>
        </Grid>
      </Layout>  
    )
  }
}


export default IndexPage
