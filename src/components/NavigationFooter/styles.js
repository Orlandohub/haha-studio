import facepaint from 'facepaint'

const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const footerWrapper = mq({
  paddingTop: ['35px', '35px', '35px', '35px', '53px'],

  fontSize: [
    '14px!important',
    '14px!important',
    '29px!important',
    '29px!important',
    '29px!important',
  ],
  borderTop: ['1.5px solid black', '2px solid black'],
})

export const arrowRight = mq({
  height: [
    '8px!important',
    '8px!important',
    '18px!important',
    '18px!important',
    '18px!important',
  ],
  width: [
    '23px!important',
    '23px!important',
    '53px!important',
    '53px!important',
    '53px!important',
  ],
  float: 'right',
  verticalAlign: 'middle!important',
})

export const arrowLeft = mq(arrowRight, {
  transform: 'scaleX(-1)!important',
  float: 'left',
})

export const linkStyle = mq({
  verticalAlign: 'middle',
  display: 'inline-block!important',
})

export const linkText = mq({
  textDecoration: 'none!important',
  color: 'black!important',
})

export const spanLeft = mq({
  display: 'inline-block',
  height: '100%',
  verticalAlign: 'middle!important',
  float: 'left!important',
  width: '20%',
  textAlign: 'left',
  marginBottom: ['45px', '45px', '45px', '45px', '80px'],
})

export const spanCenter = mq(spanLeft, {
  width: '60%',
  textAlign: 'center',
})
export const spanRight = mq(spanLeft, {
  textAlign: 'right',
})

export const paragraph = mq({
  margin: '0px!important',
})
