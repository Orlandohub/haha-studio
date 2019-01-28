import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import { css } from 'emotion'
import * as styles from '../components/IndexPageStyles/PressExpandedStyles/styles'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import NavFooter from '../components/NavigationFooter'
import SEO from '../components/SEO/index'

export const PressPageTemplate = ({ post, pageContext, location }) => {
  return (
    <div className={css(styles.pressExpandedWrapper)}>
      <div className={css(styles.pressExpandedRightColumn)}>
        <div className={css(styles.pressExpandedText)}>
          <p className={css(styles.pressExpandedParagraph)}>
            For press inquiries
            <br />{' '}
            <a href="mailto:press@hahastudio.se" className={css(styles.mailTo)}>
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
          <SEO
            title={'What press has to say about HAHA Studio'}
            description={
              "The studio's work has been presented by Vitra, FRACAS Gallery, Raumplan, Biennale Interieur and Stockholm Furniture Fair.  In 2018 HAHA received the prestigious work grant from the Swedish Arts Committee to further the definition of Scandinavian design. They have also showcased their work internationally in Brussels, Denmark, London, Milan, New York, and Shanghai. "
            }
            //location={location}
            thumbnail={
              post.frontmatter.content_image_left.childImageSharp.fluid.src
            }
          />
          <div className={css(styles.pressExpandedImage)}>
            <Img
              fluid={post.frontmatter.content_image_left.childImageSharp.fluid}
              className={css(styles.Image)}
            />
            <Img
              fluid={post.frontmatter.content_image_right.childImageSharp.fluid}
              className={css(styles.Image)}
            />
          </div>
          <NavFooter
            linkLeft={`${pageContext.prev}#image`}
            linkRight={`${pageContext.next}#image`}
            linkText="/press/"
            text="view all"
          />
        </div>
      </div>
    </div>
  )
}

PressPageTemplate.propTypes = {
  post: PropTypes.object,
  pageContext: PropTypes.object,
}

const PressPage = ({ data, location, pageContext }) => {
  const { markdownRemark: post } = data
  return (
    <Layout location={location}>
      <PressPageTemplate post={post} pageContext={pageContext} />
    </Layout>
  )
}

PressPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object,
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
