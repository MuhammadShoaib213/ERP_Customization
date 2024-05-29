import React, { useState } from 'react';
import './ContactForm.css';
import Header2 from './Header2';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    question: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3003/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      toast.success(data.message); // Show success message
    })
    .catch(error => {
      console.error('Error:', error);
      toast.error('Failed to send email'); // Show error message
    });
  };

  return (
    <>
     <Helmet>
        <title>{t('contactPageTitle')}</title>
        <meta name="description" content={t('contactPageDescription')} />
      </Helmet>
      <Header2 />
      <section id="contact-form" className="contact-form">
        <h2>{t('contactUsHeading')}</h2>
        <p>{t('noObligations')}</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group form-group1">
            <input
              type="text"
              id="name-form"
              name="name"
              placeholder={t('name')}
              required
              onChange={handleChange}
              value={formData.name}
            />
            <input
              type="email"
              id="email-form"
              name="email"
              placeholder={t('email')}
              required
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="form-group form-group2">
            <input
              type="text"
              id="company-form"
              name="company"
              placeholder={t('company')}
              required
              onChange={handleChange}
              value={formData.company}
            />
            <input
              type="tel"
              id="phone-form"
              name="phone"
              placeholder={t('phone')}
              required
              onChange={handleChange}
              value={formData.phone}
            />
            <textarea
              id="question-form"
              name="question"
              placeholder={t('importantQuestion')}
              required
              onChange={handleChange}
              value={formData.question}
            ></textarea>
            <button type="submit" className="send-button send-button-form">
              {t('send')}
            </button>
          </div>
        </form>
      </section>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default ContactForm;
