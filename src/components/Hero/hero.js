import React from 'react'
import { css } from 'react-emotion'
import arrow from '../../images/arrow.png'
import { hero_styles } from './hero_styles'

class Hero extends React.Component {
  constructor(){
        super();
  
        this.state = {
             show: true
        }
  }

  slideUP(){
    this.setState({show: !this.state.show})
    }
      render(){
        let hero_class = this.state.show ? css(hero_styles.HeroImageWrapper) : css(hero_styles.HideHero);
        let arrowClass = this.state.show ? css(hero_styles.Img) : css(hero_styles.HideArrow);
        let arrowContainer = this.state.show ? css(hero_styles.ArrowContainer) : css(hero_styles.HideArrow); 
        
        return (

          <div className={hero_class}>
            <div className={arrowContainer}>          
              <img className={arrowClass} src={arrow} alt="arrow" onClick={this.slideUP.bind(this)}/>         
            </div>    
          </div>
        ) 
    }
  }     
               
export default Hero
   
