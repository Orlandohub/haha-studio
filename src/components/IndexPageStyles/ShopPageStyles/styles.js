import facepaint from 'facepaint'
const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const shopWrapper = mq({
  width: '100%',
  paddingTop: [74, 74, 74, 74, 108],
})

export const shopRightColumn = mq({
  width: ['100%', '100%', '100%', '100%', '75%'],
  float: 'left',
  marginLeft: ['0%', '0%', '0%', '0%', '25%'],
  marginRight: ['-10px', '-10px', '-10px', '-12px', '-12px'],
  paddingLeft: [0, 0, 0, 0, 17],
  marginBottom: [70, 70, 70, 70, 246],
})

export const shopText = mq({
  fontSize: [14, 14, 29, 29, 29],
  paddingBottom: [20, 20, 20, 20, 53],
  paddingTop: [20, 20, 20, 20, 53],
})

export const shopImage = mq({
  float: 'left',
  width: ['50%', '50%', '50%', '33.33%', '33.33%'],
  paddingRight: [10, 10, 10, 12, 12],
  marginBottom: [10, 10, 10, 41, 41],
})

export const imgFullWidth = mq({
  width: '100%',
})
