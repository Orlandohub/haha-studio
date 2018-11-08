import { Container } from 'unstated'

class CurrentPageContainer extends Container {
  state = {
    activeMenu: null,
    activeSubMenu: null,
    showHero: true,
  }

  menuRouter(location) {
    let activeMenu = null
    let activeSubMenu = null
    const { pathname } = location

    switch (pathname) {
    case '/archived':
      activeMenu = 'projects'
      activeSubMenu = 'archived'
      break
    default:
      activeMenu = 'projects'
      activeSubMenu = 'selected'
    }

    this.setState({
      activeMenu,
      activeSubMenu,
    })
  }

  toggleHero() {
    this.setState({
      showHero: !this.state.showHero
    })
  }

  setActiveSubMenu(subMenu) {
    this.setState({
      activeSubMenu: subMenu,
    })
  }

  setActiveMenu(menu) {
    this.setState({
      activeMenu: menu,
    })
  }

}

export default CurrentPageContainer