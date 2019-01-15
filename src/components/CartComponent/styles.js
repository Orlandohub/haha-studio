import facepaint from 'facepaint'
import crossImg from '../../images/04_D_big_cross_cart_menu.png'

const breakpoints = [414, 576, 768, 1024, 1200, 1366, 1720]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

// *********************  WHOLE PAGE WRAPPPER

export const cartWrapper = mq({
  fontSize: ['14px', '14px', '14px', '18px', '18px', '18px'],
  display: 'block',
  position: 'relative',
  width: '100%',
  height: '100%',
})

// ****************************** WRAPPER TO RENDER ON CHECK OUT PAGE

export const cartWrapperForCheckOut = mq({
  display: 'block',
  width: '100%',
})

// ************************ HEADER STYLES

export const cartHeader = mq({
  display: 'block',
  position: 'relative',
  width: '100%',
  borderBottom: '2px solid black',
  fontSize: '20px',
})

export const imageWrap = mq({
  width: ['40px', '40px', '40px', '95px', '95px'],
})

// ********************  SUBTOTAL WRAPPER AND TABLE

export const subtotalWrapper = mq({
  width: '100%',
  position: 'absolute',
  bottom: 0,
  right: 0,
  borderTop: '2px solid black',
  marginTop: 103,
  paddingTop: 26,
  marginBottom: 53,
})

export const tableStyles = mq({
  width: '100%',
  verticalAlign: 'initial',
})
export const rowStyles = mq({
  width: '25%',
  textAlign: 'left',
  verticalAlign: 'initial',
  paddingTop: [40, 40, 40, 40, 29, 29],
})

export const rowStylesRight = mq(rowStyles, {
  textAlign: 'right',
  whiteSpace: 'nowrap',
})

// ************************** BUTTONS ***********************

export const numWrap = mq({
  textAlign: 'center',
  display: 'inline-block',
  border: '1px solid black',
  marginRight: ['0px', '11px', '11px', '11px'],
  marginLeft: ['0px', '11px', '11px', '11px'],
  minWidth: ['24px', '26px', '26px', '44px', '44px', '44px'],
  minHeight: ['20px', '20px', '20px', '28px', '28px', '28px'],
})

export const cardBtn = mq({
  color: 'black',
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
})

export const hideBtn = mq({
  marginTop: 5,
  border: 'none',
  outline: 'none',
  width: 19.5,
  height: 19.5,
  backgroundColor: 'transparent',
  backgroundImage: `url(${crossImg})`,
})

export const checkOutBtn = mq({
  clear: 'both!important',
  width: ['100%', '100%', '100%', '100%', '100%', '100%', 390],
  height: ['40', '40', '40', '40', 53],
  marginTop: [60, 60, 60, 60, 196],
  backgroundColor: 'transparent',
  border: '2px solid black',
  transitionDuration: '0.4s',
  outline: 'none',
  '&:hover': {
    backgroundColor: 'black',
    color: 'white',
  },
  '&:focus': {
    transform: 'translateY(3px)',
  },
})
