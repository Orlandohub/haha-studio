import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import * as styles from '../layouts/styles'
import image_one from '../../images/D_homepage_image_01.jpg'

const About = ({ location }) => (
  <React.Fragment>
    <Layout location={location}>
      <div className={css(styles.abouttWrapper)}>
        <div className={css(styles.aboutTextWrapper)}>
          <p>
            Laughter is instinctive, it can be understood by all of us,
            regardless of the language we speak.
          </p>
          <p>
            HAHA studio is the Stockholm based design practice founded by Arash
            Eskafi and Yujin Chiang in 2015. Hailing from different cultures—
            Scandinavia and East Asia— the studio is in constant search of what
            can be understood by all of us. Like laughter, HAHA relies on
            fundamental shapes, choice materials and universal truths to design
            their iconic work. To create objects that all of us have an
            instinctive response to, HAHA works hand in hand with craftspeople
            in Sweden and Taiwan. The practice designs lighting fixtures,
            accessories, limited editions, and undertakes regular collaborations
            in interior architecture.
          </p>
          <p>
            The studio’s work has been presented by Vitra, FRACAS Gallery,
            Raumplan, Biennale Interieur and Stockholm Furniture Fair. They have
            also showcased their work internationally in Brussels, Denmark,
            London, Milan, New York, and Shanghai.
          </p>
        </div>
        <div className={css(styles.aboutImageWrapper)} />
        <img src={image_one} />
      </div>
    </Layout>
  </React.Fragment>
)

About.proptypes = {
  location: PropTypes.object.isRequired,
}

export default About
