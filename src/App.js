import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ContactForm from './ContactForm';
import './App.css';
import i18n from './i18n';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ContactForm" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;
