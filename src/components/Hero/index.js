import React from 'react'
import { css } from 'react-emotion'
import arrow from '../../images/arrow.png'
import { styles } from './styles'

class Hero extends React.Component {
  constructor() {
    super()

    this.state = {
      show: true,
    }
  }

  slideUp() {
    this.setState({ show: !this.state.show })
  }
  render() {
    let hero_class = this.state.show
      ? css(styles.HeroImageWrapper)
      : css(styles.HideHero)
    let arrowClass = this.state.show
      ? css(styles.Img)
      : css(styles.HideArrow)
    let arrowContainer = this.state.show
      ? css(styles.ArrowContainer)
      : css(styles.HideArrow)

    return (
      <div className={hero_class}>
        <div className={arrowContainer}>
          <img
            className={arrowClass}
            src={arrow}
            alt="arrow"
            onClick={this.slideUp.bind(this)}
          />
        </div>
      </div>
    )
  }
}

export default Hero