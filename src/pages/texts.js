import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import * as styles from '../components/IndexPageStyles/TextsStyles/styles'
import { css } from 'emotion'
import Link from 'gatsby-link'
import { map } from 'lodash'
import { graphql } from 'gatsby'
import SEO from '../components/SEO/index'

const Texts = ({ location, data }) => {
  const { edges } = data.textsList
  return (
    <Layout location={location}>
      <SEO
        title={'HAHA Studio texts page'}
        description={
          'Proposing playful products and experience is important for a designer. However, when starting HAHA, this was not quite the first message we wanted to share, or maybe not the only one. In fact, we are quite skeptical about the notion of “playfulness” as it is today widely used by cynical marketing agents, gaming groups or uninspired creators as a catch-all and empty motto. If we need to recognize the essence of our human character as Homo Ludens, we believe that’s it is not in the 4 corners of our computer screen, neither in the false user-friendly formulas, or the illusionary work/play society models that are offered to us today.'
        }
        location={location}
      />
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
                <p className={css(styles.textParagraph)}>
                  {edge.node.excerpt}{' '}
                  <Link
                    to={edge.node.fields.slug}
                    className={css(styles.linkText)}
                  >
                    <u>read more</u>
                  </Link>
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
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
          excerpt(pruneLength: 150)
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
