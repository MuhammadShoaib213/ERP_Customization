import React from 'react';
import './Differences.css';
import { useTranslation } from 'react-i18next';

const Differences = () => {
  const { t } = useTranslation();

  return (
    <section id="differences" className="differences">
      <h2>{t('whatMakesDifferent')}</h2>
      <div className="difference-cards">
        <div className="difference-card">
          <h3>{t('local')}</h3>
          <p>{t('localSubtext')}</p>
        </div>
        <div className="difference-card">
          <h3>{t('specialized')}</h3>
          <p>{t('specializedSubtext')}</p>
        </div>
      </div>
    </section>
  );
};

export default Differences;
