import React from 'react'
//import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { css } from 'emotion'
import * as styles from './styles'
import { map } from 'lodash'
import image1 from '../../images/hero_image.jpg'
import image2 from '../../images/D_portrait_image.jpg'
import image3 from '../../images/D_homepage_image_01.jpg'

const BarWrapper = styled.div`
  float: left;
  padding-right: 3px;
  ${props => ({ width: props.width })};
`

class Carousel extends React.Component {
  constructor() {
    super()

    this.state = {
      imagesList: [image1, image2, image3, image2, image3],
      activeImage: 0,
    }
    this.nextSlide = this.nextSlide.bind(this)
    this.prevSlide = this.prevSlide.bind(this)
  }

  nextSlide() {
    const lastItem = this.state.imagesList.length - 1
    console.log(' active index is ' + this.state.activeImage)
    lastItem === this.state.activeImage
      ? this.setState({
          activeImage: (this.state.activeImage = 0),
        })
      : this.setState(prevState => ({
          activeImage: prevState.activeImage + 1,
        }))
  }

  prevSlide() {
    const lastItem = this.state.imagesList.length - 1
    const firstItem = 0
    console.log(' active index is ' + this.state.activeImage)
    firstItem === this.state.activeImage
      ? this.setState({
          activeImage: lastItem,
        })
      : this.setState(prevState => ({
          activeImage: prevState.activeImage - 1,
        }))
  }

  currentSlide = index => {
    this.setState({
      activeImage: index,
    })
  }

  componentDidMount() {
    window.addEventListener('onmousedown', this.prevSlide, this.nextSlide)
  }

  componentWillUnmount() {
    window.removeEventListener('onmouseover', this.prevSlide, this.nextSlide)
  }

  render() {
    const numberOfBars = 100 / this.state.imagesList.length

    return (
      <div className={css(styles.slidesContainer)}>
        <div style={{ position: 'relative' }}>
          <button className={css(styles.prev)} onClick={this.prevSlide}>
            &#10094;
          </button>

          <button className={css(styles.next)} onClick={this.nextSlide}>
            &#10095;
          </button>

          {map(this.state.imagesList, (slide, index) => (
            <div
              key={index}
              className={
                index === this.state.activeImage
                  ? css(styles.activeSlide)
                  : index < this.state.activeImage
                  ? css(styles.hiddenSlideLeft)
                  : css(styles.hiddenSlideRight)
              }
            >
              <img src={slide} className={css(styles.myImage)} />
            </div>
          ))}
        </div>

        <div className={css(styles.barsContainers)}>
          {map(this.state.imagesList, (numOfbar, num) => (
            <BarWrapper
              width={numberOfBars + '%'}
              onClick={this.currentSlide.bind(this, num)}
            >
              <div
                className={
                  num === this.state.activeImage
                    ? css(styles.activeBars)
                    : css(styles.indicators)
                }
              />
            </BarWrapper>
          ))}
        </div>
      </div>
    )
  }
}

export default Carousel

/*ShopProduct.proptypes = {
  location: PropTypes.object.isRequired,
}*/
