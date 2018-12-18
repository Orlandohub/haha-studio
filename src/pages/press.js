import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import { css } from 'emotion'
import Link from 'gatsby-link'
import * as styles from '../components/IndexPageStyles/PressStyles/styles'
import keira from '../images/D_press_cover_index_image.png'

const Press = ({ location }) => (
  <React.Fragment>
    <Layout location={location}>
      <div className={css(styles.pressWrapper)}>
        <div className={css(styles.leftFloatingEmptySpace)} />

        <div className={css(styles.pressRightColumn)}>
          <div className={css(styles.pressText)}>
            <p className={css(styles.pressParagraph)}>
              For press inquiries
              <br />{' '}
              <a
                href="mailto:press@hahastudio.se"
                className={css(styles.mailTo)}
              >
                press@hahastudio.se
              </a>
              <br />
              <br />{' '}
              <a href="/press/" className={css(styles.pressLink)}>
                Download high-resolution images and media kits
              </a>
              <br />
              <br />
              <a href="/press/" className={css(styles.pressLink)}>
                Download studio profile
              </a>
              <br />
              <br />{' '}
              <a href="/press/" className={css(styles.pressLink)}>
                Download press releases
              </a>
              <br />
              <br />
            </p>
          </div>

          {/*ddfsdfds*/}

          <div className={css(styles.pressGrid)}>
            <div className={css(styles.pressImage)}>
              <Link to={'/press-expanded/'}>
                <div className={css(styles.pressCover)} />
              </Link>
            </div>
            <div className={css(styles.pressImage)}>
              <Link to={'/press-expanded/'}>
                <div className={css(styles.pressCover)} />
              </Link>
            </div>
            <div className={css(styles.pressImage)}>
              <Link to={'/press-expanded/'}>
                <div className={css(styles.pressCover)} />
              </Link>
            </div>
            <div className={css(styles.pressImage)}>
              <Link to={'/press-expanded/'}>
                <div className={css(styles.pressCover)} />
              </Link>
            </div>
            <div className={css(styles.pressImage)}>
              <Link to={'/press-expanded/'}>
                <div className={css(styles.pressCover)} />
              </Link>
            </div>
            <div className={css(styles.pressImage)}>
              <Link to={'/press-expanded/'}>
                <div className={css(styles.pressCover)} />
              </Link>
            </div>
            <div className={css(styles.pressImage)}>
              <Link to={'/press-expanded/'}>
                <div className={css(styles.pressCover)} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </React.Fragment>
)

Press.proptypes = {
  location: PropTypes.object.isRequired,
}

export default Press
