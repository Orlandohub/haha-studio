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
  marginBottom: 50,
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
})
// ####################  END  #####################
