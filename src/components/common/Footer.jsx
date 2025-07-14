import React from 'react';
import { FaFileContract, FaLock } from 'react-icons/fa';
import './Footer.scss';

const Footer = ({ setShowTerms, setShowPrivacy }) => {
  return (
    <footer className="portfolio-footer">
      <div className="footer-particle"></div>
      <div className="footer-particle"></div>
      <div className="footer-content">
        <div className="brand-logo-footer">
          <img 
            src="/images/SD.png" 
            alt="Dhia Shayeb Logo"
            className="footer-logo"
          />
        </div>
        <div className="copyright-info">
          <p>© {new Date().getFullYear()} Dhia Shayeb. All Rights Reserved.</p>
          <p className="copyright-notice">
            The content, design, and code of this portfolio are protected under international 
            copyright laws. Unauthorized reproduction or distribution of any materials 
            without express written permission is strictly prohibited.
          </p>
        </div>
        <div className="footer-links">
          <a href="#privacy" onClick={(e) => { e.preventDefault(); setShowPrivacy(true); }}>
            <FaLock /> Privacy Policy
          </a>
          <a href="#terms" onClick={(e) => { e.preventDefault(); setShowTerms(true); }}>
            <FaFileContract /> Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;