import facepaint from 'facepaint'
const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const shippingWrapper = mq({
  width: '100%',
  paddingTop: [60, 60, 60, 60, 132],
  '& > :nth-child(4)': {
    paddingBottom: [53, 53, 53, 53, 123],
  },
})

export const shippingTitle = mq({
  width: ['100%', '100%', '100%', '100%', '25%'],
  display: 'block!important',
  float: 'left!important',
  fontSize: ['1em', '1em', '2em', '2em'],
  color: 'black!important',
  paddingBottom: [53, 53, 53, 53, 0],
})

export const shippingTextWrapper = mq({
  fontSize: ['1em', '1em', '2em', '2em'],
  width: ['100%', '100%', '100%', '100%', '75%'],
  float: 'left!important',
  display: 'block!important',
  color: 'black!important',
  paddingLeft: [0, 0, 0, 0, 17],
  paddingBottom: [53, 53, 53, 53, 164],
})

export const tableStyles = mq({
  width: '100%',
  verticalAlign: 'initial',
})

export const rowStyles = mq({
  width: '20%',
  verticalAlign: 'initial',
  paddingBottom: [40, 40, 40, 40, 106],
  borderBottom: '2px solid black',
})

export const bottomRowStyles = mq({
  paddingTop: [40, 40, 40, 40, 53],
  paddingBottom: [40, 40, 40, 40, 53],
})

export const disclaimerStyles = mq({
  paddingTop: [40, 40, 40, 40, 53],
  color: '#7B7C81',
  fontSize: [10, 10, 22],
})
