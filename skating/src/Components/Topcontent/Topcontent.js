import React from 'react';
import {Link} from 'react-scroll';
import './Topcontent.css';



const Topcontent = () => {
    return (
        <div className='Topcontent'>
            <div className='Topcontent__container'>
                <h1> Mr.J.Chinna</h1>
                <p>A Professtional Skating Master</p>
                <a href='www.google.com'>
                    <button className='Topcontent__downloadbutton'>Download</button>
                </a>
                <Link to="Achievements" smooth={true} duration={500}>
                    <button className='Topcontent__workbutton'>My work</button>
                </Link>
            </div>
        </div>
    );
}

export default Topcontent