import React from 'react'
import { map, isEmpty } from 'lodash'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Img from 'gatsby-image'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  title,
  isSelected,
  year,
  galleryImages,
  cmsImageGallery,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  console.log('cmsImageGallery', cmsImageGallery)
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>Is selected {isSelected}</p>
            <p>year {year}</p>
            <div>
              {
                isEmpty(galleryImages) ? null : map(galleryImages, (img, key) => <Img fluid={img.childImageSharp.fluid}/>)
              }
              {
                isEmpty(cmsImageGallery) ? null : map(cmsImageGallery, (img, key) => <img src={img} key={key} alt=""/>)
              }
            </div>
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  year: PropTypes.string,
  isSelected: PropTypes.bool,
  galleryImages: PropTypes.array,
  cmsImageGallery: PropTypes.array,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={
        <Helmet
          titleTemplate="%s | Blog"
        >
          <title>{`${post.frontmatter.title}`}</title>
          <meta name="description" content={`${post.frontmatter.description}`} />
        </Helmet>
      }
      title={post.frontmatter.title}
      galleryImages={post.frontmatter.galleryImages}
    />
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        galleryImages {
          childImageSharp {
            fluid(maxWidth: 1080) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`
