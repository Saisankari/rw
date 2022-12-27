import React from 'react';
import { Element } from 'react-scroll';
import {iconbutton} from '@mui/icons-material';

import { Facebook,LinkedIn,Instagram } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import "./Contactus.css";


const Contactus = () => {
  return (
    <Element className='Contactus' id='Contactus'>
    <h1>Contact</h1>
    <div className='Contactus__container'>
        <p>
            Email : <span>Chinnajt@gmail.com</span>
        </p>
        <p>
            Mobile Number : <span>1234567899</span>

        </p>
        <div className='Contactus__icons'>
            <a href="google.com">
                <IconButton>
                <LinkedIn/>
                </IconButton>
            </a>
            <a href="google.com">
                <IconButton>
                <Facebook/>
                </IconButton>
            </a>
            <a href="google.com">
                <IconButton>
                <Instagram/>
                </IconButton>
            </a>
        </div>
    </div>
    </Element>
  )
}

export default Contactus