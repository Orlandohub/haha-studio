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
    paddingLeft: ['32px', '32px', '80px', '135px', '160px'],
    paddingRight: ['32px', '32px', '80px', '135px', '160px'],
    paddingBottom: ['60px', '60px', '60px', '226px'],
  }),
}

export const projectsPage = {
  projectWrapper: mq({
    paddingLeft: 15,
    paddingRight: 15,
  }),

  projectTitle: mq({
    width: ['100%', '100%', '100%', '25%'],
    height: ['100px', '100px', '100px', '1500px'],
    display: 'block',
    float: 'left',
    marginTop: 0,
    lineHeight: 1.5,
    fontSize: '2em',
    color: 'black',
  }),

  imageWrapper: mq({
    paddingLeft: [0, 0, 0, 10],
    width: ['100%', '100%', '100%', '75%'],
    float: 'left',
    display: 'block',
    position: 'relative',
    marginTop: 15,
    marginBottom: [0, 0, 0, 26],

    fontSize: '2em',
    color: 'black',
  }),
}
