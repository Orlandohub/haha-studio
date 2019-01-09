import entercodearrow from '../../../images/06_M_arrow_entercode_checkout_page.png'
import facepaint from 'facepaint'
const breakpoints = [411, 576, 768, 1024, 1200, 1500]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const pageWrapper = mq({
  overflow: 'auto',
  width: '100%',
  height: 'auto',
  display: 'block',
  position: 'relative',
  paddingTop: ['49px', '49px', '49px', '55px', '55px'],
  paddingLeft: ['32px', '32px', '80px', '135px', '160px'],
  paddingRight: ['32px', '32px', '80px', '135px', '160px'],
})

export const brand = mq({
  paddingBottom: [89, 89, 89, 139, 139],
  display: 'block',
  position: 'relative',
  float: 'left',
  paddingLeft: 1,
  width: '100%!important',
})

export const logoWrap = mq({
  float: 'left',
  margin: 0,
  paddingTop: '13px!important',
  paddingBottom: '0!important',
  paddingRight: '0!important',
  width: ['81.5px!important', '81.5px!important', '168.64px!important'],
})

export const shopLink = mq({
  textDecoration: 'none!important',
  color: 'black!important',
  textAlign: 'right',
})

export const shopWrap = mq({
  fontSize: [14, 14, 14, 29, 29],
  display: ['block', 'block', 'block', 'block', 'block', 'none'],
  float: 'right',
  width: '20%',
  textAlign: 'right',
})

export const shopWrapRight = mq(shopWrap, {
  display: ['none', 'none', 'none', 'none', 'none', 'block'],
  width: '100%',
})

export const cartWrapper = mq({
  float: 'left',
  position: [
    'relative',
    'relative',
    'relative',
    'relative',
    'relative',
    'fixed',
  ],
  width: ['100%', '100%', '100%', '100%', '100%', '50%'],
  paddingRight: [0, 0, 0, 0, 0, '15%'],
  fontSize: [14, 14, 14, 22, 22],
  color: 'black',
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
  fontWeight: 'normal',
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

export const clientFormWrapper = mq({
  width: '100%',
  paddingLeft: [0, 0, 0, 0, 0, '50%'],
  fontSize: [14, 14, 14, 22, 22],
})

export const ClientDetails = mq({
  paddingBottom: [35, 35, 35, 30, 30],
})

export const paragraph = mq({
  fontSize: [8, 8, 8, 18, 18],
  color: '#7B7C81',
})

export const summaryTable = mq(tableStyles, {
  borderBottom: '1.5px solid black',
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

export const formLabels = mq({
  width: '100%',
  fontWeight: 'normal',
})

export const inputWrapper = mq({
  width: ['62%', '70%', '70%', '75%', '75%', '66%', '75%'],
  float: 'right',
  outline: 'none',
  border: 'none',
  borderBottom: '1.5px solid black',
})

export const halfWidthForms = mq({
  width: ['100%', '100%', '100%', '50%', '50%', '50%', '50%'],
  float: 'right',
  fontWeight: 'normal',
})

export const halfWidthFormsInputs = mq(halfWidthForms, {
  width: ['62%', '70%', '70%', '50%', '50%', '32%', '50%'],
  outline: 'none',
  border: 'none',
  borderBottom: '1.5px solid black',
})

export const halfWidthFormsCenter = mq(halfWidthForms, {
  textAlign: ['left', 'left', 'left', 'center'],
})

export const halfWidthDate = mq({
  width: '50%',
  float: 'right',
  fontWeight: 'normal',
})

export const halfWidthDateCenter = mq(halfWidthDate, {
  textAlign: 'center',
})

export const halfWidthFormsCVC = mq(halfWidthDate, {
  float: 'left',
})

export const halfWidthDateInputs = mq(halfWidthFormsInputs, {
  width: ['24%', '40%', '40%', '50%', '50%', '32%', '50%'],
})

export const purchaseBtn = mq({
  clear: 'both!important',
  width: ['100%', '100%', '100%', '100%', '100%', '100%', 390],
  height: ['40', '40', '40', 53],
  marginTop: [60, 60, 60, 196],
  backgroundColor: 'transparent',
  border: '2px solid black',
  transitionDuration: '0.4s',
  outline: 'none',
  '&:hover': {
    backgroundColor: 'black',
    color: 'white',
  },
  '&:active': {
    transform: 'translateY(3px)',
  },
})
