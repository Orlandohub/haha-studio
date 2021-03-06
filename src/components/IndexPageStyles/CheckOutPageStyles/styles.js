import selectArrow from '../../../images/dropdown_arrow.svg'
import entercodearrow from '../../../images/code-arrow.png'
import facepaint from 'facepaint'
const breakpoints = [411, 576, 768, 1024, 1200, 1500]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const pageWrapper = mq({
  userSelect: 'none',
  width: '100%',
  display: 'block',
  paddingTop: ['43px', '43px', '43px', '48px', '48px'],
})

export const brand = mq({
  paddingBottom: [89, 89, 89, 89, 68, 68],
  display: 'block',
  position: 'relative',
  float: 'left',
  paddingLeft: 1,
  width: '100%!important',
})

export const logoWrap = mq({
  float: 'left',
  margin: 0,
  paddingTop: [
    '11.5px!important',
    '11.5px!important',
    '11.5px!important',
    '12px!important',
  ],
  paddingBottom: '0!important',
  paddingRight: '0!important',
  width: [
    '81.5px!important',
    '81.5px!important',
    '81.5px!important',
    '168.64px!important',
  ],
})

export const shopLink = mq({
  textDecoration: 'none!important',
  color: 'black!important',
  textAlign: 'right',
})

export const shopWrap = mq({
  fontSize: [14, 14, 14, 29, 29, 29],
  display: ['block', 'block', 'block', 'block', 'block', 'none'],
  float: 'right',
  width: '20%',
  textAlign: 'right',
  paddingTop: [6.1, 6.2, 0],
})

export const shopWrapRight = mq(shopWrap, {
  display: ['none', 'none', 'none', 'none', 'none', 'block'],
  width: '100%',
  lineHeight: 1.38,
  paddingBottom: [89, 89, 89, 89, 62, 62],
})

export const cartWrapper = mq({
  maxHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: [
    'relative',
    'relative',
    'relative',
    'relative',
    'relative',
    'fixed',
  ],
  width: ['100%', '100%', '100%', '100%', '100%', '35%'],
  fontSize: [14, 14, 14, 22, 22],
  color: 'black',
  overflow: 'hidden!important',
})

export const orderStyles = mq({
  float: 'left',
  width: '100%',
  borderTop: '1.5px solid black',
})

export const headerStyles = mq({
  fontSize: [14, 14, 14, 22, 22],
  paddingBottom: [6, 6, 6, 28, 28],
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

// **************** DISCOUNT CODE WRAPPER, SUBMIT BUTTON AND PLACEHOLDER STYLING

export const promoWrapper = mq({
  paddingTop: [80, 80, 80, 45, 45],
  fontSize: [14, 14, 14, 18, 18],
  borderBottom: '1.5px solid black',
})

export const labelStyles = mq({
  float: 'left',
  width: '95%',
  marginRight: 'auto',
})

export const arrowWrap = mq({
  verticalAlign: 'bottom',
  paddingBottom: '5px',
  textAlign: 'right',
})

export const submitBtn = mq({
  width: '23px',
  height: '25px',
  padding: 0,
  backgroundColor: 'transparent',
  outline: 'none',
  border: 'none',
  // backgroundImage: `url(${entercodearrow})`,
  // backgroundRepeat: 'no-repeat',
  // backgroundPosition: 'contain',
  // backgroundSize: 'cover',
})

export const promoLabelStyles = mq({
  fontWeight: 'normal',
  color: ['black', 'black', 'black', 'black', 'black', '#7B7C81'],
})

export const placeholderStyles = mq({
  '&::placeholder': {
    color: ['#D9D9D7', '#D9D9D7', '#D9D9D7', '#7B7C81'],
  },
  outline: 'none',
  border: 'none',
  width: '100%',
  fontWeight: 'normal',
})

// ************* CLIENT DATA WRAPPER STYLING

export const clientFormWrapper = mq({
  width: '100%',
  paddingLeft: [0, 0, 0, 0, 0, '50%'],
  fontSize: [14, 14, 14, 22, 22],
  zIndex: 5,
})

// ************* "CLIENT DETAILS" WRAPPER

export const ClientDetails = mq({
  paddingBottom: [35, 35, 35, 30, 30],
})

// ************* SMALL PARAGRAPHS STYLING

export const paragraph = mq({
  fontSize: [8, 8, 8, 18, 18],
  color: ['#D9D9D7', '#D9D9D7', '#D9D9D7', '#7B7C81'],
})

export const paragraphBottom = mq(paragraph, {
  paddingTop: 15,
  fontSize: [10, 10, 10, 18, 18],
  paddingBottom: [25, 25, 25, 25, 25, 355],
})

// *******************  PRODUCT INFO TABLE STYLING

export const summaryTable = mq(tableStyles, {
  marginTop: 30,
  borderBottom: '2px solid black',
  marginBottom: [60, 60, 60, 60, 134, 134],
})

export const sumRowTop = mq({
  paddingBottom: 5,
})
export const sumRowTopRight = mq(sumRowTop, {
  textAlign: 'right',
})

export const paymentModalTitle = mq({
  textAlign: 'center',
  fontSize: '22px',
})

export const paymentModalLoader = mq({
  textAlign: 'center',
})

export const middleRows = mq({
  paddingBottom: 5,
})

export const middleRowsRight = mq({
  paddingBottom: 5,
  textAlign: 'right',
})

export const sumRowBottom = mq({
  paddingBottom: [10, 10, 10, 42, 42],
  cursor: 'help',
  '& span': {
    borderBottom: '1px dashed #000',
  },
})

export const sumRowBottomRight = mq(sumRowBottom, {
  textAlign: 'right',
})

// ******************* FORM LABELS AND INPUT FIELDS STYLING

export const formLabels = mq({
  position: 'relative',
  width: '100%',
  fontWeight: 'normal',
  paddingTop: 10,
})

export const inputWrapper = mq({
  width: ['62%', '70%', '70%', '70%', '75%', '66%', '75%'],
  float: 'right',
  outline: 'none',
  border: 'none',
  borderRadius: '0px!important',
  borderBottom: '1.5px solid black',
})

export const halfWidthForms = mq({
  position: 'relative',
  width: ['100%', '100%', '100%', '50%', '50%', '50%', '50%'],
  float: 'right',
  fontWeight: 'normal',
  paddingTop: 5.5,
})

export const halfWidthFormsInputs = mq(halfWidthForms, {
  width: ['62%', '70%', '70%', '40%', '50%', '32%', '50%'],
  outline: 'none',
  border: 'none',
  borderRadius: '0px!important',
  borderBottom: '1.5px solid black',
})

export const halfWidthFormsCenter = mq(halfWidthForms, {
  textAlign: ['left', 'left', 'left', 'center'],
})

export const halfWidthDate = mq({
  paddingTop: 5,
  width: ['100%', '50%', '50%'],
  float: 'right',
  fontWeight: 'normal',
})

export const dialogTermsAndConditions = {
  width: '966px'
}

export const modalPadding = {
  padding: '55px 66px'
}

export const modalHeaderPadding = {
  padding: '15px 66px'
}

export const halfWidthDateCenter = mq(halfWidthDate, {
  textAlign: ['left', 'center', 'center'],
})

export const halfWidthDateCardType = mq({
  paddingTop: 5,
  width: ['100%', '70%', '70%', '70%', '70%', '70%', '50%'],
  fontWeight: 'normal',
  float: 'left',
})

export const halfWidthCardInputs = mq(halfWidthForms, {
  outline: 'none',
  border: 'none',
  borderRadius: '0px!important',
  borderBottom: '1.5px solid black',

  width: ['62%', '40%', '40%', '40%', '51.5%', '51.5%', '51.5%'],
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
  backgroundImage: `url(${selectArrow})`,
  backgroundPosition: '100% 80%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: [
    '19px 10px',
    // '8px 4.6px',
    // '8px 4.6px',
    // '17px 10px',
    // '17px 10px',
  ],
  backgroundColor: '#fff',
  position: 'relative',
})

export const halfWidthDateInputs = mq(halfWidthFormsInputs, {
  width: ['62%', '40%', '40%', '40%', '50%', '32%', '50%'],
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
  backgroundImage: `url(${selectArrow})`,
  backgroundPosition: '100% 80%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: [
    '19px 10px',
    // '8px 4.6px',
    // '8px 4.6px',
    // '17px 10px',
    // '17px 10px',
  ],
  backgroundColor: '#fff',
  position: 'relative',
})

export const fullWidthSelect = mq(inputWrapper, {
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
  backgroundImage: `url(${selectArrow})`,
  backgroundPosition: '100% 80%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: [
    '19px 10px',
    // '8px 4.6px',
    // '8px 4.6px',
    // '17px 10px',
    // '17px 10px',
  ],
  backgroundColor: '#fff',
  position: 'relative',
})

export const halfWidthFormsCVC = mq(halfWidthDate, {
  paddingTop: 5,
  position: 'relative',
  float: 'left',
  width: ['100%', '100%', '100%', '50%', '50%', '50%', '50%'],
})

export const halfWidthCVCinput = mq({
  width: ['62%', '70%', '70%', '50%', '50%', '32%', '50%'],
})

// **************** PURCHASE BUTTON STYLING

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
  '&:focus,:active': {
    transform: 'translateY(3px)',
  },
})

// ***************** CHECK BOX STYLING

export const checkBox = mq({
  paddingTop: [44, 44, 44, 40, 40, 40],
  paddingLeft: 20,
  fontWeight: 'normal',
  position: 'relative',
  userSelect: 'none',
})

export const customCheckBox = mq({
  width: 20,
  height: 20,
  border: '1px solid black',
  position: 'absolute',
  backgroundColor: 'white',
  cursor: 'pointer',
  top: ['45px', '45px', '45px', '47px'],
  left: '0px',
})

// **************  ERROR STYLING ************

export const errorStyles = mq({
  width: '50%',
  fontSize: [8, 8, 8, 18, 18],
  color: 'red',
  textAlign: 'right',
  position: 'absolute',
  fontStyle: 'italic',
  zIndex: 1,
  top: '-5px',
  left: '50%',
})

// ****************************  BOTTOM LINK DECORATION

export const bottomLinkDecoration = mq({
  textDecoration: 'none!important',
  background: 'none!important',
  // color:'inherit',
  border:'none',
  // padding:'0!important',
  font: 'inherit',
  /*border is optional*/
  // borderBottom:'1px solid #444', 
  cursor: 'pointer',
  color: [
    '#D9D9D7!important',
    '#D9D9D7!important',
    '#D9D9D7!important',
    '#7B7C81!important',
  ],
})

export const deliveryForm = mq({
  maxHeight: '1000px',
  transition: 'max-height 1s linear',
  overflow: 'hidden',
})

export const deliveryFormHidden = mq(deliveryForm, {
  maxHeight: '0px',
})

export const cardInfoWrap = mq({
  paddingTop: [38, 38, 38, 38, 50, 50],
})

export const paddingWrap = mq({
  height: [38, 38, 38, 38, 50, 50],
})
