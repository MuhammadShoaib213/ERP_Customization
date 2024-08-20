import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact-section" className="contact-section">
      <h2>{t('contactUsHeading')}</h2>
      <Link to="/contactform">
        <button className="cta-button cta-button-contact">{t('contactUsButton')}</button>
      </Link>
    </section>
  );
};

export default Contact;
