import React from 'react';
import './Footer.css';
import logo from './images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab); // Make sure WhatsApp is added in the library

const Footer = () => {
  // Helper function to format the phone number for WhatsApp URL
  const formatWhatsAppLink = (number) => `https://wa.me/${number.replace(/ /g, '')}`;

  return (
    <footer className="footer">
      <div>
        <div className="logo">
          <img src={logo} alt="ERP Logo" />
        </div>
      </div>
      <div className="contact-info">
        <a href={formatWhatsAppLink('+250730007007')} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} /> +250 730 007 007
        </a>
        <br/>
        <a href={formatWhatsAppLink('+12027736903')} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} /> +1 202 773 6903
        </a>
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
