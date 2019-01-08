import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Carousel from '../components/Carousel'
import Layout from '../layouts'
import { css } from 'emotion'
import * as styles from '../components/IndexPageStyles/ProjectStyles/styles'

export const ProjectsTemplate = ({
  location,
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
  console.log('galleryImages', galleryImages)
  return (
    <Layout location={location}>
      <div className={css(styles.projectWrapper)}>
        <div className={css(styles.projectTitle)}>
          <p className={css(styles.styledParagraph)}>
            {title}, {year}
          </p>
        </div>
        <div className={css(styles.imageWrapper)}>
          <Carousel images={galleryImages} />
        </div>
        <div className={css(styles.textWrapper)}>
          <p className={css(styles.styledParagraph)}>
            Year: {year}
            <br />
            Producer: {producer}
            <br />
            Assistant: {projectAssistant}
            <br />
            Photo credits: {photoCredits}
          </p>
          <br />
          <p className={css(styles.styledParagraph)}>
            <PostContent content={content} />
          </p>
        </div>
      </div>
    </Layout>
  )
}

ProjectsTemplate.propTypes = {
  location: PropTypes.object.isRequired,
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
  return (
    <ProjectsTemplate
      content={post.html}
      contentComponent={HTMLContent}
      helmet={
        <Helmet titleTemplate="%s | Blog">
          <title>{`${post.frontmatter.title}`}</title>
          <meta
            name="description"
            content={`${post.frontmatter.description}`}
          />
        </Helmet>
      }
      title={post.frontmatter.title}
      year={post.frontmatter.year}
      producer={post.frontmatter.producer}
      projectAssistant={post.frontmatter.project_assistant}
      photoCredits={post.frontmatter.photo_credits}
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
        year
        producer
        project_assistant
        photo_credits
        image_gallery {
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
`
