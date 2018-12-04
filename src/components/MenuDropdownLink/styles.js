import { css } from 'emotion'
import facepaint from 'facepaint'

const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const subMenuDropdownItem = css({
  paddingBottom: 5,
  paddingTop: 5,
  marginBottom: 0,
  paddingLeft: 15,
  paddingRight: 10,
  width: 160,
})

export const subMenuDropdownLink = css({
  fontSize: '2em',
  color: '#CACAC8',
  ':hover,:focus': {
    color: '#CACAC8',
    textDecoration: 'none',
  },
})

export const subMenuDropdownLinkActive = css(subMenuDropdownLink, {
  color: 'black',
  ':hover,:focus': {
    color: 'black',
  },
})
