import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import * as styles from '../components/IndexPageStyles/TextsStyles/styles'
import { css } from 'emotion'
import Link from 'gatsby-link'
import { map } from 'lodash'

import { graphql } from 'gatsby'

const Texts = ({ location, data }) => {
  const { edges } = data.textsList
  return (
    <React.Fragment>
      <Layout location={location}>
        <div className={css(styles.textWrapper)}>
          <div className={css(styles.textRightColumn)}>
            {map(edges, edge => {
              return (
                <div key={edge.node.id} className={css(styles.textText)}>
                  <h2 className={css(styles.textHeader)}>
                    <Link
                      to={edge.node.fields.slug}
                      className={css(styles.linkText)}
                    >
                      {edge.node.frontmatter.title}
                    </Link>
                  </h2>
                  <br />
                  <br />

                  <p className={css(styles.textParagraph)}>
                    {edge.node.excerpt}{' '}
                    <Link
                      to={edge.node.fields.slug}
                      className={css(styles.linkText)}
                    >
                      <u>read more</u>
                    </Link>
                  </p>
                  <br />
                </div>
              )
            })}
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

Texts.proptypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object,
}

export default Texts

export const query = graphql`
  query {
    textsList: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "text-page" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 240)
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
          }
        }
      }
    }
  }
`
