import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import { css } from 'emotion'
import styled from 'react-emotion'
import * as styles from '../components/IndexPageStyles/ShopProductPageStyles/styles'
import productImg from '../images/D_homepage_image_01.jpg'
import NavFooter from '../components/NavigationFooter'
import { map } from 'lodash'

const ColoredBox = styled.div`
  @media (min-width: 100px) {
    width: 22px;
    height: 22px;
  }
  @media (min-width: 1200px) {
    width: 36px;
    height: 36px;
  }
  ${props => ({ backgroundColor: props.backgroundColor })};
`

class ShopProduct extends React.Component {
  constructor() {
    super()

    this.state = {
      hex: ['#f44242', '#000000', '#4bf442'],
      color: ['RED', 'BLACK', 'GREEN'],
      selectedColor: 0,
      hoverColor: 0,
    }
  }

  handleClick = index => {
    this.setState({
      selectedColor: index,
      hoverColor: index,
    })
  }

  onMouseOver = index => {
    this.setState({
      hoverColor: index,
    })
  }

  onMouseOut() {
    const prevColor = this.state.selectedColor
    this.setState({
      hoverColor: prevColor,
    })
  }

  componentDidMount() {
    window.addEventListener('onmouseover', this.onMouseOver, this.onMouseOut)
  }

  componentWillUnmount() {
    window.removeEventListener('onmouseover', this.onMouseOver, this.onMouseOut)
  }

  render() {
    const { location } = this.props
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
              {this.state.color[this.state.hoverColor]}
            </p>

            {/*########################## END OF COLOR BOX #########################*/}
            <React.Fragment>
              {map(this.state.hex, (product, index) => (
                <div
                  key={product}
                  className={
                    index === this.state.selectedColor
                      ? css(styles.colorBoxSelected)
                      : css(styles.colorBoxWrapper)
                  }
                  onClick={this.handleClick.bind(this, index)}
                  onMouseOver={this.onMouseOver.bind(this, index)}
                  onMouseLeave={this.onMouseOut.bind(this, index)}
                >
                  <ColoredBox backgroundColor={product} />
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
