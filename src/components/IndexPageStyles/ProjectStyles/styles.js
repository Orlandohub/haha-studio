import facepaint from 'facepaint'
const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const projectWrapper = mq({
  width: '100%',
  height: '100%',
  position: 'relative',
  paddingTop: [0, 0, 0, 0, 126],
})

export const projectTitle = mq({
  width: ['100%', '100%', '100%', '100%', '25%'],
  height: ['auto', 'auto', 'auto', 'auto', 'auto'],
  display: ['block!important', 'block!important', 'block!important', 'block!important', 'inline-block!important'],
  // float: 'left!important',
  lineHeight: 1,
  marginTop: 0,
  fontSize: ['1em', '1em', '2em', '2em'],
  color: 'black!important',
  paddingRight: 10,
  paddingBottom: 26,
  position: 'relative',
})

export const projectTitleSliderWrap = mq({
  display: ['block', 'block', 'block', 'block', 'flex']
})

export const imageWrapper = mq({
  paddingRight: [0, 0, 0, 0, 191],
  width: ['100%', '100%', '100%', '100%', '75%'],
  // float: 'left!important',
  display: ['block!important', 'block!important', 'block!important', 'block!important', 'inline-block!important'],
  position: 'relative!important',
  marginTop: 5,
  color: 'black!important',
  paddingLeft: [0, 0, 0, 0, 15],
  paddingBottom: 20,
})

export const textWrapper = mq(imageWrapper, {
  paddingTop: [40, 40, 40, 40, 106],
  marginTop: 0,
  paddingBottom: [60, 60, 60, 60, 212],
  fontSize: ['1em', '1em', '2em', '2em'],
})

export const Link = mq({
  textDecoration: 'underline!important',
  color: 'black!important',
})

export const styledParagraph = mq({
  margin: '0!important',
  '& a': {
    textDecoration: 'underline!important',
    color: 'black!important',
  }
})

// ############ END OF STYLING ELEMENTS OF PROJECTS INDEX PAGE #############
