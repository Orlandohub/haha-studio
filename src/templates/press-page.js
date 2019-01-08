import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import { css } from 'emotion'
import * as styles from '../components/IndexPageStyles/PressExpandedStyles/styles'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import NavFooter from '../components/NavigationFooter'

export const PressPageTemplate = ({ post }) => {
  return (
    <div className={css(styles.pressExpandedWrapper)}>
      <div className={css(styles.pressExpandedRightColumn)}>
        <div className={css(styles.pressExpandedText)}>
          <p className={css(styles.pressExpandedParagraph)}>
            For press inquiries
            <br />{' '}
            <a
              href="mailto:press@hahastudio.se"
              className={css(styles.mailTo)}
            >
              press@hahastudio.se
            </a>
            <br />
            <br />{' '}
            <a href="/press/" className={css(styles.pressExpandedLink)}>
              Download high-resolution images and media kits
            </a>
            <br />
            <br />
            <a href="/press/" className={css(styles.pressExpandedLink)}>
              Download studio profile
            </a>
            <br />
            <br />{' '}
            <a href="/press/" className={css(styles.pressExpandedLink)}>
              Download press releases
            </a>
            <br />
            <br />
          </p>
        </div>

        {/* Bottom part */}

        <div className={css(styles.pressExpandedGrid)} id="image">
          <div className={css(styles.pressExpandedImage)}>
            <Img fluid={post.frontmatter.content_image_left.childImageSharp.fluid} />
            <Img fluid={post.frontmatter.content_image_right.childImageSharp.fluid} />
            <NavFooter
              linkLeft="/find-us/"
              linkRight="/retailers/"
              linkText="/press/"
              text="view all"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

PressPageTemplate.propTypes = {
  post: PropTypes.object,
}

const PressPage = ({ data, location }) => {
  const { markdownRemark: post } = data
  
  return (
    <Layout location={location}>
      <PressPageTemplate
        post={post}
      />
    </Layout>
  )
}

PressPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}

export default PressPage

export const pressPageQuery = graphql`
  query PressPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        content_image_left {
          childImageSharp {
            fluid(maxWidth: 1060) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        content_image_right {
          childImageSharp {
            fluid(maxWidth: 1060) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`