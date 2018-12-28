import facepaint from 'facepaint'
const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const termsLicensesWrapper = mq({
  width: '100%',
  paddingTop: [60, 60, 60, 60, 132],
})

export const termsLicensesTitle = mq({
  width: ['100%', '100%', '100%', '100%', '25%'],
  display: 'block!important',
  float: 'left!important',
  fontSize: ['1em', '1em', '2em', '2em'],
  color: 'black!important',
})

export const termsLicensesTextWrapper = mq({
  fontSize: ['1em', '1em', '2em', '2em'],
  width: ['100%', '100%', '100%', '100%', '75%'],
  float: 'left!important',
  display: 'block!important',
  color: 'black!important',
  paddingLeft: [0, 0, 0, 0, 17],
  paddingBottom: [60, 60, 60, 60, 299],
})
