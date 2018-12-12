import ScrollTop from 'react-scrolltop-button'
import facepaint from 'facepaint'
import styled from 'react-emotion'
import arrowToTop from '../../images/arrow_go_to_top.svg'
import arrowBlackGoTop from '../../images/arrowBlackGoTop.png'
const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const styles = {
  projectWrapper: mq({
    paddingLeft: 10,
    paddingRight: 10,
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
export const StyledScrollTop = styled(ScrollTop)`
  position: fixed;
  right: 4%;
  display: block;
  bottom: 5%;
  width: 50px;
  height: 41px;
  padding: 15px;
  border: none;
  border-radius: 50px;
  background-image: url(${arrowToTop});
  background-position: center;
  background-color: transparent;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: all 0s;

  &:hover {
    background-image: url(${arrowBlackGoTop});
    background-position: center;
    background-color: transparent;
    background-repeat: no-repeat;
  }
  &:before {
    content: 'top';
    position: relative;
    top: -50px;
    right: 4px;
    font-size: 20px;
    color: #cacac8;
  }
  &:hover:before {
    font-size: 20px;
    color: black;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`
