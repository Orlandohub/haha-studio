// ############### STYLING FOR ABOUT INDEX PAGE #################
import facepaint from 'facepaint'
const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const aboutWrapper = mq({
  width: '100%',
  paddingTop: [15, 15, 15, 15, 22],
})
export const aboutText = mq(aboutImageWrapper, {
  fontSize: ['14px', '14px', '22px', '22px'],
  margin: '0!important',
})

export const aboutImageWrapper = mq({
  width: '100%',
  marginTop: [40, 40, 40, 40, 53],
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
export const styledAboutParagraph = mq({
  margin: '0px!important',
})
export const aboutRightColumn = mq({
  width: ['100%', '100%', '100%', '100%', '75%'],
  float: 'left',
  paddingLeft: [0, 0, 0, 0, 175],
  marginBottom: [60, 60, 60, 60, 217],
})

// ####################  END  #####################
