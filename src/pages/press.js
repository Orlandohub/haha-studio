import React from 'react'
import { map } from 'lodash'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import { css } from 'emotion'
import { genericHashLink } from 'react-router-hash-link'
import Link from 'gatsby-link'
import * as styles from '../components/IndexPageStyles/PressStyles/styles'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Media from 'react-media'

const MyHashLink = props => genericHashLink(props, Link)

const Press = ({ location, data }) => {
  const { edges } = data.pressList
  return (
    <Layout location={location}>
      <div className={css(styles.pressWrapper)}>
        <div className={css(styles.pressRightColumn)}>
          <div className={css(styles.pressText)}>
            <p className={css(styles.pressParagraph)}>
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
              <a href="/press/" className={css(styles.pressLink)}>
                Download high-resolution images and media kits
              </a>
              <br />
              <br />
              <a href="/press/" className={css(styles.pressLink)}>
                Download studio profile
              </a>
              <br />
              <br />{' '}
              <a href="/press/" className={css(styles.pressLink)}>
                Download press releases
              </a>
              <br />
              <br />
            </p>
          </div>

          {/*      BOTTOM IMAGE GRID PART        */}
          <div className={css(styles.horizontalLine)}>
          </div>
          <div className={css(styles.pressGrid)}>
            {
              map(edges, (edge, key) => {
                return (
                  <div key={key} className={css(styles.pressImage)}>
                    <MyHashLink to={`${edge.node.fields.slug}#image`}>
                      <div className='pressThumbnailWrap'>
                        <Img className='pressThumbnailCover' fluid={edge.node.frontmatter.cover.childImageSharp.fluid} />
                        <Media query="(min-width: 1024px)">
                          {matches =>
                            matches ?
                              <Img className='pressThumbnailCounterCover' fluid={edge.node.frontmatter.counter_cover.childImageSharp.fluid} />
                              :
                              null
                          }
                        </Media>
                      </div>
                    </MyHashLink>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

Press.proptypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object,
}

export default Press

export const query = graphql`
  query {
    pressList: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "press-page" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            cover {
              childImageSharp {
                fluid(maxWidth: 1060) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
            counter_cover {
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
