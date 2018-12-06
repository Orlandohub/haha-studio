import facepaint from 'facepaint'
const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const styles = {
  projectWrapper: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  projectTitle: mq({
    width: ['0%', '0%', '25%'],
    display: ['none', 'none', 'none', 'block'],
    float: 'left',
    marginTop: 40,
    lineHeight: 1.5,
    fontSize: '2em',
    color: 'black',
    height: 100,
  }),

  imageWrapper: mq({
    paddingLeft: [0, 0, 0, 10],
    width: ['100%', '100%', '100%', '75%'],
    float: 'left',
    display: 'block',
    position: 'relative',
    marginTop: [15, 15, 15, 40],

    fontSize: '2em',
    color: 'black',
  }),
}
