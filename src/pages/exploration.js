import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import { map } from 'lodash'
import * as styles from '../components/IndexPageStyles/ExplorationStyles/styles'
import { css } from 'emotion'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const Exploration = ({ data, location }) => {
  const { edges } = data.explorationList

  return (
    <Layout
      location={location}
      title={'Explore HAHA Studio'}
      description={'HAHA Studio exploration articles and stories'}
    >
      <div className={css(styles.explorationWrapper)}>
        <div className={css(styles.explorationRightColumn)}>
          {map(edges, edge => {
            return (
              <React.Fragment key={edge.node.id}>
                <div className={css(styles.explorationImageWrapper)}>
                  <Img
                    fluid={edge.node.frontmatter.image.childImageSharp.fluid}
                  />
                </div>
                <div className={css(styles.explorationText)}>
                  <div className={css(styles.explorationHeaderWrapper)}>
                    <p className={css(styles.explorationParagraphDate)}>
                      {edge.node.frontmatter.date}
                    </p>
                    <h2 className={css(styles.explorationHeader)}>
                      {edge.node.frontmatter.title}{' '}
                    </h2>
                  </div>
                  <p className={css(styles.explorationParagraph)}>
                    {edge.node.internal.content}
                  </p>
                </div>
              </React.Fragment>
            )
          })}
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
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "exploration-page" } } }
    ) {
      edges {
        node {
          id
          internal {
            content
          }
          frontmatter {
            title
            date(formatString: "YYYY.MM")
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
