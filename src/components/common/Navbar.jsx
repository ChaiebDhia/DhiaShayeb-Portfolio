import React from 'react';
import { FaRocket, FaBrain, FaProjectDiagram, FaCode, FaLightbulb, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.scss';

const Navbar = ({ activeSection, scrollToSection, isNavOpen, setIsNavOpen }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand" onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
          <img 
            src="/images/SD.png" 
            alt="Dhia Shayeb Logo"
            className="brand-icon" 
            style={{
              width: '1.8rem',
              height: '1.8rem',
              filter: 'drop-shadow(0 0 5px rgba(0, 247, 255, 0.5))',
              animation: 'pulse 2s infinite alternate'
            }}
          />
          <span className="brand-text">Dhia Shayeb</span>
          <div className="brand-subtitle">Full-Stack AI Engineer</div>
        
        <div className={`nav-menu ${isNavOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>
            <FaRocket /> Home
          </a>
          <a href="#about" onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>
            <FaBrain /> About
          </a>
          <a href="#projects" onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>
            <FaProjectDiagram /> Projects
          </a>
          <a href="#skills" onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>
            <FaCode /> Skills
          </a>
          <a href="#expertise" onClick={() => scrollToSection('expertise')} className={activeSection === 'expertise' ? 'active' : ''}>
            <FaLightbulb /> Expertise
          </a>
          <a href="#contact" onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>
            <FaEnvelope /> Contact
          </a>
        </div>
        
        <button className="nav-toggle" onClick={() => setIsNavOpen(!isNavOpen)}>
          {isNavOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;