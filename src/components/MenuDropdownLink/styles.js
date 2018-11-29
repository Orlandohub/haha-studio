import facepaint from 'facepaint'

const breakpoints = [576, 768]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const styles = {
  subMenuDropdownItem: mq({
    paddingBottom: ['10px','10px', 5],
    paddingTop: ['10px','10px', 5],
    marginBottom: 0,
    paddingLeft: 15,
    paddingRight: 0,
    width: ['20vw','100px', 160],
  }),
  subMenuDropdownLink: mq({
    fontSize: ['1em','1.5em','2em'],
    color: '#CACAC8',
    ':hover,:focus': {
      color: '#CACAC8',
      textDecoration: 'none',
    },
  }),
  subMenuDropdownLinkActive: mq({
    fontSize: ['1em','1.5em','2em'],
    color: 'black',
    ':hover,:focus': {
      color: 'black',
      textDecoration: 'none',
    },
  })
}
