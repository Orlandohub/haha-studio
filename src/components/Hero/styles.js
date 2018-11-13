import { keyframes } from 'react-emotion'
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


export const styles = {
   
    HeroImageWrapper: {
    backgroundImage: `url(${hero_image})`,
    height: '100vh',
    width: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'block',
    transition: 'height 1s ease-in-out',
    WebkitTransition:'height 1s ease-in-out',
    zIndex: 1,
    },

    ArrowContainer: {
    width: '100%',
    textAlign:'center',
    position: 'relative',
    top: '88%',
    //zIndex: 1,
    },

    Img: {
    height: '50px',
    transition: 'height 1s ease-in-out',
    cursor: 'pointer',
    animation: `${bounce} 2s ease infinite`,
    transformOrigin: 'center bottom',
    //zIndex: 1,
    },

    HideHero: {
    backgroundImage: `url(${hero_image})`,
    height: '0vh',
    width: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'block',
    transition: 'height 1s ease-in-out',
    WebkitTransition:'height 1s ease-in-out',
    zIndex: 1,
    },   

    HideArrow: {
        display:'none',
    },
    }   