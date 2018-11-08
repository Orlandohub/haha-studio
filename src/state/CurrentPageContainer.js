import { Container } from 'unstated'

class CurrentPageContainer extends Container {
  state = {
    activeMenu: null,
    activeSubMenu: null,
    showHero: true,
  }

  toggleHero() {
    this.setState({
      showHero: !this.state.showHero
    })
  }

}

export default CurrentPageContainer