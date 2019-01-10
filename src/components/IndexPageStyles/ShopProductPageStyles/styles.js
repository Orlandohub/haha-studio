import facepaint from 'facepaint'
const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const shopProductWrapper = mq({
  width: '100%',
  paddingTop: [60, 60, 60, 60, 132],
  fontSize: ['1em', '1em', '2em', '2em'],
})

export const leftTitleColumn = mq({
  width: ['100%', '100%', '100%', '100%', '25%'],
  float: 'left',
  paddingBottom: 36,
})

export const mainBodyWrapper = mq({
  width: ['100%', '100%', '100%', '100%', '75%'],
  float: 'left',
  paddingRight: [0, 0, 0, 0, 203],
  paddingLeft: [0, 0, 0, 0, 17],
})

export const galleryWrapper = mq({
  width: '100%',
})

export const imgStyles = mq({
  width: '100%',
})

export const colorPickerWrap = mq({

})

export const colorDescription = mq({
  paddingTop: [20, 20, 20, 36, 36],
  fontSize: 14,
})
export const productDescriptionWrapper = mq({
  clear: 'left',
  width: '100%',
  paddingTop: [20, 20, 20, 20, 44],
})

export const colorBoxWrapper = mq({
  width: ['22px', '22px', '22px', '22px', '36px'],
  height: ['30px', '30px', '30px', '30px', '44px'],
  float: 'left',
  marginRight: [15, 15, 15, 15, 18],
  marginTop: [15, 15, 15, 15, 18],
  '& :hover': {
    cursor: 'pointer',
  }
})

export const colorBoxSelected = mq(colorBoxWrapper, {
  borderBottom: '2px solid black',
})

export const cardButton = mq({
  width: [170, 170, 390, 390, 390],
  height: [40, 40, 53, 53, 53],
  marginTop: [30, 30, 90, 90, 90],
  marginBottom: [90, 90, 180, 180, 180],
  backgroundColor: 'transparent',
  border: '2px solid black',
  transitionDuration: '0.4s',
  outline: 'none',
  '&:hover': {
    backgroundColor: 'black',
    color: 'white',
  },
  '&:active': {
    transform: 'translateY(3px)',
  },
})
