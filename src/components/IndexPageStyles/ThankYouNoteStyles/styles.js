import facepaint from 'facepaint'

const breakpoints = [414, 576, 768, 1024, 1200, 1366, 1720]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

// ****************************** STYLES FOR THE THANK YOU PAGE

export const thankYouWrapper = mq({
  width: ['100%', '100%', '100%', 681],
  paddingTop: [50, 50, 50, 100],
  paddingLeft: 32,
  paddingRight: 32,
  margin: 'auto',
  fontSize: [14, 14, 14, 22],
  paddingBottom: [60, 60, 60, 100],
})

export const clientName = mq({
  paddingBottom: [22, 22, 22, 20],
})

export const thankYouText = mq({
  paddingBottom: [80, 80, 80, 138],
})

export const orderConfirmation = mq({
  paddingBottom: [6, 6, 6, 10],
  borderBottom: '1.5px solid black',
  marginBottom: [0, 0, 0, 33, 33],
})

export const backToHomeBtn = mq({
  width: ['100%', '100%', '100%', 390],
  marginTop: [60, 60, 60, 122],
  margin: 'auto',
  display: 'block',

  height: ['40', '40', '40', 53],
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

export const thanksSummaryTable = mq(tableStyles, {
  borderTop: '2px solid black',
  marginTop: [40, 40, 40, 40, 124.5],
  width: '100%',
})

export const thanksSumRowTop = mq({
  paddingTop: [40, 40, 40, 32, 32],
  paddingBottom: 5,
})
export const thanksSumRowTopRight = mq(thanksSumRowTop, {
  textAlign: 'right',
})

export const imageWrap = mq({
  width: ['40px', '40px', '40px', '95px', '95px'],
})

//  ******************* PRODUCT TABLE STYLES
export const tableStyles = mq({
  width: '100%',
  verticalAlign: 'initial',
})
export const rowStyles = mq({
  width: '25%',
  verticalAlign: 'initial',
  paddingTop: [40, 40, 40, 15, 15],
})

export const rowStylesRight = mq(rowStyles, {
  textAlign: 'right',
})

export const rowStylesCenter = mq(rowStyles, {
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
  paddingBottom: 0,
})

export const sumRowBottomRight = mq(sumRowBottom, {
  textAlign: 'right',
})
