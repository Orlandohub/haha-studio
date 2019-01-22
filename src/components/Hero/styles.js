import { keyframes } from 'react-emotion'
import facepaint from 'facepaint'
import hero_image from '../../images/hero_image.jpg'
import mobile_hero_image from '../../images/M_Hero_image.jpg'
/*###################### ANIMATION SECTION ##################*/

const bounce = keyframes`
from, 0%, 50%, to {
  transform: translate3d(0,0,0);
}

25%, 75% {
  transform: translate3d(0, 10px, 0);
}
`

const showArrow = keyframes`
0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  60% {
    opacity: 0;
  }
  70% {
    opacity: 0;
  }
  80% {
    opacity: 0.45;
  }
  90% {
    opacity: 0.70;
    }
  100% {
    opacity: 1;
    }      
`
/*######### END #######*/

const breakpoints = [576, 768, 1024, 1200]

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
  HeroImageWrapper: mq({
    backgroundImage: [`url(${mobile_hero_image})`, `url(${hero_image})`],
    height: '100vh',
    width: '100%',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'block',
    transition: 'height 0.8s ease-out',
    WebkitTransition: 'height 0.8s ease-out',
    zIndex: 1,
  }),

  ArrowContainer: {
    animation: `${showArrow} 7s ease-in`,
    opacity: '1',
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    bottom: '60px',
    zIndex: 1,
  },

  Img: {
    height: '20px',
    transition: 'height 0.8s ease-out',
    cursor: 'pointer',
    animation: `${bounce} 3s ease 1`,
    animationIterationCount: 'infinite',
    animationDelay: '5s',
    transformOrigin: 'center bottom',
    zIndex: 1,
  },

  HideHero: mq({
    backgroundImage: [`url(${mobile_hero_image})`, `url(${hero_image})`],
    height: '0vh',
    width: '100%',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'block',
    transition: 'height 0.8s ease-out',
    WebkitTransition: 'height 0.8s ease-out',
    zIndex: 1,
    perspective: '2px',
  }),

  HideArrow: {
    display: 'none',
  },

  introLogo: mq({
    display: ['none', 'none', 'block'],
  }),

  mobileIntroLogo: mq({
    display: ['block', 'block', 'none'],
  }),
}
