import React, { Component } from 'react'
import { css } from 'emotion'
import image_one from '../../images/D_homepage_image_01.jpg'
import { styles } from './styles'

import ScrollTop from 'react-scrolltop-button'
import styled from 'react-emotion'
import facepaint from 'facepaint'
import arrowToTop from '../../images/arrow_go_to_top.svg'
import arrowBlackGoTop from '../../images/arrowBlackGoTop.png'

const breakpoints = [576, 768, 1024, 1200]

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

const StyledScrollTop = styled(ScrollTop)`
  position: fixed;
  ${mq({ right: ['16px', '16px', '3%', '4.5%'] })};
  ${mq({ display: ['none', 'none', 'block', 'block', 'block'] })};
  bottom: 5%;
  width: 50px;
  height: 41px;
  padding: 15px;
  border: none;
  border-radius: 50px;
  background-image: url(${arrowToTop});
  background-position: center;
  background-color: transparent;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: all 0.1s;
  z-index: 0;
  &:focus {
    outline: none;
  }
  &:hover {
    background-image: url(${arrowBlackGoTop});
    background-position: center;
    background-color: transparent;
    background-repeat: no-repeat;
  }
`

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
        <StyledScrollTop
          text=""
          distance={2500}
          breakpoint={768}
          speed={500}
          target={0}
        />
      </div>
    )
  }
}

export default Projects
