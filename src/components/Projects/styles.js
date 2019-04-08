import facepaint from 'facepaint'
const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const styles = {
  projectWrapper: mq({
    width: '100%',
    '& > :last-child': {
      paddingBottom: ['60px', '60px', '60px', '226px'],
    },
  }),

  projectTitle: mq({
    width: ['0%', '0%', '25%'],
    display: ['none', 'none', 'none', 'block'],
    float: 'left',
    marginTop: 0,
    lineHeight: 1.5,
    fontSize: '1.75em',
    color: 'black',
    textDecoration: 'none',
    '& a': {
      color: 'black',
    },
    '& a:hover': {
      textDecoration: 'none',
    },
  }),

  imageWrapper: mq({
    paddingLeft: [0, 0, 0, 17],
    width: ['100%', '100%', '100%', '75%'],
    float: 'left',
    display: 'block',
    position: 'relative',
    marginTop: 15,
    marginBottom: [0, 0, 0, 26],

    fontSize: '1.75em',
    color: 'black',
  }),
}
