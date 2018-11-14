import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'react-emotion'
import arrow from '../../images/arrow.png'
import { styles } from './styles'
import { Subscribe } from 'unstated'
import CurrentPageContainer from '../../state/CurrentPageContainer'
import { Grid, Row, Col } from 'react-bootstrap'

import Img from 'gatsby-image'

const Hero = ({ data }) => {
  return (
    <Subscribe to={[CurrentPageContainer]}>
      {currentPage => (
        <div data-cy="hero">
          {currentPage.state.showHero ? (
            <div className={css(styles.HeroImageWrapper)}>
              {
                currentPage.state.logoLoaderIsVisible ?
                  <div className={css(styles.HeroLogoLoader)}>
                    <Grid bsClass={`container ${css(styles.HeroLogoContainer)}`}>
                      <Row>
                        <Col xs={12}>
                          <Img onLoad={() => currentPage.hideLogoLoader()} fluid={data.fileName.childImageSharp.fluid} />
                        </Col>
                      </Row>
                    </Grid>
                  </div>
                  :
                  <div className={css(styles.HiddenHeroLogoLoader)}>
                    <Grid bsClass={`container ${css(styles.HeroLogoContainer)}`}>
                      <Row>
                        <Col xs={12}>
                          <Img fluid={data.fileName.childImageSharp.fluid} />
                        </Col>
                      </Row>
                    </Grid>
                  </div>
              }

              <div className={css(styles.ArrowContainer)}>
                <img
                  data-cy="arrow"
                  className={css(styles.Img)}
                  src={arrow}
                  alt="arrow"
                  onClick={() => currentPage.toggleHero()}
                />
              </div>
            </div>
          ) : (
            <div className={css(styles.HideHero)}>
              <div className={css(styles.HideArrow)}>
                <img
                  className={css(styles.HideArrow)}
                  src={arrow}
                  alt="arrow"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </Subscribe>
  )
}

Hero.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Hero
