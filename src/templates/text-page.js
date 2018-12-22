import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import { css } from 'emotion'
import * as styles from '../components/IndexPageStyles/TextsStyles/styles'
import NavFooter from '../components/NavigationFooter'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'

export const TextPageTemplate = ({ content, contentComponent, title }) => {
  const PageContent = contentComponent || Content

  return (
    <div className={css(styles.textWrapper)}>
      <div className={css(styles.leftFloatingEmptySpace)} />
      <div className={css(styles.textRightColumn)}>
        {/*########################*/}
        <div className={css(styles.textText)}>
          <h2 className={css(styles.textHeader)}>{title}</h2>
          <br />
          <br />
          <div className={css(styles.textParagraph)}>
            <PageContent className="content" content={content} />
          </div>
        </div>
        <NavFooter
          linkLeft="/about/"
          linkRight="/exploration/"
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
}

const TextPage = ({ data, location }) => {
  const { markdownRemark: post } = data

  return (
    <Layout location={location}>
      <TextPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

TextPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
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
