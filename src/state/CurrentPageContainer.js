import { Container } from 'unstated'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

class CurrentPageContainer extends Container {
  state = {
    showHero: true,
    logoLoaderIsVisible: true,
    disableBodyScroll: disableBodyScroll(document.getElementById('#___gatsby')),
  }

  hideLogoLoader() {
    console.log('trigger', this.state.logoLoaderIsVisible)
    setTimeout(() => {
      this.setState(
        {
          logoLoaderIsVisible: false,
        },
        () => {
          console.log('after', this.state.logoLoaderIsVisible)
        }
      )
    }, 3000)
  }

  toggleHero() {
    this.setState({
      showHero: !this.state.showHero,
      disableBodyScroll: this.enableScroll(),
    })
  }

  enableScroll() {
    setTimeout(() => {
      this.setState({
        disableBodyScroll: enableBodyScroll(
          document.getElementById('#___gatsby')
        ),
      })
    }, 2000)
  }
}

export default CurrentPageContainer
