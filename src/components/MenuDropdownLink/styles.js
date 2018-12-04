import { css } from 'emotion'

export const subMenuDropdownItem = css({
  paddingBottom: 5,
  paddingTop: 5,
  marginBottom: 0,
  paddingLeft: 10,
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
