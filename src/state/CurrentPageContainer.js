import { Container } from 'unstated'

class CurrentPageContainer extends Container {
  state = {
    showHero: true,
  }

  toggleHero() {
    this.setState({
      showHero: !this.state.showHero
    })
  }

}

export default CurrentPageContainer