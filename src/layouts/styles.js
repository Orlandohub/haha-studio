import facepaint from 'facepaint'
const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const pageWrapper = mq({
  overflow: 'auto',
  width: '100%',
  height: 'auto',
  display: 'block',
  position: 'relative',
  paddingLeft: ['32px', '32px', '80px', '135px', '160px'],
  paddingRight: ['32px', '32px', '80px', '135px', '160px'],
  paddingBottom: ['60px', '60px', '60px', '226px'],
})

// ############### STYLING FOR ABOUT INDEX PAGE #################

export const aboutWrapper = mq({
  width: 993,
  float: 'right',
})
export const aboutText = mq({})
export const aboutImageWrapper = mq({})
export const aboutImage = mq({})

// ############### END OF STYLING FOR ABOUT INDEX PAGE #################
