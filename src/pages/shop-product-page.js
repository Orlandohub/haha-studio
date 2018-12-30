import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import { css } from 'emotion'
import * as styles from '../components/IndexPageStyles/ShopProductPageStyles/styles'
import productImg from '../images/D_homepage_image_01.jpg'
import NavFooter from '../components/NavigationFooter'

//######################## COLOR BOX COMPONENT ######################

class ColoredBoxWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeClass: this.props.activeClass,
    }
    //this.setActiveClassName = this.setActiveClassName.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)
  }

  handleClick() {
    this.setState({
      activeClass: styles.colorBoxWrapper,
      activeClass: styles.colorBoxSelected,
    })
  }

  handleClickOutside() {
    this.setState({
      activeClass: styles.colorBoxWrapper,
    })
  }

  onMouseOver() {
    this.setState({
      colorName: productImg,
    })
  }

  onMouseOut() {
    this.setState({
      colorName: productImg,
    })
  }

  componentDidMount() {
    window.addEventListener('onmouseover', this.onMouseOver, this.onMouseOut)
    window.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    window.removeEventListener('onmouseover', this.onMouseOver, this.onMouseOut)
    window.removeEventListener('mousedown', this.handleClickOutside)
  }

  render() {
    const { children } = this.props
    const { setActiveClassName } = this.props
      ? styles.colorBoxSelected
      : styles.colorBoxWrapper
    return (
      <div
        activeClass={this.props.activeClass}
        className={setActiveClassName}
        onClick={this.handleClick}
        onMouseDown={this.handleClickOutside}
      >
        {children}
      </div>
    )
  }
}

//########################## END OF COLOR BOX #########################

const ShopProduct = ({ location }) => {
  return (
    <Layout location={location}>
      <div className={css(styles.shopProductWrapper)}>
        <div className={css(styles.leftTitleColumn)}>Libery Lamp, Small</div>
        <div className={css(styles.mainBodyWrapper)}>
          <div className={css(styles.galleryWrapper)}>
            <img
              src={productImg}
              className={css(styles.imgStyles)}
              alt="image"
            />
          </div>
          <p className={css(styles.colorDescription)}>BLACK</p>

          <ColoredBoxWrapper activeClass={true}>
            <styles.ColoredBox backgroundColor="green" />
          </ColoredBoxWrapper>

          <ColoredBoxWrapper activeClass={false}>
            <styles.ColoredBox backgroundColor="red" />
          </ColoredBoxWrapper>

          <ColoredBoxWrapper activeClass={false}>
            <styles.ColoredBox backgroundColor="yellow" />
          </ColoredBoxWrapper>

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
          <NavFooter linkText="/shop/" text="shop" />
        </div>
      </div>
    </Layout>
  )
}

export default ShopProduct

ShopProduct.proptypes = {
  location: PropTypes.object.isRequired,
}
