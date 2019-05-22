import facepaint from 'facepaint'
const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const explorationWrapper = mq({
  width: '100%',
  paddingTop: [15, 15, 15, 15, 22],
})

export const explorationText = mq({
  fontSize: ['14px', '14px', '20px', '20px', '20px'],
  width: '100%',
  paddingBottom: [41, 41, 41, 41, 54],
  borderBottom: ['1.5px solid #D9D9D7', '2px solid #D9D9D7'],
  marginBottom: [20, 20, 20, 20, 60],
})

export const explorationImageWrapper = mq({
  width: '100%',
})

export const explorationParagraph = mq({
  margin: '0!important',
  lineHeight: ['18px', '18px', '18px', '18px', '28px']
})

export const explorationParagraphDate = mq(explorationParagraph, {
  color: '#CACAC8',
})

export const explorationHeaderWrapper = mq({
  paddingTop: [11, 11, 11, 11, 24],
  paddingBottom: [18, 18, 18, 48, 48],
})

export const explorationHeader = mq(explorationParagraph, {
  fontSize: [14, 14, 20, 20, 20],
})

export const explorationRightColumn = mq({
  width: '100%',
  float: 'left',
  paddingLeft: [0, 0, 0, 0, '38%'],
  marginLeft: [0, 0, 0, 0, 17],
  '& > :last-child': {
    border: 'none',
    padding: 0,
    marginBottom: [60, 60, 60, 60, 205],
  },
})
// ####################  END  #####################
