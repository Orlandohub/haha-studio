import React, { Component } from 'react'
import styled from 'react-emotion'
import arrowToTop from '../../images/arrow_go_top.png'
import arrowBlackGoTop from '../../images/02_D_arrow_black_go_to_top.png'

const ScrollToTopButton = styled('button')`
  position: fixed !important;
  right: 60px !important;
  display: block !important;
  bottom: 5% !important;
  width: 14px !important;
  height: 21px !important;
  padding: 15px !important;
  border: none !important;
  background-image: url(${arrowToTop}) !important;
  background-position: center !important;
  background-color: transparent !important;
  background-repeat: no-repeat !important;
  cursor: pointer !important;
  outline: none !important;
  transition: all 0s !important;

  &:focus {
    outline: none !important;
  }

  &:hover {
    background-image: url(${arrowBlackGoTop}) !important;
    background-position: center !important;
    background-color: transparent !important;
    background-repeat: no-repeat !important;
    outline: none !important;
  }
  &:before {
    content: 'top' !important;
    position: relative !important;
    top: -50px !important;
    right: 14px !important;
    font-size: 20px !important;
    color: #cacac8 !important;
  }
  &:hover:before {
    font-size: 20px !important;
    color: black !important;
  }
  @media (max-width: 1024px) {
    display: none !important;
  }
`

class ScrollTop extends Component {
  _isMounted = false

  constructor(props) {
    super(props)

    this.state = {
      showScrollToTop: null,
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.scrollUp = this.scrollUp.bind(this)
    this.getScrollTop = this.getScrollTop.bind(this)
    this.setScrollTop = this.setScrollTop.bind(this)
  }

  componentDidMount() {
    this._isMounted = true
    if (this._isMounted) {
      this.checkForScrollToTop()
      window.addEventListener('scroll', this.handleScroll)
    }
  }

  componentWillUnmount() {
    this._isMounted = false
    window.addEventListener('scroll', this.handleScroll)
  }

  checkForScrollToTop() {
    if (this._isMounted) {
      let Yoffset = 1500
      document.body.scrollTop > Yoffset ||
      document.documentElement.scrollTop > Yoffset
        ? this.setState({
            showScrollToTop: true,
          })
        : this.setState({
            showScrollToTop: false,
          })
    }
  }

  handleScroll() {
    this.checkForScrollToTop()
  }

  scrollUp() {
    const { performance, requestAnimationFrame } = window
    const speed = 350
    const target = 0
    if (
      speed <= 0 ||
      typeof performance === 'undefined' ||
      typeof requestAnimationFrame === 'undefined'
    ) {
      return this.setScrollTop(target)
    }
    const start = performance.now()
    const initScrollTop = this.getScrollTop()
    const pxsToScrollBy = initScrollTop - target

    const that = this
    requestAnimationFrame(step)

    function step(timestamp) {
      const delta = timestamp - start
      const progress = Math.min(delta / speed, 1)
      that.setScrollTop(initScrollTop - Math.round(progress * pxsToScrollBy))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
  }

  getScrollTop() {
    return (
      document.body.scrollTop ||
      ((document.documentElement && document.documentElement.scrollTop) || 0)
    )
  }

  setScrollTop(value) {
    document.body.scrollTop = value
    if (document.documentElement) {
      document.documentElement.scrollTop = value
    }
  }

  render() {
    return (
      this.state.showScrollToTop && (
        <ScrollToTopButton onClick={this.scrollUp} />
      )
    )
  }
}

export default ScrollTop
