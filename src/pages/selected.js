import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts'
import Projects from '../components/Projects'
import arrowToTop from '../images/arrow_go_to_top.svg'
import ScrollTop from 'react-scrolltop-button'

import styled from 'react-emotion'
import facepaint from 'facepaint'

const breakpoints = [576, 768, 1024, 1200]

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

const StyledScrollTop = styled(ScrollTop)`
  position: fixed;
  ${mq({ right: ['16px', '16px', '40px', '70px', '80px'] })};
  bottom: 5%;
  padding: 15px;
  border: none;
  border-radius: 50px;
  background-image: url(${arrowToTop});
  background-position: center;
  background-color: transparent;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: all 0.5s;
  &:focus {
    outline: none;
  }
  &:hover {
    filter: gray saturate(0%) brightness(70%) contrast(1000%);
  }
`

class Selected extends React.Component {
  render() {
    const { location } = this.props
    return (
      <Layout location={location}>
        <Projects />
        <StyledScrollTop
          text=""
          distance={100}
          breakpoint={100}
          speed={500}
          target={30}
        />
      </Layout>
    )
  }
}

Selected.proptypes = {
  location: PropTypes.object.isRequired,
}

export default Selected
