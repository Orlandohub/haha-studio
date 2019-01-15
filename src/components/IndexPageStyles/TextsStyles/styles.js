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
  paddingBottom: [37, 37, 37, 37, 29],
  borderBottom: ['1.5px solid #D9D9D7', '2px solid #D9D9D7'],
  marginBottom: [20, 20, 20, 20, 75],
})
export const linkText = mq({
  color: 'black!important',
  textDecoration: 'none!important',
})

export const textParagraph = mq({
  margin: '0!important',
  lineHeight: '28px',
  letterSpacing: ['normal', 'normal', 'normal', 'normal', '0.25px'],
})

export const textHeader = mq(textParagraph, {
  fontSize: [14, 14, 29, 29, 29],
  paddingBottom: ['22px', '22px', '22px', '22px', '29px'],
})
export const textRightColumn = mq({
  width: '100%',
  float: 'left',
  paddingLeft: [0, 0, 0, 0, '38%'],
  marginLeft: [0, 0, 0, 0, 17],
  '& > :last-child': {
    border: 'none!important',
    padding: 0,
    marginBottom: [60, 60, 60, 60, 247],
  },
})
// ####################  END  #####################
