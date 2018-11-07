import { Container } from "unstated";

class CurrentPageContainer extends Container {
  state = {
    activeMenu: 'projects',
    activeSubMenu: 'selected',
    showHero: true,
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

export default CurrentPageContainer;