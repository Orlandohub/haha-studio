import facepaint from 'facepaint'
const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const findUsWrapper = mq({
  width: '100%',
  paddingTop: [15, 15, 15, 15, 22],
})

export const findUsParagraph = mq({
  margin: '0px!important',
  fontSize: [14, 14, 29, 29, 29],
})
export const findUsRightColumn = mq({
  width: '100%',
  paddingLeft: [0, 0, 0, 0, '51%'],
  marginLeft: [0, 0, 0, 0, '15px'],
  marginBottom: [60, 60, 60, 60, 217],
})

export const findUsLink = mq({
  textDecoration: 'none!important',
  color: 'black!important',
})
