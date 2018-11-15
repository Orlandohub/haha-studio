import { Container } from 'unstated'

class CurrentPageContainer extends Container {
  state = {
    showHero: true,
    logoLoaderIsVisible: true,
    disableBodyScroll: true,
  }

  hideLogoLoader() {
    setTimeout(() => {
      this.setState(
        {
          logoLoaderIsVisible: false,
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
        disableBodyScroll: false,
      })
    }, 2000)
  }
}

export default CurrentPageContainer
