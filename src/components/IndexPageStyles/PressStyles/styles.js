import facepaint from 'facepaint'
const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const pressWrapper = mq({
  width: '100%',
  paddingTop: [15, 15, 15, 15, 22],
})

export const pressParagraph = mq({
  margin: '0px!important',
  fontSize: [14, 14, 29, 29, 29],
})
export const pressRightColumn = mq({
  width: '100%',
  float: 'left',
  paddingLeft: [0, 0, 0, 0, '51%'],
  marginBottom: [45, 45, 45, 45, 176],
})

export const pressLink = mq({
  textDecoration: 'underline!important',
  color: 'black!important',
})

export const mailTo = mq({
  color: 'black!important',
  textDecoration: 'none!important',
})

export const pressText = mq({
  paddingBottom: [40, 40, 40, 40, 53],
  paddingLeft: [0, 0, 0, 0, 17],
})

export const pressGrid = mq({
  display: 'flex',
  paddingLeft: [0, 0, 0, 0, 17],
  marginRight: ['-10px', '-10px', '-10px', '0px', '0px'],
  '& > :nth-child(even)': {
    paddingRight: [10, 10, 10, 0, 0],
    paddingLeft: [0, 0, 0, 6, 6],
  },
})

export const pressImage = mq({
  float: 'left',
  flex: ['4', '4', '4', '2', '2'],
  paddingRight: [10, 10, 10, 6, 6],
  marginBottom: [15, 15, 15, 41, 41],
})

export const horizontalLine = mq({
  display: 'block',
  marginLeft: [0, 0, 0, 0, 15],
  borderTop: [
    '1.5px solid black',
    '1.5px solid black',
    '1.5px solid black',
    '1.5px solid black',
    '2px solid black',
  ],
  paddingTop: [55, 55, 55, 55, 53],
})

export const pressImgStyle = mq({
  width: '100%',
})
