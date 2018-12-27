import facepaint from 'facepaint'
const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const supportWrapper = mq({
  width: '100%',
  paddingTop: [60, 60, 60, 60, 132],
  paddingBottom: [53, 53, 53, 53, 123],
})

export const supportTitle = mq({
  width: ['100%', '100%', '100%', '100%', '25%'],
  display: 'block!important',
  float: 'left!important',
  fontSize: ['1em', '1em', '2em', '2em'],
  color: 'black!important',
  paddingBottom: [53, 53, 53, 53, 0],
})

export const supportTextWrapper = mq({
  fontSize: ['1em', '1em', '2em', '2em'],
  width: ['100%', '100%', '100%', '100%', '75%'],
  float: 'left!important',
  display: 'block!important',
  color: 'black!important',
  paddingLeft: [0, 0, 0, 0, 17],
  paddingBottom: [53, 53, 53, 53, 164],
})
