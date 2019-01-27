import React from 'react'
import { map } from 'lodash'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import Link from 'gatsby-link'
import { css } from 'react-emotion'
import * as styles from '../components/IndexPageStyles/ShopPageStyles/styles'
import ShopNavigation from '../components/ShopNavigation/index'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/SEO/index'

const Shop = ({ location, data }) => {
  const { projectsList: posts } = data
  const { edges } = posts
  return (
    <Layout location={location}>
      <SEO>
        title={'HAHA Studio Shop'}
        description={'HAHA Studio shop! buy our exclusive products! Now!'}{' '}
      </SEO>
      <div className={css(styles.shopWrapper)}>
        <div className={css(styles.shopRightColumn)}>
          {map(edges, edge => {
            return (
              <div key={edge.node.id} className={css(styles.shopImage)}>
                <Link to={edge.node.fields.slug}>
                  <Img
                    fluid={
                      edge.node.frontmatter.cover_image.childImageSharp.fluid
                    }
                  />
                </Link>
                <div className={css(styles.shopText)}>
                  {edge.node.frontmatter.title} <br />
                  {edge.node.frontmatter.price} &#8364;
                </div>
              </div>
            )
          })}
        </div>
        <ShopNavigation />
      </div>
    </Layout>
  )
}

Shop.proptypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}

export default Shop

export const query = graphql`
  query {
    projectsList: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "product-page" }
          is_active: { eq: true }
        }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            price
            cover_image {
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
