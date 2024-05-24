import React from 'react';
import './ContactForm.css';
import Header2 from './Header2';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <>
          <Header2 />
      <section id="contact-form" className="contact-form">
        <h2>{t('contactUsHeading')}</h2>

        <p>{t('noObligations')}</p>
        <form>
          <div className="form-group form-group1">
            <input type="text" id="name-form" name="name" placeholder={t('name')} required />
            <input type="email" id="email-form" name="email" placeholder={t('email')} required />
          </div>
          <div className="form-group form-group2">
            <input type="text" id="company-form" name="company" placeholder={t('company')} required />
            <input type="tel" id="phone-form" name="phone" placeholder={t('phone')} required />

          <textarea id="question-form" name="question" placeholder={t('importantQuestion')} required></textarea>
          <button type="submit" className="send-button send-button-form">{t('send')}</button>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default ContactForm;
