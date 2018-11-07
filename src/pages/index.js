import React, { Component } from 'react'
import Layout from '../layout/layout'

import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';


class IndexPage extends Component {
  render() {
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
