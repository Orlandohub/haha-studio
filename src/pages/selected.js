import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import Projects from '../components/Projects'

class Selected extends React.Component {
  render() {
    const { location } = this.props
    return (
      <Layout location={location}>
        <Projects />
      </Layout>
    )
  }
}

Selected.proptypes = {
  location: PropTypes.object.isRequired,
}

export default Selected
