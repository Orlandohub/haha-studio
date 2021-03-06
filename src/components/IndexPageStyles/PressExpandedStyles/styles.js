import facepaint from 'facepaint'
const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const pressExpandedWrapper = mq({
  width: '100%',
  paddingTop: [15, 15, 15, 15, 22],
})

export const pressExpandedParagraph = mq({
  margin: '0px!important',
  fontSize: [14, 14, 29, 29, 29],
  paddingLeft: [0, 0, 0, 0, 5],
})
export const pressExpandedRightColumn = mq({
  width: '100%',
  float: 'left',
  paddingLeft: [0, 0, 0, 0, 24],
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
  width: '100%',
  paddingLeft: [0, 0, 0, 0, '51%'],
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
  marginLeft: [0, 0, 0, 0, '25%'],
})

export const pressExpandedImage = mq({
  display: 'flex',
  '& > :nth-child(2)': {
    marginRight: 0,
    marginLeft: [5, 5, 5, 5, 6],
  },
  width: '100%',
})

export const Image = mq({
  flex: 1,
  paddingRight: [5, 5, 5, 5, 6],
  marginBottom: [55, 55, 55, 55, 53],
})
