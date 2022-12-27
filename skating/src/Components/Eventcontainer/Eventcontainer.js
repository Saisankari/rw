import React from 'react'
import {Element} from 'react-scroll'
import skating from '../../Assets/skating.jpg';
import { LinearProgress } from '@mui/material';
import './Eventcontainer.css';
import '../../index.css';




const Eventcontainer = () => {
    return (
        <Element className="Eventcontainer" id="Events">
          <div className="Eventcontainer__image">
            <img src={skating} alt=" skate"/>
            </div>  
            <div className="Eventcontainer__text">
            <h2>Events</h2>
            <div className='Eventcontainer__event'>
                <h5>District level</h5>
                <div className='Eventcontainer__slider Eventcontainer__slider1'>
                    <LinearProgress variant="determinate" value={90}/>
                </div>
                
            </div>
            <div className='Eventcontainer__event'>
                <h5>State level</h5>
                <div className='Eventcontainer__slider Eventcontainer__slider2'>
                    <LinearProgress variant="determinate" value={75}/>
                </div>
                
            </div>
            <div className='Eventcontainer__event'>
                <h5>National level</h5>
                <div className='Eventcontainer__slider Eventcontainer__slider3'>
                    <LinearProgress variant="determinate" value={80}/>
                </div>
                
            </div>
            <div className='Eventcontainer__event'>
                <h5>Campionship</h5>
                <div className='Eventcontainer__slider Eventcontainer__slider4'>
                    <LinearProgress variant="determinate" value={70}/>
                </div>
                
            </div>
            <div className='Eventcontainer__event'>
                <h5>Awards</h5>
                <div className='Eventcontainer__slider Eventcontainer__slider5'>
                    <LinearProgress variant="determinate" value={50}/>
                </div>
                
            </div>
            <div className='Eventcontainer__event'>
                <h5>Troppies</h5>
                <div className='Eventcontainer__slider Eventcontainer__slider6'>
                    <LinearProgress variant="determinate" value={60}/>
                </div>
                
            </div>
            </div>
        </Element>
    );
};
export default Eventcontainer