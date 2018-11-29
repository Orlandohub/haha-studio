import facepaint from 'facepaint'
const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const styles = {
  pageWrapper: mq({
    height: '100%',
    paddingLeft: ['32px','32px','80px', '140', '160'], 
    paddingRight: ['32px','32px','80px', '140', '160'],  
    paddingTop: 40,
    paddingBottom: 240
  })
}