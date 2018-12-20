import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'

import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'

export const ExplorationPageTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <PageContent className="content" content={content} />
  )
}

ExplorationPageTemplate.propTypes = {
  content: PropTypes.object,
  contentComponent: PropTypes.func,
}

const ExplorationPage = ({ data, location }) => {
  const { markdownRemark: post } = data
  
  return (
    <Layout location={location}>
      <ExplorationPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
      />
    </Layout>
  )
}

ExplorationPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}

export default ExplorationPage

export const explorationPageQuery = graphql`
  query ExplorationPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`