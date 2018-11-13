import React from 'react'
import { css } from 'react-emotion'
import arrow from '../../images/arrow.png'
import entireLogo from '../../images/entireLogo.png'
import { styles } from './styles'
import { Subscribe } from 'unstated'
import CurrentPageContainer from '../../state/CurrentPageContainer'

const Hero  = () => {
  return (
    <Subscribe to={[CurrentPageContainer]}>
      {currentPage => (
        <div data-cy="hero">
          {currentPage.state.showHero ? (
            <div className={css(styles.HeroImageWrapper)}>
            <div className={css(styles.EntireLogoStyle)}><img  src={entireLogo} /></div>
              <div className={css(styles.ArrowContainer)}>
                <img
                  data-cy="arrow"
                  className={css(styles.Img)}
                  src={arrow}
                  alt="arrow"
                  onClick={() => currentPage.toggleHero()}
                />
              </div>
            </div>
          ) : (
            <div className={css(styles.HideHero)}>
              <div className={css(styles.HideArrow)}>
                <img
                  className={css(styles.HideArrow)}
                  src={arrow}
                  alt="arrow"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </Subscribe>
  )
}

export default Hero
