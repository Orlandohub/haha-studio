import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'react-emotion'
import arrow from '../../images/arrow.png'
import { styles } from './styles'
import { Grid, Row, Col } from 'react-bootstrap'

import Img from 'gatsby-image'

class Hero extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      logoLoaderIsVisible: true
    }
  }
  componentDidMount() {
    setTimeout(
      function() {
        this.setState({
          logoLoaderIsVisible: false
        })
      }
        .bind(this),
      3000
    )
  }
  render() {
    const { data } = this.props
    const { logoLoaderIsVisible } = this.state
    return (
      <div data-cy="hero">
        <div className={css(styles.HeroImageWrapper)}>
          <div className={logoLoaderIsVisible ? css(styles.HeroLogoLoader) : css(styles.HiddenHeroLogoLoader)}>
            <Grid bsClass={`container ${css(styles.HeroLogoContainer)}`}>
              <Row>
                <Col xs={12}>
                  <Img
                    fluid={data.fileName.childImageSharp.fluid}
                  />
                </Col>
              </Row>
            </Grid>
          </div>
          <div className={css(styles.ArrowContainer)}>
            <img
              data-cy="arrow"
              className={css(styles.Img)}
              src={arrow}
              alt="arrow"
            />
          </div>
        </div>
      </div>
    )
  }
}

Hero.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Hero
