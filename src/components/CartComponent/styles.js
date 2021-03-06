import facepaint from 'facepaint'
import crossImg from '../../images/D_cart_cross_small.png'

const breakpoints = [414, 576, 768, 1024, 1200, 1366, 1720]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

// *********************  WHOLE PAGE WRAPPPER

export const cartWrapper = mq({
  fontSize: ['14px', '14px', '14px', '18px', '18px', '18px'],
  display: 'flex',
  flexFlow: 'column',
  position: 'relative',
  width: '100%',
  minHeight: '100%',
  paddingLeft: 29,
  paddingRight: 29,
  overflowY: 'auto',
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
  fontSize: ['14px', '14px', '20px', '20px', '20px'],
})

export const imageWrap = mq({
  width: ['40px', '40px', '40px', '65px', '65px'],
})

export const imageContainer = mq({
  width: ['110px', '110px', '110px', '165px', '165px'],
})

// ********************  SUBTOTAL WRAPPER AND TABLE

export const subtotalWrapper = mq({
  width: '100%',
  position: 'relative',
  bottom: 0,
  right: 0,
  borderTop: '2px solid black',
  marginTop: 103,
  paddingTop: 26,
  marginBottom: 53,
})

export const tableStyles = mq({
  width: '100%',
  paddingTop: [40, 40, 40, 40, 25, 25],
})

export const flexRows = mq({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  paddingBottom: [40, 40, 40, 40, 29, 29],
})

export const checkoutTableStyles = mq({
  display: ['table', 'table', 'table', 'table', 'table', 'block'],
  overflowY: 'auto',
})

export const rowStyles = mq({
  minWidth: '25%',
  textAlign: 'center',
})

export const rowStylesRight = mq(rowStyles, {
  textAlign: 'right',
  whiteSpace: 'nowrap',
})

// ************************** BUTTONS ***********************

export const numWrap = mq({
  textAlign: 'center',
  display: 'inline-block',
  border: [
    '1px solid black',
    '1px solid black',
    '1px solid black',
    '1px solid #707070',
  ],
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
  marginBottom: 5,
  border: 'none',
  outline: 'none',
  fontSize: '40px',
  padding: 0,
  postion: 'relative',
  right: '-1px',
  // paddingRight: '-1px',
  // width: [10, 10, 19.5, 19.5],
  // height: [10, 10, 19.5, 19.5],
  backgroundColor: 'transparent',
  // backgroundImage: `url(${crossImg})`,
  // backgroundPosition: 'center!important',
  // backgroundRepeat: 'no-repeat!important',
  // backgroundSize: 'cover!important',
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
