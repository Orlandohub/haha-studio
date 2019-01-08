import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import { css } from 'emotion'
import * as styles from '../components/IndexPageStyles/AboutStyles/styles'

import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'

export const FindUsPageTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div className={css(styles.aboutWrapper)}>
      <div className={css(styles.aboutRightColumn)}>
        <div className={css(styles.aboutText)}>
          <PageContent className="content" content={content} />
        </div>
      </div>
    </div>
  )
}

FindUsPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const FindUsPage = ({ data, location }) => {
  const { markdownRemark: post } = data

  return (
    <Layout location={location}>
      <FindUsPageTemplate contentComponent={HTMLContent} content={post.html} />
    </Layout>
  )
}

FindUsPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}

export default FindUsPage

export const findUsPageQuery = graphql`
  query FindUsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`
