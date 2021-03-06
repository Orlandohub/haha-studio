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
              <br />


              <br className={css(styles.noBr)} />
              <br className={css(styles.noBr)} />
              <h2 className={css(styles.retailersHeader)}>Länna Möbler</h2>
              Gamla Nynäsvägen 606
              <br />
              Skogås, Sweden
              <br />
              www.lannamobler.se
              <br />


              <br className={css(styles.noBr)} />
              <br className={css(styles.noBr)} />
              <h2 className={css(styles.retailersHeader)}>Deco Studio</h2>
              Knäppingsborgsgatan 7
              <br />
              Norrköping, Sweden
              <br />
              www.decostudio.se
              <br />


              <br className={css(styles.noBr)} />
              <br className={css(styles.noBr)} />
              <h2 className={css(styles.retailersHeader)}>Moderna Museet</h2>
              Exercisplan 4
              <br />
              Stockholm, Sweden
              <br />
              webshop.modernamuseet.se
              <br />

              <br className={css(styles.noBr)} />
              <br className={css(styles.noBr)} />
              <h2 className={css(styles.retailersHeader)}>S/K/E/K/K</h2>
              Hofsvallagata 22
              <br />
              Reykjavík, Iceland
              <br />
              www.skekk.com
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
              <h2 className={css(styles.retailersHeader)}>Designonline</h2>
              Webshop
              <br />
              Sweden
              <br />
              www.designonline.se
              <br />


              <br className={css(styles.noBr)} />
              <br className={css(styles.noBr)} />
              <h2 className={css(styles.retailersHeader)}>Lidéns Möbler</h2>
              Västra Långgatan 2
              <br />
              Säter, Sweden
              <br />
              www.lidensmobler.se
              <br />


              <br className={css(styles.noBr)} />
              <br className={css(styles.noBr)} />
              <h2 className={css(styles.retailersHeader)}>Lilla Byrån</h2>
              Horsekullevägen 34
              <br />
              Onsala, Sweden
              <br />
              www.lillabyran.com
              <br />


              <br className={css(styles.noBr)} />
              <br className={css(styles.noBr)} />
              <h2 className={css(styles.retailersHeader)}>Kontor Ett</h2>
              Lindövägen 41
              <br />
              Norrköping, Sweden
              <br/>
              www.kontorett.se
              <br/>


              <br className={css(styles.noBr)} />
              <br className={css(styles.noBr)} />
              <h2 className={css(styles.retailersHeader)}>G.A.D Stockholm</h2>
              Tegnérgatan 4
              <br />
              Stockholm, Sweden
              <br/>
              www.gad.se
              <br/>

              <br className={css(styles.noBr)} />
              <br className={css(styles.noBr)} />
              <h2 className={css(styles.retailersHeader)}>Magasin Severin</h2>
              Odalvägen 7
              <br />
              Kalmar, Sweden
              <br/>
              magasinseverin.se
              <br/>

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
