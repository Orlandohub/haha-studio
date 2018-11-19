import React, { Component } from 'react'
import { css } from 'emotion'
import { Grid, Row, Col } from 'react-bootstrap'
import hero_image from '../../images/hero_image.jpg'
import { styles } from './styles'

class Projects extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={2} md={3}>
            <p className={css(styles.projectTitle)}>Spin Lamp, 2018</p>
          </Col>
          <Col xs={10} md={9}><img style={{ height: 894, marginTop: 40 }} src={hero_image} /></Col>
        </Row>
        <Row>
          <Col xs={2} md={3}>
            <p className={css(styles.projectTitle)}>Liberty Lamp, 2018</p>
          </Col>
          <Col xs={10} md={9}><img style={{ height: 894, marginTop: 40 }} src={hero_image} /></Col>
        </Row>
        <Row>
          <Col xs={2} md={3}>
            <p className={css(styles.projectTitle)}>Alia, 2017</p>
          </Col>
          <Col xs={10} md={9}><img style={{ height: 894, marginTop: 40 }} src={hero_image} /></Col>
        </Row>
      </Grid>
    )
  }
}

export default Projects
