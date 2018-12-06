import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import Projects from '../components/Projects'
import arrowToTop from '../images/arrow_go_to_top.svg'
import ScrollTop from 'react-scrolltop-button'

class Selected extends React.Component {
  render() {
    const { location } = this.props
    return (
      <Layout location={location}>
        <Projects />
        <ScrollTop
          text="top"
          distance={500}
          breakpoint={320}
          style={{ backgroundColor: 'transparent' }}
          className="scroll-your-role"
          speed={500}
          target={30}
          icon={arrowToTop}
        />
      </Layout>
    )
  }
}

Selected.proptypes = {
  location: PropTypes.object.isRequired,
}

export default Selected
