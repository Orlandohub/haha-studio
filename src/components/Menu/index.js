import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'

import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import { styles } from './styles'

const Header = ({ siteTitle }) => (
  <Grid>
    <Row>
      <Col xs={3}>HAHA STUDIO</Col>
      <Col xs={1}>Projects</Col>
      <Col xs={1}>Studio</Col>
      <Col xs={1}>Contact</Col>
      <Col xs={1} xsOffset={5}>Shop</Col>
    </Row>
    <Row>
      <Col xs={1} xsOffset={3}>
        <ul>
          <li>selected</li>
          <li>archive</li>
        </ul>
      </Col>
    </Row>
  </Grid>
)

export default Header