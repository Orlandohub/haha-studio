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
  marginBottom: [60, 60, 60, 60, 164],
})

export const textParagraph = mq({
  margin: '0!important',
})
export const textHeader = mq(textParagraph, {
  fontSize: [18, 18, 29, 29, 29],
  lineHeight: '28px',
  letterSpacing: ['normal', 'normal', 'normal', 'normal', '0.25px'],
})
export const textRightColumn = mq({
  width: '100%',
  float: 'left',
  paddingLeft: [0, 0, 0, 0, '38%'],
  marginLeft: [0, 0, 0, 0, 17],
})
// ####################  END  #####################
