import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import * as styles from '../components/IndexPageStyles/TextsStyles/styles'
import { css } from 'emotion'
import Link from 'gatsby-link'

const Texts = ({ location }) => (
  <React.Fragment>
    <Layout location={location}>
      <div className={css(styles.textsWrapper)}>
        <div className={css(styles.leftFloatingEmptySpace)} />

        <div className={css(styles.textsRightColumn)}>
          {/*########################*/}

          <div className={css(styles.textsText)}>
            <Link to={'#'} className={css(styles.linkText)}>
              <h2 className={css(styles.textsHeader)}>
                What is behind a laughter and how we came to name our studio
                after it.
              </h2>
              <br />
              <br />

              <p className={css(styles.textsParagraph)}>
                Proposing playful products and experience is important for a
                designer. However, when starting HAHA, this was not quite the
                first message we wanted to share, or maybe not the only one. In
                fact, we are quite skeptical about the notion of “playfulness”
                as it is today widely used by cynical marketing agents, gaming
                groups or … read more
              </p>
              <br />
            </Link>
          </div>

          {/*########################*/}

          <div className={css(styles.textsText)}>
            <Link to={'#'} className={css(styles.linkText)}>
              <h2 className={css(styles.textsHeader)}>
                What is behind a laughter and how we came to name our studio
                after it.{' '}
              </h2>
              <br />
              <br />
              <p className={css(styles.textsParagraph)}>
                What is behind a laughter and how we came to name our studio
                after it. Proposing playful products and experience is important
                for a designer. However, when starting HAHA, this was not quite
                the first message we wanted to share, or maybe not the only one.
                In fact, we are quite skeptical about the notion of
                “playfulness” as it is today widely used by cynical marketing
                agents, gaming groups or … read more
              </p>
              <br />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  </React.Fragment>
)

Texts.proptypes = {
  location: PropTypes.object.isRequired,
}

export default Texts
