import React from 'react'
import { map, isEmpty } from 'lodash'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Img from 'gatsby-image'

export const ProjectsTemplate = ({
  content,
  contentComponent,
  title,
  isSelected,
  projectAssistant,
  photoCredits,
  producer,
  year,
  galleryImages,
  cmsImageGallery,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>Is selected: {isSelected ? 'Yes' : 'No'}</p>
            <p>year: {year}</p>
            <p>Project Assistant: {projectAssistant}</p>
            <p>Photo Credits: {photoCredits}</p>
            <p>Producer: {producer}</p>
            <div>
              {
                isEmpty(galleryImages) ? null : map(galleryImages, (img, key) => <Img fluid={img.childImageSharp.fluid}/>)
              }
            </div>
            {cmsImageGallery}
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}


ProjectsTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  year: PropTypes.string,
  isSelected: PropTypes.bool,
  projectAssistant: PropTypes.string,
  photoCredits: PropTypes.string,
  producer: PropTypes.string,
  galleryImages: PropTypes.array,
  cmsImageGallery: PropTypes.object,
  helmet: PropTypes.object,
}

const Project = ({ data }) => {
  const { markdownRemark: post } = data
  console.log('post', post)
  return (
    <ProjectsTemplate
      content={post.html}
      contentComponent={HTMLContent}
      helmet={
        <Helmet
          titleTemplate="%s | Blog"
        >
          <title>{`${post.frontmatter.title}`}</title>
          <meta name="description" content={`${post.frontmatter.description}`} />
        </Helmet>
      }
      title={post.frontmatter.title}
      galleryImages={post.frontmatter.image_gallery}
    />
  )
}

Project.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Project

export const pageQuery = graphql`
  query ProjectByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
