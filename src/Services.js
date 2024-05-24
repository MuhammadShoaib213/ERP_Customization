import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faUserPlus, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="services">
      <h2>{t('howToGet')}</h2>
      <div className="service-cards">
        <div className="service-card">
          <FontAwesomeIcon icon={faTasks} className="service-icon" />
          <h3>{t('codeEverything')}</h3>
          <p>{t('codeSubtext')}</p>
        </div>
        <div className="service-card">
          <FontAwesomeIcon icon={faUserPlus} className="service-icon" />
          <h3>{t('hireNewStaff')}</h3>
          <p>{t('hireSubtext')}</p>
        </div>
        <div className="service-card">
          <FontAwesomeIcon icon={faBuilding} className="service-icon" />
          <h3>{t('hireAbroad')}</h3>
          <p>{t('hireAbroadSubtext')}</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
