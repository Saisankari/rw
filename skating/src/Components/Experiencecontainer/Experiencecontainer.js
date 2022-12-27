import React from 'react'
import Experience from '../Experiencebox/Experience';
import { Element } from 'react-scroll';
import "./Experiencecontainer.css";

const Experiencecontainer = () => {
  return (
    <Element className="Experiencecontainer" id="Experience">
<h1>
    Experience
</h1>
<div className='Experiencecontainer__info'>
    <Experience number="+10" title=" Speed Skating "/>
    <Experience number="+7" title=" Skating  cinimatic Dance "/>
    <Experience number="+10" title="Skating in Schools " style={{backgroundColor:"#f64c08"}}/>
    <Experience number="+6" title="Skating in Colleges"/>
</div>
    </Element>
  )
}

export default Experiencecontainer