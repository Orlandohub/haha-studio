import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import { css } from 'emotion'
import * as styles from '../components/IndexPageStyles/FindUsStyles/styles'
import SEO from '../components/SEO'

const FindUs = ({ location }) => (
  <Layout location={location}>
    <SEO
      title={'HAHA Studio contacts'}
      description={
        'HAHA Staff, HAHA contacts, HAHA social media, We are here, come and find us, Pipersgatan 14, 112 24 Stockholm, Sweden, Yujin Chiang, Arash Eskafi'
      }
      //location={location}
    />
    <div className={css(styles.findUsWrapper)}>
      <div className={css(styles.findUsRightColumn)}>
        <p className={css(styles.findUsParagraph)}>
          HAHA studio
          <br /> Pipersgatan 14
          <br /> 112 24 Stockholm
          <br /> Sweden
          <br />
          <br /> Yujin Chiang
          <br />
          Designer / Founder
          <br /> yujin@hahastudio.se
          <br /> T +46 707 68 66 02
          <br />
          <br /> Arash Eskafi
          <br /> Designer / Founder
          <br /> arash@hahastudio.se
          <br /> T +46 769 41 80 80
          <br />
          <br />
          <a
            href="https://www.instagram.com/hahadesignstudio/"
            className={css(styles.findUsLink)}
            target="blank"
          >
            <u>Instagram</u>
          </a>
          <br />
          <a
            href="https://www.facebook.com/hahadesignstudio/"
            className={css(styles.findUsLink)}
            target="blank"
          >
            <u>Facebook</u>
          </a>
          <br />
          <a
            href="https://www.linkedin.com/company/haha-design-company/"
            className={css(styles.findUsLink)}
            target="blank"
          >
            <u>Linkedin</u>
          </a>
          <br />
          <br /> Credits
          <br />
          Website by <u>Anna Heck</u>
          <br /> Programming by <u>Orlando Goncalves</u>
          <br />
          <br /> HAHA studio all rights reserved
        </p>
      </div>
    </div>
  </Layout>
)

FindUs.proptypes = {
  location: PropTypes.object.isRequired,
}

export default FindUs
