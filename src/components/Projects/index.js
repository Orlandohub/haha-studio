import React, { Component } from 'react'
import { css } from 'emotion'
import image_one from '../../images/D_homepage_image_01.jpg'
import { styles } from './styles'

class Projects extends Component {
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
      </div>
    )
  }
}

export default Projects
