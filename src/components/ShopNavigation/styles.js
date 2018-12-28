import facepaint from 'facepaint'
const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const ShopNavigationWrapper = mq({
  float: 'left',
  width: ['80%', '80%', '80%', '90%', '70%'],
  paddingLeft: ['0%', '0%', '0%', '0%', '25%'],
  paddingBottom: [60, 60, 60, 60, 53],
})

export const navFooter = mq({
  float: 'left',
  textAlign: 'left',
  width: '33.3%',
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
