import React from 'react';
import './Footer.css';
import logo from './images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>Cookies & Privacy</p>
      <div className="logo">
        <img src={logo} alt="ProfResults Logo" />
      </div>
      <div className="contact-info">
        <FontAwesomeIcon icon={faPhoneAlt} />
        <span>+250 730 007 007</span>
      </div>
    </footer>
  );
};

export default Footer;
