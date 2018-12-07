import facepaint from 'facepaint'
const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const styles = {
  pageWrapper: mq({
    overflow: 'auto',
    width: '100%',
    height: 'auto',
    display: 'block',
    position: 'relative',
    paddingLeft: ['32px', '32px', '80px', '140', '160'],
    paddingRight: ['32px', '32px', '80px', '140', '160'],
    paddingBottom: ['60px', '60px', '60px', '246px'],
  }),
}
