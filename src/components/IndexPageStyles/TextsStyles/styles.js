import facepaint from 'facepaint'
const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const textWrapper = mq({
  width: '100%',
  paddingTop: [15, 15, 15, 15, 22],
})
export const textText = mq({
  fontSize: ['14px', '14px', '22px', '22px', '22px'],
  width: '100%',
  paddingBottom: [25, 25, 25, 25, 53],
  borderBottom: ['1.5px solid black', '2px solid black'],
  marginBottom: [55, 55, 55, 55, 106],
})
export const linkText = mq({
  color: 'black!important',
  textDecoration: 'none!important',
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
export const textParagraph = mq({
  margin: '0!important',
})

export const textHeader = mq(textParagraph, {
  fontSize: [18, 18, 29, 29, 29],
})
export const textRightColumn = mq({
  width: ['100%', '100%', '100%', '100%', '75%'],
  float: 'left',
  paddingLeft: [0, 0, 0, 0, 175],
  '& > :last-child': {
    border: 'none',
    padding: 0,
    marginBottom: [60, 60, 60, 60, 247],
  },
})
// ####################  END  #####################
