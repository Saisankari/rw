import React from "react";
import { Link, ScrollLink } from "react-scroll";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        
        <h1>
          Rollwin<span>Skating</span>Club
        </h1>
      </div>
      <div className="header__right">
        <Link to="About" smooth={true} duration={500}>
          <h4>About Me</h4>
        </Link>
        <Link to="Events" smooth={true} duration={500}>
          <h4>Events</h4>
        </Link>
        <Link to="Achievements" smooth={true} duration={500}>
          <h4>Achievements</h4>
        </Link>
        <Link to="Experience" smooth={true} duration={500}>
          <h4>Experience</h4>
        </Link>
        <Link to="Contactus" smooth={true} duration={500}>
          <h4>Contactus</h4>
        </Link>
        <h4 className="header__rightbutton">Join with Me</h4>
      </div>
    </div>
  );
};

export default Header;
