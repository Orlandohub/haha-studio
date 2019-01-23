import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import Carousel from '../components/Carousel'
import { graphql } from 'gatsby'
import NavFooter from '../components/NavigationFooter'
import Content, { HTMLContent } from '../components/Content'
import { css } from 'emotion'
import * as styles from '../components/IndexPageStyles/ShopProductPageStyles/styles'

export const ProductPageTemplate = ({
  content,
  contentComponent,
  pageContext,
  location,
  title,
  price,
  imageGallery,
  productId,
  slug,
}) => {
  const PageContent = contentComponent || Content

  return (
    <Layout location={location}>
      <div className={css(styles.shopProductWrapper)}>
        <div className={css(styles.leftTitleColumn)}>{title}</div>
        <div className={css(styles.mainBodyWrapper)}>
          <Carousel images={imageGallery} isProduct={true} />
          <div className={css(styles.productDescriptionWrapper)}>
            <PageContent className="content" content={content} />
            <br />
            <br />
            {price} €
          </div>
          <button
            className={`${css(styles.cardButton)} snipcart-add-item`}
            data-item-id={productId}
            data-item-name={title}
            data-item-price={price}
            data-item-url={slug}>
                 ADD TO CART
          </button>
          <a href="#" className="snipcart-checkout">Click here to checkout</a>
          <div className="snipcart-summary">
              Number of items: <span className="snipcart-total-items"></span>
              Total price: <span className="snipcart-total-price"></span>
          </div>
          <NavFooter
            linkText="/shop/"
            text="shop"
            linkLeft={pageContext.prev}
            linkRight={pageContext.next}
          />
        </div>
      </div>
    </Layout>
  )
}

ProductPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  pageContext: PropTypes.object,
  location: PropTypes.object,
  title: PropTypes.string,
  price: PropTypes.string,
  imageGallery: PropTypes.array,
  productId: PropTypes.string,
  slug: PropTypes.string,
}

const ProductPage = ({ data, location, pageContext }) => {
  const { markdownRemark: post } = data
  
  return (
    <ProductPageTemplate
      contentComponent={HTMLContent}
      content={post.html}
      productId={post.id}
      pageContext={pageContext}
      location={location}
      title={post.frontmatter.title}
      price={post.frontmatter.price}
      slug={post.fields.slug}
      imageGallery={post.frontmatter.image_gallery}
    />
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
  location: PropTypes.object,
  pageContext: PropTypes.object,
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        price
        image_gallery {
          image {
            childImageSharp {
              fluid(maxWidth: 1060) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          color_name
          color_hex
        }
      }
    }
  }
`