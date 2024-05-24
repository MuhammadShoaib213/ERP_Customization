import React from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';
import logo from './images/logo.png';

const Header2 = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src={logo} alt="ProfResults Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
          </ul>
        </nav>
        <div className="language-selector">
          <select onChange={(e) => changeLanguage(e.target.value)}>
            <option value="en">EN</option>
            <option value="kin">KIN</option>
            <option value="sw">SW</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header2;
