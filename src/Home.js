import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import Services from './Services';
import Differences from './Differences';
import Contact from './Contact';
import Footer from './Footer';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <section className="hero">
        <h1>{t('headline1')}</h1>
        <h1>{t('headline2')}</h1>
        <h1>{t('headline3')}</h1>
        <br/>
        <h2 className="sub-heading">{t('subheading1')}</h2>
        <h2 className="sub-heading">{t('subheading2')}</h2>
        <Link to="/ContactForm">
        <button className="cta-button">{t('contactButton')}</button>
        </Link>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Services />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Differences />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
