import facepaint from 'facepaint'
const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const ShopNavigationWrapper = mq({
  float: 'left',
  width: ['100%', '100%', '100%', '100%', '70%'],
  //paddingTop: [60, 60, 60, 60, 258],
  paddingLeft: ['0%', '0%', '0%', '0%', '25%'],
  paddingBottom: 53,
})

export const supportLink = mq({
  float: 'left',
  textAlign: 'left',
  width: '33.3%',
})
export const shippingLink = mq(supportLink, {
  textAlign: ['center', 'center', 'center', 'center', 'left'],
})

export const termsLink = mq(supportLink, {
  textAlign: ['right', 'right', 'right', 'right', 'left'],
})

export const linkStyles = mq({
  fontSize: ['1em', '1em', '2em', '2em'],
  textDecoration: 'none!important',
  color: '#CACAC8!important',
  paddingLeft: [0, 0, 0, 0, 17],
})

export const activeLink = mq(linkStyles, {
  color: 'black!important',
})
