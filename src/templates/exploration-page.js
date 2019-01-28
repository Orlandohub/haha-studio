import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import SEO from '../components/SEO/index'

export const ExplorationPageTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return <PageContent className="content" content={content} />
}

ExplorationPageTemplate.propTypes = {
  content: PropTypes.object,
  contentComponent: PropTypes.func,
}

const ExplorationPage = ({ data, location }) => {
  const { markdownRemark: post } = data

  return (
    <Layout location={location}>
      <SEO
        title={'Explore with HAHA Studio'}
        description={
          'Proposing playful products and experience is important for a designer. However, when starting HAHA, this was not quite the first message we wanted to share, or maybe not the only one. In fact, we are quite skeptical about the notion of “playfulness” as it is today widely used by cynical marketing agents, gaming groups or uninspired creators as a catch-all and empty motto. If we need to recognize the essence of our human character as Homo Ludens, we believe that’s it is not in the 4 corners of our computer screen, neither in the false user-friendly formulas, or the illusionary work/play society models that are offered to us today.'
        }
        location={location}
      />
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
