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

// ############ STYLING ELEMENTS OF PROJECTS INDEX PAGE #############

export const projectWrapper = mq({
  width: '100%',
  paddingTop: [15, 15, 15, 123],
  paddingLeft: '10px!important',
  paddingRight: '10!important',
})

export const projectTitle = mq({
  width: ['100%', '100%', '100%', '25%'],
  height: ['auto', 'auto', 'auto', '1500px'],
  display: 'block',
  float: 'left',
  marginTop: 0,
  fontSize: '2em',
  color: 'black',
  paddingBottom: 26,
})

export const imageWrapper = mq({
  paddingLeft: [0, 0, 0, 10],
  paddingRight: [0, 0, 0, 191],
  width: ['100%', '100%', '100%', '75%'],
  float: 'left',
  display: 'block',
  position: 'relative',
  marginTop: 10,
  fontSize: '2em',
  color: 'black',
})

export const textWrapper = mq(imageWrapper, {
  paddingTop: [40, 40, 40, 106],
  marginTop: 0,
  paddingBottom: [60, 60, 60, 212],
})

export const Link = mq({
  textDecoration: 'underline',
  color: 'black',
})

// ############ END OF STYLING ELEMENTS OF PROJECTS INDEX PAGE #############
