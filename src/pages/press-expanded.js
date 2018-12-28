import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import { css } from 'emotion'
import * as styles from '../components/IndexPageStyles/PressExpandedStyles/styles'
import keira from '../images/D_press_cover_index_image.png'
import NavFooter from '../components/NavigationFooter'

const Press = ({ location }) => (
  <React.Fragment>
    <Layout location={location}>
      <div className={css(styles.pressExpandedWrapper)}>
        <div className={css(styles.leftFloatingEmptySpace)} />
        <div className={css(styles.pressExpandedRightColumn)}>
          <div className={css(styles.pressExpandedText)}>
            <p className={css(styles.pressExpandedParagraph)}>
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
              <a href="/press/" className={css(styles.pressExpandedLink)}>
                Download high-resolution images and media kits
              </a>
              <br />
              <br />
              <a href="/press/" className={css(styles.pressExpandedLink)}>
                Download studio profile
              </a>
              <br />
              <br />{' '}
              <a href="/press/" className={css(styles.pressExpandedLink)}>
                Download press releases
              </a>
              <br />
              <br />
            </p>
          </div>

          {/* Bottom part */}

          <div className={css(styles.pressExpandedGrid)}>
            <div className={css(styles.pressExpandedImage)}>
              <img id="image" src={keira} className={css(styles.Image)} />
              <img src={keira} className={css(styles.Image)} />
              <NavFooter linkText="/press/" text="view all" />
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
