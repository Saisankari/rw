import React from 'react';
import { Element } from 'react-scroll';
import img1 from '../../Assets/img1.jpg';
import img2 from '../../Assets/img2.jpg';
import './Achievementscontainer.css';



const Achievementscontainer = () => {
  return (
    <Element className="Achievementcontainer" id="Achievements">
<div className="Achievementcontainer__image">
            <img src={img1} alt=" skate"/>
            </div>  
            <div className="Achievementcontainer1__image">
            <img src={img2} alt=" skate"/>
            </div>  
            

    </Element>
  )
}

export default Achievementscontainer