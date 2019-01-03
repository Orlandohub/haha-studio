import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import { css } from 'emotion'
import * as styles from '../components/IndexPageStyles/ShopProductPageStyles/styles'
import productImg from '../images/D_homepage_image_01.jpg'
import NavFooter from '../components/NavigationFooter'
import { map } from 'lodash'

//######################## COLOR BOX COMPONENT ######################

class ColoredBoxWrapper extends React.Component {
  constructor() {
    super()
    this.state = {
      activeClass: styles.colorBoxWrapper,
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
    // this.onMouseOver = this.onMouseOver.bind(this)
    //this.onMouseOut = this.onMouseOut.bind(this)
  }

  handleClick() {
    this.setState({
      activeClass: styles.colorBoxSelected,
    })
  }

  handleClickOutside() {
    this.setState({
      activeClass: styles.colorBoxWrapper,
    })
  }
  /*
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
*/
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
    return (
      <div
        className={css(this.state.activeClass)}
        onClick={this.handleClick}
        onMouseDown={this.handleClickOutside}
      >
        {children}
      </div>
    )
  }
}

/*########################## END OF COLOR BOX #########################*/

class ShopProduct extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      colorList: [
        { color: '#f44242', colorName: 'RED' },
        { color: '#4bf442', isSelected: true, colorName: 'GREEN' },
        { color: '#000000', colorName: 'BLACK' },
      ],
    }

    this.handleClick = this.handleClick.bind(this)
    //this.handleClickOutside = this.handleClickOutside.bind(this)
    // this.onMouseOver = this.onMouseOver.bind(this)
    //this.onMouseOut = this.onMouseOut.bind(this)
  }

  handleClick = index => {
    console.log('index is ' + index)

    this.setState({
      colorList: this.state.colorList.map(obj =>
        obj.isSelected === true
          ? Object.assign(obj, { isSelected: false })
          : obj
      ),
      colorList: colorList[index].concat({ isSelected: true }),
    })
  }

  /*
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
*/
  componentDidMount() {
    window.addEventListener('onmouseover', this.onMouseOver, this.onMouseOut)
    window.addEventListener('mousedown', this.handleClick)
  }

  componentWillUnmount() {
    window.removeEventListener('onmouseover', this.onMouseOver, this.onMouseOut)
    window.removeEventListener('mousedown', this.handleClick)
  }

  render() {
    let activeIndex = this.state.colorList.findIndex(
      obj => obj['isSelected'] === true
    )

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
            <p className={css(styles.colorDescription)}>
              {this.state.colorList[activeIndex].colorName}
            </p>

            {/*########################## END OF COLOR BOX #########################*/}
            <React.Fragment>
              {map(this.state.colorList, (product, index) => (
                <div
                  key={product.colorName}
                  className={
                    product.isSelected
                      ? css(styles.colorBoxSelected)
                      : css(styles.colorBoxWrapper)
                  }
                  onClick={this.handleClick.bind(this, index)}
                  onMouseDown={this.handleClickOutside}
                >
                  <styles.ColoredBox backgroundColor={product.color} />
                </div>
              ))}
            </React.Fragment>
            {/*########################## END OF COLOR BOX #########################*/}

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
            <NavFooter
              linkText="/shop/"
              text="shop"
              linkLeft={'/shop/'}
              linkRight={'/shop/'}
            />
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
