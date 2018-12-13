import React from 'react'
import { css } from 'emotion'
import image_one from '../../images/D_homepage_image_01.jpg'
import { styles, StyledScrollTop } from './styles'

const Projects = () => {
  return (
    <div className={css(styles.projectWrapper)}>
      <StyledScrollTop
        text=""
        distance={1500}
        breakpoint={1024}
        speed={500}
        target={0}
        icon={null}
      />
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
    </div>
  )
}

export default Projects
