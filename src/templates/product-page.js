import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'

import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'

export const ProductPageTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <PageContent className="content" content={content} />
  )
}

ProductPageTemplate.propTypes = {
  content: PropTypes.object,
  contentComponent: PropTypes.func,
}

const ProductPage = ({ data, location }) => {
  const { markdownRemark: post } = data
  
  return (
    <Layout location={location}>
      <ProductPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`