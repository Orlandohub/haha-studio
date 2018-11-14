import { Container } from 'unstated'

class CurrentPageContainer extends Container {
  state = {
    showHero: true,
    logoLoaderIsVisible: true,
  }

  hideLogoLoader() {
    console.log('trigger', this.state.logoLoaderIsVisible)
    setTimeout(() => {
      this.setState({
        logoLoaderIsVisible: false,
      }, () => {console.log('after', this.state.logoLoaderIsVisible)})
      
    }, 3000)
  }

  toggleHero() {
    this.setState({
      showHero: !this.state.showHero
    })
  }

}

export default CurrentPageContainer