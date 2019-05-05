import React from 'react'
import PropTypes from 'prop-types'
import { map, upperCase } from 'lodash'
import Img from 'gatsby-image'
import Lightbox from 'react-image-lightbox'
import Media from 'react-media'
import styled from 'react-emotion'
import 'react-image-lightbox/style.css'
import Slider from 'react-slick'
import { css } from 'emotion'
import * as styles from '../IndexPageStyles/ShopProductPageStyles/styles'

const ColoredBox = styled.div`
  @media (min-width: 100px) {
    width: 22px;
    height: 22px;
  }
  @media (min-width: 1200px) {
    width: 36px;
    height: 36px;
  }
  ${props => ({ backgroundColor: props.backgroundColor })}
`

class Carousel extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
      photoIndex: 0,
      isOpen: false,
      hoverColor: null,
    }
    this.nextSlide = this.nextSlide.bind(this)
  }
  nextSlide(index) {
    this.slider.slickNext()
    this.setState({
      photoIndex: index
    })
  }
  render() {
    const { photoIndex, isOpen, hoverColor } = this.state
    const { images, isProduct, updateColor } = this.props
    const { color_name, color_hex } = images[photoIndex]
    const settings = {
      dots: true,
      draggable: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => {
        return (
          <React.Fragment>
            {
              isProduct ?
                <div className={css(styles.colorPickerWrap)}>
                  <p className={css(styles.colorDescription)}>
                    {upperCase(hoverColor) || upperCase(color_name)}
                  </p>
                  <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'flex' }}> {dots} </ul>
                </div>
                :
                <ul className="slick-dots" style={{ bottom: '-15px', listStyle: 'none', paddingLeft: 0, height: 40, paddingTop: 60, display: 'flex' }}> {dots} </ul>
            }
          </React.Fragment>
        )},
      customPaging: (i) => (
        <div>
          {
            isProduct ?
              <div
                className={`${css(styles.colorBoxWrapper)} color_wrapp`}
                onMouseOver={() => this.setState({hoverColor: images[i].color_name})}
                onMouseOut={() => this.setState({hoverColor: null})}
              >
                <ColoredBox backgroundColor={images[i].color_hex} />
              </div>
              :
              <div></div>
          }
        </div>
      ),
      afterChange: (i) => {
        this.setState({
          photoIndex: i
        })
        if (isProduct) {
          updateColor(images[i].color_name)
        }
      }
    }
    return (
      <div>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          {map(images, (slide, index) => (
            <Media key={index} query="(max-width: 1023px)">
              {matches =>
                matches ? (
                  <div
                    onClick={() => this.setState({isOpen: true})}
                  >
                    <Img fluid={slide.image.childImageSharp.fluid} />
                  </div>
                ) : (
                  <div
                    key={index}
                    onClick={() => this.nextSlide(index)}
                  >
                    <Img fluid={slide.image.childImageSharp.fluid} />
                  </div>
                )
              }
            </Media>
          ))}
        </Slider>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].image.childImageSharp.fluid.src}
            onCloseRequest={() => this.setState({ isOpen: false })}
            enableZoom={false}
          />
        )}
      </div>
    )
  }
}

export default Carousel

Carousel.proptypes = {
  images: PropTypes.array.isRequired,
  isProduct: PropTypes.bool,
  updateColor: PropTypes.func,
}
