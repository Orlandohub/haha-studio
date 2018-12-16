import ScrollTop from 'react-scrolltop-button'
import facepaint from 'facepaint'
import styled from 'react-emotion'
import arrowToTop from '../../images/arrow_go_to_top.svg'
import arrowBlackGoTop from '../../images/arrowBlackGoTop.png'
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
    fontSize: '2em',
    color: 'black',
  }),

  imageWrapper: mq({
    paddingLeft: [0, 0, 0, 15],
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
export const StyledScrollTop = styled(ScrollTop)`
  position: fixed !important;
  right: 4% !important;
  display: block !important;
  bottom: 5% !important;
  width: 50px !important;
  height: 41px !important;
  padding: 15px !important;
  border: none !important;
  border-radius: 50px !important;
  background-image: url(${arrowToTop}) !important;
  background-position: center !important;
  background-color: transparent !important;
  background-repeat: no-repeat !important;
  cursor: pointer !important;
  outline: none !important;
  transition: all 0s !important;

  &:focus {
    outline: none !important;
  }

  &:hover {
    background-image: url(${arrowBlackGoTop}) !important;
    background-position: center !important;
    background-color: transparent !important;
    background-repeat: no-repeat !important;
    outline: none !important;
  }
  &:before {
    content: 'top' !important;
    position: relative !important;
    top: -50px !important;
    right: 5px !important;
    font-size: 20px !important;
    color: #cacac8 !important;
  }
  &:hover:before {
    font-size: 20px !important;
    color: black !important;
  }
  @media (max-width: 1024px) {
    display: none !important;
  }
`
