import facepaint from 'facepaint'
const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const shopProductWrapper = mq({
  width: '100%',
  paddingTop: [60, 60, 60, 60, 132],
  fontSize: ['1em', '1em', '2em', '2em'],
})

export const leftTitleColumn = mq({
  width: '25%',
  float: 'left',
})

export const mainBodyWrapper = mq({
  width: '75%',
  float: 'left',
  paddingRight: [0, 0, 0, 0, 203],
  paddingLeft: [0, 0, 0, 0, 17],
})

export const galleryWrapper = mq({
  width: '100%',
})

export const imgStyles = mq({
  width: '100%',
  marginBottom: 36,
})

export const colorTag = mq({
  fontSize: 14,
})
export const productDescriptionWrapper = mq({
  clear: 'left',
  width: '100%',
  paddingTop: 54,
})

export const blackColor = mq({
  width: '36px',
  height: '36px',
  backgroundColor: 'black',
  float: 'left',
  marginRight: 16,
  marginTop: 18,
})

export const greyColor = mq(blackColor, {
  backgroundColor: 'grey',
})

export const yellowColor = mq(blackColor, {
  backgroundColor: 'yellow',
})

export const cardButton = mq({
  width: 390,
  height: 53,
  marginTop: 90,
  marginBottom: 180,
})
