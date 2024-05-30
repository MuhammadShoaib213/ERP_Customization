import React from 'react';
import './Footer.css';
import logo from './images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        {/* <p>Cookies & Privacy</p> */}
        <div className="logo">
          <img src={logo} alt="ERP Logo" />
        </div>
      </div>
      <div className="contact-info">
        {/* <FontAwesomeIcon icon={faPhoneAlt} /> */}
        <span>+250 730 007 007</span>
        <br/>
        <span>+1 202 773 6903</span>
      </div>
      <div className="social-media">
        <a href="https://web.facebook.com/people/ERP-Customization/61559852772229/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'facebook-f']} />
        </a>
        <a href="https://www.linkedin.com/company/erpcustomization" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
