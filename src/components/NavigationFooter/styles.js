import facepaint from 'facepaint'
const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const footerWrapper = mq({
  paddingTop: ['35px', '35px', '35px', '35px', '53px'],
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'baseline',

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
  verticalAlign: 'baseline',
})

export const arrowLeft = mq(arrowRight, {
  transform: 'scaleX(-1)!important',
})

export const linkText = mq({
  textDecoration: 'none!important',
  color: 'black!important',
})

export const spanCenter = mq({
  width: '60%',
  textAlign: 'center',
  marginBottom: ['45px', '45px', '45px', '45px', '80px'],
})

export const paragraph = mq({
  margin: '0px!important',
})
