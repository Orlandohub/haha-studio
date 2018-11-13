import { keyframes } from 'react-emotion'
import hero_image from '../../images/hero_image.jpg'
import entireLogo from '../../images/entireLogo.png'

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

const dissolveFlow = keyframes`
0% {
    opacity:1;
  }
20% {
  opacity:1;
  }
40% {
  opacity:0.90;
  }
60% {
    opacity:0.75;
    }
80% {
    opacity:0.30;
    }
90% {
    opacity:0.10;
    }
100% {
  opacity:0;
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
    opacity: 0.45;
  }
  90% {
    opacity: 0.75;
    }
  100% {
    opacity: 1;
    }      
`
/*######### END #######*/


export const styles = {
   
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
    WebkitTransition:'height 1s ease-in-out',
    zIndex: 1,
    },

    ArrowContainer: {
    width: '100%',
    textAlign:'center',
    position:'fixed',
    animation: `${showArrow} 6s ease-in`,
    top: '88%',
    opacity: '1',
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
    WebkitTransition:'height 1s ease-in-out',
    zIndex: 1,
    },   

    HideArrow: {
        display:'none',
    },

    EntireLogoStyle: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        animation: `${dissolveFlow} 3s ease-in-out`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'block',
        opacity: '0',
        zIndex: 1,
    },

    }  
