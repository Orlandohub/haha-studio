import facepaint from 'facepaint'
const breakpoints = [576, 768, 1024, 1200]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

/* Slideshow container */
export const slidesContainer = mq({
  overflow: 'hidden',
  position: 'relative',
  width: '100%',
})

/* image container styles */
export const hiddenSlideRight = mq({
  display: 'block',
  width: '100%',
  position: 'absolute',
  top: 0,
  transform: 'translateX(-100%)',
  transition: 'all 0.2s ease-in',
  WebkitTransition: 'all 0.2s ease-in',
})

export const activeSlide = mq(hiddenSlideRight, {
  position: 'relative',
  transform: 'translateX(0%)',
})

export const hiddenSlideLeft = mq(hiddenSlideRight, {
  transform: 'translateX(100%)',
})

/* image styles */
export const myImage = mq({
  width: '100%',
})

/* Next & previous buttons */
export const prev = mq({
  cursor: 'pointer',
  position: 'absolute',
  width: '25%',
  height: '100%',
  padding: '25px',
  backgroundColor: 'transparent',
  color: 'transparent',
  fontWeight: 'bold',
  fontSize: '40px',
  transition: '0.2s ease-out',
  border: 'none',
  outline: 'none',
  userSelect: 'none',
  zIndex: 2,
  textDecoration: 'none',
  textAlign: 'left',
  '&:hover': {
    color: 'white',
  },
})

/* Position the "next button" to the right */
export const next = mq(prev, {
  right: 0,
  textAlign: 'right',
})

/* bars wrapper */

export const barsContainers = mq({
  marginTop: [15, 15, 15, 40, 40],
  marginRight: '-3px',
})

/* The dots/bullets/indicators */
export const indicators = mq({
  cursor: 'pointer',
  height: ['2px', '2px', '3px', '3px'],
  width: '100%',
  backgroundColor: '#D9D9D7',
  transition: 'background-color 0.3s ease-in',
  ':active,:hover': {
    backgroundColor: '#717171',
  },
})

export const activeBars = mq(indicators, {
  backgroundColor: 'black',
})
