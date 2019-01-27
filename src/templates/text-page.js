import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import { css } from 'emotion'
import * as styles from '../components/IndexPageStyles/IndividualTextStyles/styles'
import NavFooter from '../components/NavigationFooter'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import SEO from '../components/SEO/index'

export const TextPageTemplate = ({
  content,
  contentComponent,
  title,
  pageContext,
}) => {
  const PageContent = contentComponent || Content
  return (
    <div className={css(styles.textWrapper)}>
      <div className={css(styles.textRightColumn)}>
        {/*########################*/}
        <div className={css(styles.textText)}>
          <h2 className={css(styles.textHeader)}>{title}</h2>
          <div className={css(styles.textParagraph)}>
            <PageContent className="content" content={content} />
          </div>
        </div>
        <NavFooter
          linkLeft={pageContext.prev}
          linkRight={pageContext.next}
          linkText="/texts/"
          text="back"
        />
      </div>
    </div>
  )
}

TextPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  pageContext: PropTypes.object.isRequired,
}

const TextPage = ({ data, location, pageContext }) => {
  const { markdownRemark: post } = data
  return (
    <Layout location={location}>
      <SEO title={post.frontmatter.title} description={post.html} />
      <TextPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
        pageContext={pageContext}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

TextPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default TextPage

export const textPageQuery = graphql`
  query TextPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
