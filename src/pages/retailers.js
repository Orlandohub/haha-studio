import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import Layout from '../layouts'
import * as styles from '../components/IndexPageStyles/RetailersStyles/styles'
import SEO from '../components/SEO'

const Retailers = ({ location }) => (
  <Layout location={location}>
    <SEO
      title={'HAHA Studio retailers'}
      description={
        'HAHA Studio distribuitors, retailers, where you can buy our products'
      }
      //location={location}
    />
    <div className={css(styles.retailersWrapper)}>
      <div className={css(styles.leftFloatingEmptySpace)} />

      <div className={css(styles.retailersRightColumn)}>
        <div className={css(styles.retailersText)}>
          {/*##################   LEFT COLUMN   ##################*/}

          <div className={css(styles.leftTextColumn)}>
            <div className={css(styles.retailersParagraph)}>
              <h2 className={css(styles.retailersHeader)}>Aplace</h2>
              All stores and webshop
              <br />
              www.aplace.com
              <br />
              <br />
              <br className={css(styles.noBr)} />
              <br className={css(styles.noBr)} />
              <h2 className={css(styles.retailersHeader)}>Designtorget</h2>
              All stores and webshop
              <br />
              www.designtorget.se
              <br />
              <br />
              <br className={css(styles.noBr)} />
              <br className={css(styles.noBr)} />
              <h2 className={css(styles.retailersHeader)}>Grått</h2>
              Baggensgatan 12
              <br />
              Kalmar, Sweden
              <br />
              www.gratt.se
              <br />
              <br className={css(styles.noBr)} />
              <br className={css(styles.noBr)} />
              <h2 className={css(styles.retailersHeader)}>Om.design</h2>
              Lejonsgatan 4C
              <br /> Kalix, Sweden
              <br /> www.omdesign.se
              <br />
              <br className={css(styles.noBr)} />
              <br className={css(styles.noBr)} />
              <h2 className={css(styles.retailersHeader)}>1stdibs</h2>
              Webshop
              <br />
              www.1stdibs.com
              <br />
              <br className={css(styles.noBr)} />
              <br className={css(styles.noBr)} />
              <h2 className={css(styles.retailersHeader)}>Pamono</h2>
              Webshop
              <br /> www.pamono.com
              <br />
            </div>
          </div>
          {/*##################   RIGHT COLUMN   ##################*/}

          <div className={css(styles.rightTextColumn)}>
            <div className={css(styles.retailersParagraph)}>
              <h2 className={css(styles.retailersHeader)}>Betonggruvan</h2>
              Roslagsgatan 25
              <br />
              Stockholm, Sweden
              <br />
              www.betonggruvan.se
              <br />
              <br className={css(styles.noBr)} />
              <br className={css(styles.noBr)} />
              <h2 className={css(styles.retailersHeader)}>Fracas Gallery</h2>
              Rue des Chartreux
              <br />
              Brussels, Belgium
              <br />
              www.fracas-online.com
              <br />
              <br className={css(styles.noBr)} />
              <br className={css(styles.noBr)} />
              <h2 className={css(styles.retailersHeader)}>Mimou</h2>
              Gamla Landsvägen 2
              <br />
              Ronneby, Sweden
              <br />
              www.mimou.se
              <br />
              <br className={css(styles.noBr)} />
              <br className={css(styles.noBr)} />
              <h2 className={css(styles.retailersHeader)}>The Home Company</h2>
              Parkgatan 3
              <br />
              Karlskrona, Sweden
              <br />
              www.homecompany.se
              <br />
              <br className={css(styles.noBr)} />
              <br className={css(styles.noBr)} />
              <h2 className={css(styles.retailersHeader)}>Designonline</h2>
              Webshop
              <br />
              Sweden
              <br />
              www.designonline.se
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

Retailers.proptypes = {
  location: PropTypes.object.isRequired,
}

export default Retailers
