import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Carousel from '../components/Carousel'
import Layout from '../layouts'
import { css } from 'emotion'
import NavFooter from '../components/NavigationFooter'
import * as styles from '../components/IndexPageStyles/ProjectStyles/styles'
import SEO from '../components/SEO/index'

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
  pageContext,
}) => {
  const PostContent = contentComponent || Content
  return (
    <Layout location={location}>
      <SEO
        title={title}
        description={content}
        //location={location}
        thumbnail={galleryImages[0].image.childImageSharp.fluid.src}
      />

      <div id="project" className={css(styles.projectWrapper)}>
        <div className={css(styles.projectTitleSliderWrap)}>
          <div className={css(styles.projectTitle)}>
            <p className={css(styles.styledParagraph)}>
              {title}, {year}
            </p>
          </div>
          <div className={css(styles.imageWrapper)}>
            <Carousel images={galleryImages} />
          </div>
        </div>
        <div className={css(styles.projectTitle)} />
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
          <div className={css(styles.styledParagraph)}>
            <PostContent content={content} />
          </div>
        </div>
        <div className={css(styles.footerWrap)}>
          <NavFooter
            linkLeft={`${pageContext.prev}#project`}
            linkRight={`${pageContext.next}#project`}
            linkText="/selected/"
            text="view all"
          />
        </div>
      </div>
    </Layout>
  )
}

ProjectsTemplate.propTypes = {
  pageContext: PropTypes.object,
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

const Project = ({ data, pageContext, location }) => {
  const { markdownRemark: post } = data
  return (
    <ProjectsTemplate
      content={post.html}
      contentComponent={HTMLContent}
      location={location}
      pageContext={pageContext}
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
  location: PropTypes.object,
  pageContext: PropTypes.object,
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
