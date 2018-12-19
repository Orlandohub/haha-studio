import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import * as styles from '../components/IndexPageStyles/ExplorationStyles/styles'
import { css } from 'emotion'
import image from '../images/hero_image.jpg'
import { graphql } from 'gatsby'

const Exploration = ({ data, location }) => {
  console.log('data', data);
  return(
    <Layout location={location}>
      <div className={css(styles.explorationWrapper)}>
        <div className={css(styles.leftFloatingEmptySpace)} />
        <div className={css(styles.explorationRightColumn)}>
          <div className={css(styles.explorationImageWrapper)}>
            <img src={image} />
          </div>
          <div className={css(styles.explorationText)}>
            <div className={css(styles.explorationHeaderWrapper)}>
              <p className={css(styles.explorationParagraph)}>
                2017.10
                <h2 className={css(styles.explorationHeader)}>
                  The story of our production site in Taiwan{' '}
                </h2>
                <br />
              </p>
            </div>
            <p className={css(styles.explorationParagraph)}>
              Proposing playful products and experience is important for a
              designer. However, when starting HAHA, this was not quite the
              first message we wanted to share, or maybe not the only one. In
              fact, we are quite skeptical about the notion of “playfulness” as
              it is today widely used by cynical marketing agents, gaming groups
              or uninspired creators as a catch-all and empty motto. If we need
              to recognize the essence of our human character as Homo Ludens, we
              believe that’s it is not in the 4 corners of our computer screen,
              neither in the false user-friendly formulas, or the illusionary
              work/play society models that are offered to us today.
            </p>
            <br />
          </div>

          {/*#####################################################*/}

          <div className={css(styles.explorationImageWrapper)}>
            <img src={image} />
          </div>
          <div className={css(styles.explorationText)}>
            <div className={css(styles.explorationHeaderWrapper)}>
              <p className={css(styles.explorationParagraph)}>
                2015.08
                <h2 className={css(styles.explorationHeader)}>
                  Sitting on the back of a Motorbike in southern Taiwan{' '}
                </h2>
                <br />
              </p>
            </div>
            <p className={css(styles.explorationParagraph)}>
              HAHA studio is a Stockholm-based design practice founded by
              Swedish designer Arash Eskafi and Taiwanese designer Yujin Chiang
              that operates across different areas within the design field.
              Since its’ beginning in 2015, the duo has created unique lighting
              fixtures, interior accessories, one-off design pieces and has
              regularly collaborated with local and international clients on
              interior architecture projects and spatial installations. By
              creating objects that “have a story to tell and a statement to
              make,” the studio’s work combines influences from both
              Scandinavian and Asian cultures with a commitment to details and
              quality as well as an interest in cultural forms, heritage, and
              contextual expression. The multicultural backgrounds of the
              designers have continuously forced them to reflect upon
              preconceptions in design and have given them a ground from where
              to develop a novel and contemporary design practice.
            </p>
            <br />
          </div>
        </div>
      </div>
    </Layout>
  )
}

Exploration.proptypes = {
  location: PropTypes.object.isRequired,
}

export default Exploration

export const query = graphql`
  query {
    explorationList: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: {
        frontmatter: {
          templateKey: { eq: "exploration-page" }
        }
      }
    ) {
        edges {
          node {
            id
            frontmatter {
              title
              date
              image {
                childImageSharp {
                  fluid(maxWidth: 1060) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
          }
        }
      }
  }
`
