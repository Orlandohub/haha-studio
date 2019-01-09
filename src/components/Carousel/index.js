import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'lodash'
import Img from 'gatsby-image'
import Lightbox from 'react-image-lightbox'
import Media from 'react-media';
import 'react-image-lightbox/style.css'
import Slider from 'react-slick'

class Carousel extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
      photoIndex: 0,
      isOpen: false,
    }
    this.nextSlide = this.nextSlide.bind(this)
  }
  nextSlide(index) {
    this.slider.slickNext()
    this.setState({
      photoIndex: index + 1
    })
  }
  render() {
    const { photoIndex, isOpen } = this.state
    const { images } = this.props
    const settings = {
      dots: true,
      draggable: false,
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
      customPaging: () => (
        <div
          style={{
            flex: 'flex-grow',
            height: 3,
          }}
        >
        </div>
      ),
      afterChange: (i) => {
        this.setState({
          photoIndex: i
        })
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
          />
        )}
      </div>
    )
  }
}

export default Carousel

Carousel.proptypes = {
  images: PropTypes.array.isRequired,
}
