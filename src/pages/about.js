import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import { css } from 'emotion'
import * as styles from '../layouts/styles'
import portrait from '../images/D_portrait_image.jpg'

const About = ({ location }) => (
  <React.Fragment>
    <Layout location={location}>
      <div className={css(styles.aboutWrapper)}>
        <div className={css(styles.leftFloatingEmptySpace)} />
        <div className={css(styles.aboutRightColumn)}>
          <div className={css(styles.aboutText)}>
            <p className={css(styles.styledAboutParagraph)}>
              Laughter is instinctive, it can be understood by all of us,
              regardless of the language we speak.
            </p>
            <br />
            <p className={css(styles.styledAboutParagraph)}>
              HAHA studio is the Stockholm based design practice founded by
              Arash Eskafi and Yujin Chiang in 2015. Hailing from different
              cultures— Scandinavia and East Asia— the studio is in constant
              search of what can be understood by all of us. Like laughter, HAHA
              relies on fundamental shapes, choice materials and universal
              truths to design their iconic work. To create objects that all of
              us have an instinctive response to, HAHA works hand in hand with
              craftspeople in Sweden and Taiwan. The practice designs lighting
              fixtures, accessories, limited editions, and undertakes regular
              collaborations in interior architecture.
            </p>
            <br />
            <p className={css(styles.styledAboutParagraph)}>
              The studio’s work has been presented by Vitra, FRACAS Gallery,
              Raumplan, Biennale Interieur and Stockholm Furniture Fair. They
              have also showcased their work internationally in Brussels,
              Denmark, London, Milan, New York, and Shanghai.
            </p>
          </div>
          <div className={css(styles.aboutImageWrapper)}>
            <img src={portrait} />
          </div>
        </div>
      </div>
    </Layout>
  </React.Fragment>
)

About.proptypes = {
  location: PropTypes.object.isRequired,
}

export default About
