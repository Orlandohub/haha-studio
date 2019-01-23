import { css } from 'emotion'
import facepaint from 'facepaint'

const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const subMenuDropdownItem = mq({
  paddingBottom: 5,
  paddingTop: 6,
  marginBottom: 0,
  paddingLeft: [0, 0, 0, 0, 17],
  paddingRight: [0, 10, 10],
})

export const subMenuDropdownLink = mq({
  fontSize: ['1em', '1em', '2em'],
  color: '#D9D9D7',
  ':hover,:focus': {
    color: '#C1C1C1',
    textDecoration: 'none',
  },
})

export const subMenuDropdownLinkActive = css(subMenuDropdownLink, {
  color: 'black',
  ':hover,:focus': {
    color: 'black',
  },
})
