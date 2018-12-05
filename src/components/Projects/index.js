import React, { Component } from 'react'
import { css } from 'emotion'
import { Grid, Row, Col } from 'react-bootstrap'
import image_one from '../../images/D_homepage_image_01.jpg'
import { styles } from './styles'

class Projects extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={2} md={3}>
            <p className={css(styles.projectTitle)}>Spin Lamp, 2018</p>
          </Col>
          <Col xs={10} md={9}><img style={{ marginTop: 40 }} src={image_one} /></Col>
        </Row>
        <Row>
          <Col xs={2} md={3}>
            <p className={css(styles.projectTitle)}>Liberty Lamp, 2018</p>
          </Col>
          <Col xs={10} md={9}><img style={{ marginTop: 40 }} src={image_one} /></Col>
        </Row>
      </Grid>
    )
  }
}

export default Projects
