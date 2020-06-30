import React from 'react';
import {Link} from 'react-router-dom'
import '../style/Navbar.css'
import LinkedinIcon from '../images/linkedin.svg'
import EmailIcon from '../images/email.svg'
import GithubIcon from '../images/github.svg'


function Navbar() {
  return (
    <div className="navbar">
      <a href="https://www.linkedin.com/in/susan-missaglia/" target="_blank" className="link-icons" id="linkedin-icon">
        <img src={LinkedinIcon} alt="linkedin link" />
      </a>

      <a href="/" target="_blank" className="link-icons">
        <img src={EmailIcon} alt="email link" />
      </a>

      <a href="https://github.com/susanmiss" target="_blank" className="link-icons" id="github-icon">
        <img src={GithubIcon} alt="github link" />
      </a>
      
    </div>
  );
}

export default Navbar;