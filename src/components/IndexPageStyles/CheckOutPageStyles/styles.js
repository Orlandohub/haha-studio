import entercodearrow from '../../../images/06_M_arrow_entercode_checkout_page.png'
import facepaint from 'facepaint'
const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const checkoutWrapper = mq({
  fontSize: [14, 14, 14, 22, 22],
})

export const orderStyles = mq({
  float: 'left',
  width: '100%',
  borderTop: '1.5px solid black',
})

export const headerStyles = mq({
  fontSize: [14, 14, 14, 22, 22],
  paddingBottom: [16, 16, 16, 38, 38],
  borderBottom: '1.5px solid black',
})

export const tableStyles = mq({
  width: '100%',
  verticalAlign: 'initial',
})
export const rowStyles = mq({
  width: '25%',
  verticalAlign: 'initial',
  paddingTop: [40, 40, 40, 29, 29],
})

export const rowStylesRight = mq(rowStyles, {
  textAlign: 'right',
})

export const numWrap = mq({
  textAlign: 'center',
  display: 'inline-block',
  border: '1px solid black',
  width: ['26px', '26px', '26px', '44px', '44px'],
  minHeight: ['20px', '20px', '20px', '28px', '28px'],
})

export const cardBtn = mq({
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
})

export const promoWrapper = mq({
  paddingTop: [120, 120, 120, 74, 74],
  fontSize: [14, 14, 14, 18, 18],
  borderBottom: '1.5px solid black',
})

export const labelStyles = mq({
  float: 'left',
  width: '95%',
  marginRight: 'auto',
})

export const placeholderStyles = mq({
  '&::placeholder': {
    opacity: 0.5,
  },
  outline: 'none',
  border: 'none',
  width: '100%',
})

export const arrowWrap = mq({
  verticalAlign: 'bottom',
  paddingBottom: '5px',
  textAlign: 'right',
})

export const submitBtn = mq({
  width: '10px',
  height: '15px',
  backgroundColor: 'transparent',
  outline: 'none',
  border: 'none',
  backgroundImage: `url(${entercodearrow})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom',
})

export const summaryTable = mq(tableStyles, {
  borderBottom: '2px solid black',
})

export const sumRowTop = mq({
  paddingTop: [40, 40, 40, 32, 32],
  paddingBottom: 5,
})
export const sumRowTopRight = mq(sumRowTop, {
  textAlign: 'right',
})

export const middleRows = mq({
  paddingBottom: 5,
})

export const middleRowsRight = mq({
  paddingBottom: 5,
  textAlign: 'right',
})

export const sumRowBottom = mq({
  paddingBottom: [10, 10, 10, 35, 35],
})

export const sumRowBottomRight = mq(sumRowBottom, {
  textAlign: 'right',
})
