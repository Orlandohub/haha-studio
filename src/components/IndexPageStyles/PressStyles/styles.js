import keira from '../../../images/D_press_cover_index_image.png'
import keiraInverted from '../../../images/keirainverted.png'
import facepaint from 'facepaint'
const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const pressWrapper = mq({
  width: '100%',
  paddingTop: [15, 15, 15, 15, 22],
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
export const pressParagraph = mq({
  margin: '0px!important',
  fontSize: [14, 14, 29, 29, 29],
})
export const pressRightColumn = mq({
  width: ['100%', '100%', '100%', '100%', '75%'],
  float: 'left',
  paddingLeft: [0, 0, 0, 0, 335],
  marginBottom: [45, 45, 45, 45, 176],
})

export const pressLink = mq({
  textDecoration: 'underline!important',
  color: 'black!important',
})

export const mailTo = mq({
  color: 'black!important',
  textDecoration: 'none!important',
})

export const pressText = mq({
  paddingBottom: [40, 40, 40, 40, 53],
})

export const pressGrid = mq({
  borderTop: [
    '1.5px solid black',
    '1.5px solid black',
    '1.5px solid black',
    '1.5px solid black',
    '2px solid black',
  ],
  paddingTop: [55, 55, 55, 55, 53],
  '@media (min-width: 1024px)': {
    '& > :nth-child(even)': {
      paddingRight: 0,
      paddingLeft: 6,
    },
  },
  '@media (max-width: 1023px)': {
    '& > :nth-child(4n)': {
      paddingRight: 0,
      paddingLeft: 5,
    },
  },
})

export const pressImage = mq({
  float: 'left',
  width: ['25%', '25%', '25%', '50%', '50%'],
  paddingRight: [5, 5, 5, 6, 6],
  marginBottom: [15, 15, 15, 41, 41],
})

export const pressImgStyle = mq({
  width: '100%',
})
