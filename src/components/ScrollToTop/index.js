import React, { Component } from 'react'
import { css } from 'react-emotion'
import { Button, Glyphicon } from 'react-bootstrap'

const Btn = css({
  position: 'fixed',
  right: 50,
  bottom: '5%',
  '@media (max-width: 1024px)': {
    display: 'none',
  },
})

class ScrollTop extends Component {
  _isMounted = false

  constructor(props) {
    super(props)

    this.state = {
      showScrollToTop: false,
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
        <React.Fragment>
          <div className={css(Btn)}>
            <Button
              bsSize="large"
              style={{ border: 'none', outline: 'none' }}
              onClick={this.scrollUp}
            >
              <Glyphicon glyph="arrow-up" />
            </Button>
          </div>
        </React.Fragment>
      )
    )
  }
}
//fff
export default ScrollTop
