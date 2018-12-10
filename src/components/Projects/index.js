import React, { Component } from 'react'
import { css } from 'emotion'
import image_one from '../../images/D_homepage_image_01.jpg'
import { styles, StyledScrollTop } from './styles'

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = { distanceTop: 2500 }

    this.handleResize = this.handleResize.bind(this)
  }

  handleResize() {
    window.innerWidth * 1.63 > 2500
      ? this.setState({
          distanceTop: 2500,
        })
      : this.setState({
          distanceTop: window.innerWidth * 1.63,
        })
    console.log('Distance to top is ' + this.state.distanceTop)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  render() {
    return (
      <div className={css(styles.projectWrapper)}>
        <div className={css(styles.projectTitle)}>
          <p>Spin Lamp, 2018</p>
        </div>
        <div className={css(styles.imageWrapper)}>
          <img src={image_one} />
        </div>
        <div className={css(styles.projectTitle)}>
          <p>Spin Lamp, 2018</p>
        </div>
        <div className={css(styles.imageWrapper)}>
          <img src={image_one} />
        </div>
        <div className={css(styles.projectTitle)}>
          <p>Spin Lamp, 2018</p>
        </div>
        <div className={css(styles.imageWrapper)}>
          <img src={image_one} />
        </div>
        <div className={css(styles.projectTitle)}>
          <p>Liberty Lamp, 2018</p>
        </div>
        <div className={css(styles.imageWrapper)}>
          <img src={image_one} />
        </div>
        <div className={css(styles.projectTitle)}>
          <p>Liberty Lamp, 2018</p>
        </div>
        <div className={css(styles.imageWrapper)}>
          <img src={image_one} />
        </div>
        <div className={css(styles.projectTitle)}>
          <p>Spin Lamp, 2018</p>
        </div>
        <div className={css(styles.imageWrapper)}>
          <img src={image_one} />
        </div>
        <div className={css(styles.projectTitle)}>
          <p>Spin Lamp, 2018</p>
        </div>
        <div className={css(styles.imageWrapper)}>
          <img src={image_one} />
        </div>
        <div className={css(styles.projectTitle)}>
          <p>Spin Lamp, 2018</p>
        </div>
        <div className={css(styles.imageWrapper)}>
          <img src={image_one} />
        </div>
        <StyledScrollTop
          text=""
          distance={this.state.distanceTop}
          breakpoint={1024}
          speed={500}
          target={0}
          icon={null}
        />
      </div>
    )
  }
}

export default Projects
