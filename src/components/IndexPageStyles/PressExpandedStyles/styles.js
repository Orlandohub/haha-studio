import facepaint from 'facepaint'
const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const pressExpandedWrapper = mq({
  width: '100%',
  paddingTop: [15, 15, 15, 15, 22],
})

export const leftFloatingEmptySpace = mq({
  width: ['0%', '0%', '0%', '0%', '25%'],
  float: 'left',
  minHeight: [
    '0px!important',
    '0px!important',
    '0px!important',
    '0px!important',
    '1px!important',
  ],
})
export const pressExpandedParagraph = mq({
  margin: '0px!important',
  fontSize: [14, 14, 29, 29, 29],
})
export const pressExpandedRightColumn = mq({
  width: ['100%', '100%', '100%', '100%', '75%'],
  float: 'left',
  paddingLeft: 0,
})

export const pressExpandedLink = mq({
  textDecoration: 'underline!important',
  color: 'black!important',
})

export const mailTo = mq({
  color: 'black!important',
  textDecoration: 'none!important',
})

export const pressExpandedText = mq({
  paddingLeft: [0, 0, 0, 0, 335],
  paddingBottom: [40, 40, 40, 40, 53],
})

export const pressExpandedGrid = mq({
  borderTop: [
    '1.5px solid black',
    '1.5px solid black',
    '1.5px solid black',
    '1.5px solid black',
    '2px solid black',
  ],
  paddingTop: [55, 55, 55, 55, 53],
})

export const pressExpandedImage = mq({
  '& > :nth-child(even)': {
    paddingRight: 0,
    paddingLeft: [5, 5, 5, 5, 6],
  },
  float: 'left',
  width: '100%',
})

export const Image = mq({
  width: '50%',
  paddingRight: [5, 5, 5, 5, 6],
  marginBottom: ['55px', '55px', '55px', '55px', '53px'],
})
