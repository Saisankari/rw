import React from 'react';
import{Element} from 'react-scroll';
import Topcontent from '../Topcontent/Topcontent';
import './Topcontainer.css';



const Topcontainer = () => {
  return (
    <Element name='About' className='Topcontainer'>
     <Topcontent/>
    </Element>
  )
}

export default Topcontainer