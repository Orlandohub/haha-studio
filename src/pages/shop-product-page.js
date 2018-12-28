import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import { css } from 'emotion'
import * as styles from '../components/IndexPageStyles/ShopProductPageStyles/styles'
import productImg from '../images/D_homepage_image_01.jpg'
import NavFooter from '../components/NavigationFooter'

class ShopProduct extends React.Component {
  constructor() {
    super()
    this.state = {
      image: productImg,
    }

    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)
  }
  onMouseOver(e) {
    this.setState({
      image: productImg,
    })
  }

  onMouseOut(e) {
    this.setState({
      image: productImg,
    })
  }

  componentDidMount() {
    window.addEventListener('onmouseover', this.onMouseOver, this.onMouseOut)
  }

  componentWillUnmount() {
    window.removeEventListener('onmouseover', this.onMouseOver, this.onMouseOut)
  }

  render() {
    const location = this.props

    return (
      <Layout location={location}>
        <div className={css(styles.shopProductWrapper)}>
          <div className={css(styles.leftTitleColumn)}>Libery Lamp, Small</div>
          <div className={css(styles.mainBodyWrapper)}>
            <div className={css(styles.galleryWrapper)}>
              <img
                src={this.state.image}
                className={css(styles.imgStyles)}
                alt="image"
              />
            </div>
            <p className={css(styles.colorTag)}>BLACK</p>
            <div className={css(styles.blackColor)} />
            <div className={css(styles.greyColor)} />
            <div className={css(styles.yellowColor)} />
            <div className={css(styles.productDescriptionWrapper)}>
              Plated steel
              <br />
              1 kg
              <br />
              216 x 102 x 102 mm (H/W/D)
              <br />
              <br />
              75 €
            </div>
            <button className={css(styles.cardButton)}>ADD TO CART</button>
            <NavFooter linkText="/press/" text="view all" />
          </div>
        </div>
      </Layout>
    )
  }
}

export default ShopProduct

ShopProduct.proptypes = {
  location: PropTypes.object.isRequired,
}
