import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import Link from 'gatsby-link'
import { css } from 'react-emotion'
import * as styles from '../components/IndexPageStyles/ShopPageStyles/styles'
import shopProduct from '../images/D_shop_product_index_image.jpg'
import ShopNavigation from '../components/ShopNavigation/index'

const Shop = ({ location }) => (
  <React.Fragment>
    <Layout location={location}>
      <div className={css(styles.shopWrapper)}>
        <div className={css(styles.shopRightColumn)}>
          <div className={css(styles.shopImage)}>
            <Link to={'/shop-product-page/'}>
              <img src={shopProduct} className={css(styles.imgFullWidth)} />
            </Link>
            <div className={css(styles.shopText)}>
              Alia, Pack A <br />
              45 &#8364;
            </div>
          </div>
          <div className={css(styles.shopImage)}>
            <Link to={'/shop-product-page/'}>
              <img src={shopProduct} className={css(styles.imgFullWidth)} />
            </Link>
            <div className={css(styles.shopText)}>
              Alia, Pack A <br />
              45 &#8364;
            </div>
          </div>
          <div className={css(styles.shopImage)}>
            <Link to={'/shop-product-page/'}>
              <img src={shopProduct} className={css(styles.imgFullWidth)} />
            </Link>
            <div className={css(styles.shopText)}>
              Alia, Pack A <br />
              45 &#8364;
            </div>
          </div>
          <div className={css(styles.shopImage)}>
            <Link to={'/shop-product-page/'}>
              <img src={shopProduct} className={css(styles.imgFullWidth)} />
            </Link>
            <div className={css(styles.shopText)}>
              Alia, Pack A <br />
              45 &#8364;
            </div>
          </div>
          <div className={css(styles.shopImage)}>
            <Link to={'/shop-product-page/'}>
              <img src={shopProduct} className={css(styles.imgFullWidth)} />
            </Link>
            <div className={css(styles.shopText)}>
              Alia, Pack A <br />
              45 &#8364;
            </div>
          </div>
          <div className={css(styles.shopImage)}>
            <Link to={'/shop-product-page/'}>
              <img src={shopProduct} className={css(styles.imgFullWidth)} />
            </Link>
            <div className={css(styles.shopText)}>
              Alia, Pack A <br />
              45 &#8364;
            </div>
          </div>
          <div className={css(styles.shopImage)}>
            <Link to={'/shop-product-page/'}>
              <img src={shopProduct} className={css(styles.imgFullWidth)} />
            </Link>
            <div className={css(styles.shopText)}>
              Alia, Pack A <br />
              45 &#8364;
            </div>
          </div>
          <div className={css(styles.shopImage)}>
            <Link to={'/shop-product-page/'}>
              <img src={shopProduct} className={css(styles.imgFullWidth)} />
            </Link>
            <div className={css(styles.shopText)}>
              Alia, Pack A <br />
              45 &#8364;
            </div>
          </div>
        </div>
        <ShopNavigation />
      </div>
    </Layout>
  </React.Fragment>
)

Shop.proptypes = {
  location: PropTypes.object.isRequired,
}

export default Shop
