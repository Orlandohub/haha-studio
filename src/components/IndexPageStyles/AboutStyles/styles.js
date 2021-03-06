// ############### STYLING FOR ABOUT INDEX PAGE #################
import facepaint from 'facepaint'
const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const aboutWrapper = mq({
  width: '100%',
  paddingTop: [15, 15, 15, 15, 22],
})
export const aboutText = mq({
  fontSize: ['14px', '14px', '21px', '21px'],
  margin: '0!important',
  width: ['100%', '100%', '100%', '100%', '80%'],
  letterSpacing: ['normal', 'normal', 'normal', 'normal', '0.25px'],
  lineHeight: ['18px', '18px', '27px', '27px', '27px'],
  '& img': {
    top: ['51px!important', '51px!important', '51px!important', '51px!important', '45px!important'],
  }
})

export const aboutImageWrapper = mq({
  width: '100%',
  marginTop: [40, 40, 40, 40, 53],
})

export const styledAboutParagraph = mq({
  margin: '0px!important',
})
export const aboutRightColumn = mq({
  width: '100%',
  float: 'left',
  paddingLeft: [0, 0, 0, 0, '38%'],
  marginLeft: [0, 0, 0, 0, '17px'],
  marginBottom: [60, 60, 60, 60, 217],
})

// ####################  END  #####################
