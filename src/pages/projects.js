import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import image_one from '../images/D_homepage_image_01.jpg'
import * as styles from '../layouts/styles'
import { css } from 'emotion'
import Link from 'gatsby-link'

//  DONT FORGET TO REMOVE LINK TAG FROM PROJECTS COMPONEN

class Projects extends React.Component {
  render() {
    const { location } = this.props
    return (
      <Layout location={location}>
        <div className={css(styles.projectWrapper)}>
          <div className={css(styles.projectTitle)}>
            <p>Spin Lamp, 2018</p>
          </div>
          <div className={css(styles.imageWrapper)}>
            <img src={image_one} />
          </div>
          <div className={css(styles.textWrapper)}>
            <p>
              Year: 2017
              <br />
              Producer: HAHA studio Project
              <br />
              Assistant: Studio Dejawu
              <br />
              Photo credits: HAHA studio & Charlie Drevstam
            </p>
            <br />
            <p>
              Alia, Latin for “Change”, is a candle holder that does exactly
              that. Made from a single repeating branch, Alia is all about
              creating free compositions. One branch works alone, but stacking
              more is just so much more impressive.
            </p>
            <br />
            <br />
            <br />
            <p>
              Sold in units of 1 or 3. Alia is available for purchase at our{' '}
              <Link to="/retailers/" className={css(styles.Link)}>
                retailers
              </Link>
              , and in our{' '}
              <Link to="/shop/" className={css(styles.Link)}>
                shop
              </Link>
              .
            </p>
            <br />
            <br />
            <br />
            <p>
              <Link to="#" className={css(styles.Link)}>
                Download
              </Link>
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

Projects.proptypes = {
  location: PropTypes.object.isRequired,
}

export default Projects
