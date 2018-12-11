import { css } from 'emotion'
import facepaint from 'facepaint'

const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const logoWrap = mq({
  marginLeft: [
    '17px!important',
    '17px!important',
    '17px!important',
    '10px!important',
  ],
  paddingTop: '13px!important',
  paddingBottom: '0!important',
  paddingRight: '0!important',
  width: [
    '81.5px',
    '81.5px',
    '168.64px',
  ]
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
  lineHeight: 1,
  cursor: 'pointer',
  fontSize: ['1em', '1em', '2em', '2em'],
  color: '#CACAC8!important',
})

export const subMenuLinkBlack = mq(subMenuLink, {
  color: 'black!important',
})

export const subMenuLinkShop = mq(subMenuLink)

export const subMenuItem = mq({
  paddingTop: ['15px', '15px', '15px', '7px', '7px'],
  paddingBottom: '15px',
  paddingLeft: 15,
  paddingRight: 10,
  width: ['20vw', '20vw', 160],
})

export const subMenuItemShop = mq(subMenuItem, {
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
  overflow: 'auto',
  width: '100%',
  display: 'block',
  transition: 'top 0.5 ease-in',
  backgroundColor: 'transparent!important',
  borderWidth: '0!important',
  marginBottom: '0!important',
  minHeight: '20px!important',
  paddingLeft: ['32px', '32px', '80px', '135px', '160px'],
  paddingRight: ['32px', '32px', '80px', '135px', '160px'],
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
