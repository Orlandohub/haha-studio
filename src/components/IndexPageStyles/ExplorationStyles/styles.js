import facepaint from 'facepaint'
const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const explorationWrapper = mq({
  width: '100%',
  paddingTop: [15, 15, 15, 15, 22],
})

export const explorationText = mq({
  fontSize: ['14px', '14px', '22px', '22px', '22px'],
  width: '100%',
  paddingBottom: [25, 25, 25, 25, 53],
  borderBottom: ['1.5px solid black', '2px solid black'],
  marginBottom: [55, 55, 55, 55, 106],
})

export const explorationImageWrapper = mq({
  width: '100%',
})

export const explorationParagraph = mq({
  margin: '0!important',
})

export const explorationParagraphDate = mq(explorationParagraph, {
  color: '#CACAC8',
})

export const explorationHeaderWrapper = mq({
  paddingTop: [11, 11, 11, 11, 24],
  paddingBottom: [18, 18, 18, 40, 40],
})

export const explorationHeader = mq(explorationParagraph, {
  fontSize: [14, 14, 22, 22, 22],
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
