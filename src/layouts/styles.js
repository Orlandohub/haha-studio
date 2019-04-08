import facepaint from 'facepaint'
const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const styles = {
  pageWrapper: mq({
    overflow: 'auto',
    width: '100%',
    height: 'auto',
    display: 'block',
    paddingLeft: ['32px', '32px', '80px', '135px', '130px'],
    paddingRight: ['32px', '32px', '80px', '135px', '130px'],
  }),
}
