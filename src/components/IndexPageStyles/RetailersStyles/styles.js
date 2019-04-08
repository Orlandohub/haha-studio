import facepaint from 'facepaint'
const breakpoints = [576, 768, 1024, 1200, 1366]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const retailersWrapper = mq({
  width: '100%',
  paddingTop: [15, 15, 15, 15, 22],
})

export const leftFloatingEmptySpace = mq({
  width: ['0%', '0%', '0%', '0%', '0%', '25%'],
  float: 'left',
  minHeight: [
    '0px!important',
    '0px!important',
    '0px!important',
    '0px!important',
    '1px!important',
  ],
})
export const retailersParagraph = mq({
  margin: '0px!important',
  fontSize: [10, 10, 20, 20, 20],
})

export const retailersHeader = mq({
  fontSize: [14, 14, 24.5, 24.5, 24.5],
})

export const retailersRightColumn = mq({
  width: ['100%', '100%', '100%', '100%', '100%', '75%'],
  float: 'left',
  paddingLeft: [0, 0, 0, 0, 0, '26%'],
  marginBottom: [150, 150, 150, 150, 205],
})

export const retailersText = mq({
  paddingBottom: [40, 40, 40, 40, 53],
})

export const leftTextColumn = mq({
  float: 'left',
  width: ['54%', '54%', '54%', '54%', '51%', '50%'],
  paddingLeft: [0, 0, 0, 0, 0, 15],
})

export const rightTextColumn = mq({
  float: 'left',
  paddingLeft: [0, 0, 0, 0, 12],
  width: ['46%', '46%', '46%', '46%', '46%', '50%'],
})

export const noBr = mq({
  display: ['none', 'none', 'none', 'block'],
})
