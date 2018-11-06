import React from 'react'
import styled, { keyframes } from 'react-emotion'
import arrow from '../images/arrow.png'
import hero_image from '../images/hero_image.jpg'


const HeroImageWrapper  = styled('div')`
    background-image: url('${props => props.src}');
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    display: block; 
    transition: height 1s ease-in-out;
`
const ArrowContainer = styled('div')`
    text-align:center;
    position:relative;
    top: 88%;    
`
const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`
const Img = styled('img')`
    height: auto;
    transition: height 1s ease-in-out;
    cursor: pointer;
    animation: ${bounce} 2s ease infinite;
    transform-origin: center bottom;
`

const Hero =() => (
<HeroImageWrapper src={hero_image}>
     <ArrowContainer> 
         
         <Img src={arrow} alt="arrow" onClick={HideAll} />
         
    </ArrowContainer>    
</HeroImageWrapper>
)
export default Hero
   

function HideAll() {
    document.getElementsByClassName("css-k6dgte-HeroImageWrapper")[0].style.height = "0%"; 
    document.getElementsByClassName("css-4tk8xv-ArrowContainer")[0].style.display = "none";   
}