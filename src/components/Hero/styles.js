import { keyframes } from 'react-emotion'
import facepaint from 'facepaint'
import hero_image from '../../images/hero_image.jpg'

/*###################### ANIMATION SECTION ##################*/

const bounce = keyframes`
from, 20%, 53%, 80%, to {
transform: translate3d(0,0,0);
}

40%, 43% {
transform: translate3d(0, -10px, 0);
}

70% {
transform: translate3d(0, -5px, 0);
}

90% {
transform: translate3d(0,-4px,0);
}
`
/*######### END #######*/

const breakpoints = [576, 768]

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export const styles = {
  HeroLogoLoader: {
    left: 0,
    top: 0,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    zIndex: 2,
  },
  HiddenHeroLogoLoader: {
    left: 0,
    top: 0,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    zIndex: 2,
    visibility: 'hidden',
    opacity: 0,
    transition: 'visibility 0s 1s, opacity 1s linear',
  },
  HeroLogoContainer: mq({
    marginRight: ['0px!important', '0px!important', 'auto!important'],
    marginLeft: ['0px!important', '0px!important', 'auto!important'],
  }),
  HeroImageWrapper: {
    backgroundImage: `url(${hero_image})`,
    height: '100%',
    width: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'fixed',
    display: 'block',
    transition: 'height 1s ease-in-out',
    WebkitTransition: 'height 1s ease-in-out',
    zIndex: 1,
  },

  ArrowContainer: {
    width: '100%',
    textAlign: 'center',
    position: 'fixed',
    top: '88%',
    zIndex: 1,
  },

  Img: {
    height: '50px',
    transition: 'height 1s ease-in-out',
    cursor: 'pointer',
    animation: `${bounce} 2s ease infinite`,
    transformOrigin: 'center bottom',
    zIndex: 1,
  },

  HideHero: {
    backgroundImage: `url(${hero_image})`,
    height: '0%',
    width: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'fixed',
    display: 'block',
    transition: 'height 1s ease-in-out',
    WebkitTransition: 'height 1s ease-in-out',
    zIndex: 1,
  },

  HideArrow: {
    display: 'none',
  },
}
