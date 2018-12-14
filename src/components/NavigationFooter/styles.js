import facepaint from 'facepaint'

const breakpoints = [1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const footerWrapper = mq({
  position: 'relative!important',
  paddingTop: ['35px', '58px'],
  paddingBottom: ['45px', '80px'],
  //marginLeft: 10,
  //marginRight: 10,
  display: 'block!important',
  textAlign: 'center!important',
  fontSize: ['14px!important', '29px!important'],
  color: '#000000!important',
  borderTop: ['1.5px solid black', '2px solid black'],
})

export const arrowRight = mq({
  display: 'block!important',
  height: ['8px!important', '18px!important'],
  width: ['23px!important', '53px!important'],
  float: 'right',
})

export const arrowLeft = mq(arrowRight, {
  transform: 'scaleX(-1)!important',
  float: 'left',
})

export const linkRight = mq({
  position: 'absolute',
  top: ['45px!important', '75px!important'],
  right: 0,
  display: 'inline-block!important',
  float: 'right!important',
  width: '70px!important',
})

export const linkLeft = mq(linkRight, {
  float: 'left!important',
  left: 0,
})

export const linkText = mq({
  textDecoration: 'none!important',
  color: 'black!important',
})
