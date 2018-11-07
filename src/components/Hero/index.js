import React from 'react'
import { css } from 'react-emotion'
import arrow from '../../images/arrow.png'
import { styles } from './styles'
import { Subscribe } from "unstated";
import CurrentPageContainer from '../../state/CurrentPageContainer'

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
    return (
      <Subscribe to={[CurrentPageContainer]}>
        {currentPage => (
          <div>
          {
            currentPage.state.showHero ?
              <div className={css(styles.HeroImageWrapper)}>
                <div className={css(styles.ArrowContainer)}>
                  <img
                    className={css(styles.Img)}
                    src={arrow}
                    alt="arrow"
                    onClick={() => currentPage.toggleHero()}
                  />
                </div>
              </div>
            :
              <div className={css(styles.HideHero)}>
                <div className={css(styles.HideArrow)}>
                  <img
                    className={css(styles.HideArrow)}
                    src={arrow}
                    alt="arrow"
                  />
                </div>
              </div>
          }
          </div>
        )}
      </Subscribe>
    )
  }
}

export default Hero