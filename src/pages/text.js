import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import * as styles from '../components/IndexPageStyles/IndividualTextStyles/styles'
import { css } from 'emotion'
import Link from 'gatsby-link'

const IndividualText = ({ location }) => (
  <React.Fragment>
    <Layout location={location}>
      <div className={css(styles.textWrapper)}>
        <div className={css(styles.leftFloatingEmptySpace)} />
        <div className={css(styles.textRightColumn)}>
          {/*########################*/}
          <div className={css(styles.textText)}>
            <Link to={'#'} className={css(styles.linkText)}>
              <h2 className={css(styles.textHeader)}>
                What is behind a laughter and how we came to name our studio
                after it.{' '}
              </h2>
              <br />
              <br />
              <p className={css(styles.textParagraph)}>
                Proposing playful products and experience is important for a
                designer. However, when starting HAHA, this was not quite the
                first message we wanted to share, or maybe not the only one. In
                fact, we are quite skeptical about the notion of “playfulness”
                as it is today widely used by cynical marketing agents, gaming
                groups or uninspired creators as a catch-all and empty motto. If
                we need to recognize the essence of our human character as Homo
                Ludens, we believe that’s it is not in the 4 corners of our
                computer screen, neither in the false user-friendly formulas, or
                the illusionary work/play society models that are offered to us
                today.
              </p>
              <br />
              <p className={css(styles.textParagraph)}>
                For us, HAHA is first an interjection, an intuitive reaction to
                something that might be funny, uncomfortable or embarrassing. It
                is also a social response, a sign of participation and presence.
                And that is how we like to interpret our name; laughing is
                instinctive, it is a vocal expression that can be understood by
                all of us regardless of the language we talk. We see the role of
                design similarly. Naive - in the form only - the design we want
                to make promote emotions and intuitive expression. Inclusive -
                but not for the mass - our design search to cross boundaries
                without losing quality. As designers, we focus on form and
                emotion, but also on qualitative materials, techniques, and
                concepts.
              </p>
              <br />
            </Link>
          </div>
          {/*#############     FOOTER GOES HERE      ###########*/}
        </div>
      </div>
    </Layout>
  </React.Fragment>
)

IndividualText.proptypes = {
  location: PropTypes.object.isRequired,
}

export default IndividualText
