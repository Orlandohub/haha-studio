import { css } from 'emotion'
import facepaint from 'facepaint'

const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const logoWrap = mq({
  marginLeft: '0!important',
  paddingTop: '13px!important',
  paddingBottom: '0!important',
  paddingRight: '0!important',
  paddingLeft: [
    '15px!important',
    '15px!important',
    '15px!important',
    '10px!important',
  ],
  fontSize: ['1em', '1.5em', '2.1em', '2.1em'],
})

export const logoLink = css({
  textDecoration: 'none!important',
  color: 'black!important',
})

export const subMenuCol = mq({
  '& > :nth-child(2)': {
    paddingTop: ['25px', '25px', '25px', '38px'],
  },
  float: 'left',
  display: 'block',
  position: 'relative',
  listStyle: 'none',
  margin: 0,
  paddingLeft: 0,
})

export const shopLink = {
  float: 'right',
  display: 'block',
  position: 'relative',
  listStyle: 'none',
  margin: 0,
  paddingLeft: 0,
}

export const subMenuLink = mq({
  cursor: 'pointer',
  fontSize: ['1em', '1.5em', '2em', '2em'],
  color: '#CACAC8!important',
})

export const subMenuLinkBlack = mq({
  cursor: 'pointer',
  fontSize: ['1em', '1.5em', '2em', '2em'],
  color: 'black!important',
})

export const subMenuLinkShop = mq({
  color: '#CACAC8',
  fontSize: ['1em', '1.5em', '2em', '2em'],
  cursor: 'pointer',
})

export const subMenuItem = mq({
  paddingTop: '15px',
  paddingBottom: '15px',
  paddingLeft: 15,
  paddingRight: 10,
  width: ['20vw', '20vw', 160],
})

export const subMenuItemShop = mq({
  paddingTop: '15px',
  paddingBottom: '15px',
  paddingLeft: 15,
  paddingRight: 15,
  width: ['20vw', '20vw', '160px!important'],
  textAlign: 'right',
})

export const brand = mq({
  float: 'left',
  minWidth: [
    '100%!important',
    '100%!important',
    '100%!important',
    '25%!important',
  ],
})

export const menuContainer = mq({
  display: 'block',
  transition: 'top 0.5 ease-in',
  backgroundColor: 'transparent!important',
  borderWidth: '0!important',
  marginBottom: '0!important',
  minHeight: '20px!important',
  paddingLeft: ['32px', '32px', '80px', '140px', '160px'],
  paddingRight: ['32px', '32px', '80px', '140px', '160px'],
  paddingTop: '37px',
})

export const dropDownWrap = mq({
  paddingLeft: ['0px', '0px', '0px', '0px'],
  paddingTop: ['25px', '25px', '25px', '0'],
  paddingBottom: ['46px', '46px', '46px', '79px!important'],
  float: 'left',
  display: 'block',
  width: ['90%', '80%', '80%', '65%'],
})

export const shopWrap = mq({
  paddingTop: ['25px', '25px', '25px', '0'],
  position: 'relative',
  float: 'right!important',
  width: ['10%', '10%', '10%', '10%'],
})
