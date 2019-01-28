import { css } from 'emotion'
import facepaint from 'facepaint'

const breakpoints = [576, 768, 1024, 1200, 1366, 1720]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

// MENU CONTAIMER
export const menuContainer = mq({
  overflowX: 'hidden!important',
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

// MENU

// --> MENU LOGO
export const brand = mq({
  float: 'left',
  paddingLeft: 1,
  minWidth: [
    '100%!important',
    '100%!important',
    '100%!important',
    '100%!important',
    '25%!important',
  ],
})

export const logoWrap = mq({
  marginLeft: 0,
  paddingTop: '13px!important',
  paddingBottom: '0!important',
  paddingRight: '0!important',
  width: ['81.5px', '81.5px', '168.64px'],
})

export const logoLink = css({
  textDecoration: 'none!important',
  color: 'black!important',
})

// --> MENU COLS, ITEMS & LINKS
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
  width: ['30%', '30%', '30%', '30%', '20%'],
})

export const dropDownWrap = mq({
  paddingLeft: ['0px', '0px', '0px', '0px'],
  paddingTop: ['25px', '25px', '25px', '25px', '0'],
  paddingBottom: ['46px', '46px', '46px', '79px!important'],
  float: 'left',
  display: 'block',
  width: ['90%', '90%', '90%', '90%', '65%'],
})

export const subMenuItem = mq({
  paddingTop: ['15px', '15px', '15px', '15px', '7px'],
  paddingBottom: '15px',
  paddingLeft: [0, 0, 0, 0, 17],
  paddingRight: 10,
})

export const subMenuLink = mq({
  lineHeight: 1,
  cursor: 'pointer',
  fontSize: ['1em', '1em', '2em', '2em'],
  color: ['#D9D9D7', '#D9D9D7', '#D9D9D7', '#000000', '#000000'],
})

export const subMenuLinkActive = mq(subMenuLink, {
  color: ['#000000', '#000000', '#000000', '#000000', '#000000'],
})

export const subMenuLinkInactive = mq(subMenuLink, {
  color: ['#D9D9D7', '#D9D9D7', '#D9D9D7', '#D9D9D7', '#D9D9D7'],
  ':hover': {
    color: '#C1C1C1',
  },
})

export const subMenuLinkActiveShop = mq(subMenuLink, {
  color: ['#000000', '#000000', '#000000', '#000000', '#000000'],
  marginRight: [8, 19, 19, 41],
})

export const subMenuLinkInactiveShop = mq(subMenuLink, {
  color: ['#D9D9D7', '#D9D9D7', '#D9D9D7', '#D9D9D7', '#D9D9D7'],
  ':hover': {
    color: '#C1C1C1',
  },
  marginRight: [8, 19, 19, 41],
})

// --> MENU SHOP ITEM & LINK
export const shopWrap = mq({
  paddingTop: ['25px', '25px', '25px', '25px', '0'],
  position: 'relative',
  float: 'right!important',
  width: ['10%', '10%', '10%', '10%'],
  whiteSpace: 'nowrap',
})

export const subMenuColShop = {
  float: 'right',
  display: 'block',
  position: 'relative',
  listStyle: 'none',
  margin: 0,
  paddingLeft: 0,
}

export const subMenuItemShop = mq(subMenuItem, {
  paddingRight: 0,
  textAlign: 'right',
})

export const subMenuLinkShop = mq(subMenuLink)

// **********************  CART SHOW BUTTON AND CART WRAPPERS

export const cartShowBtn = mq({
  textAlign: 'center',
  backgroundColor: '#0A00FF',
  color: 'white',
  fontSize: [8, 8, 18],
  width: [12, 12, 25],
  height: [12, 12, 25],
  borderRadius: 50,
  border: 'none',
  outline: 'none',
  padding: 1,
})

export const cartShowBtnHidden = mq(cartShowBtn, {
  visibility: 'hidden',
})

export const cartWrapper = mq({
  display: 'block',
  position: 'absolute',
  top: 0,
  right: 0,
  width: ['100%', '100%', '462px', '462px', '462px', 462],
  height: '100%',
  transition: 'all 0.7s',
  backgroundColor: 'white',
  zIndex: 100,
  overflowX: 'hidden',
})

export const cartWrapperHidden = mq(cartWrapper, {
  width: '0px!important',
  right: '-300%',
  transitionDelay: '0.3s',
})
