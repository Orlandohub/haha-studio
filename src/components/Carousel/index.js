import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'lodash'
import Img from 'gatsby-image'
import Slider from 'react-slick'

class Carousel extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {}
    this.nextSlide = this.nextSlide.bind(this)
  }
  nextSlide() {
    this.slider.slickNext()
  }
  render() {
    const { images } = this.props
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => (
        <div
        >
          <ul style={{ paddingLeft: 0, height: 40, paddingTop: 60, display: 'flex' }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          style={{
            flex: 'flex-grow',
            height: 3,
          }}
        >
        </div>
      )
    }
    return (
      <div>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          {map(images, (slide, index) => (
            <div
              key={index}
              onClick={this.nextSlide}
            >
              <Img fluid={slide.image.childImageSharp.fluid} />
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}

export default Carousel

Carousel.proptypes = {
  images: PropTypes.array.isRequired,
}
