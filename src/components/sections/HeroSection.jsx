import React from 'react';
import { FaBrain, FaRocket, FaDownload, FaLinkedin, FaGithub } from 'react-icons/fa';
import TypingAnimation from '../TypingAnimation';
import './HeroSection.scss';
import { motion } from 'framer-motion';
import NeuralNetwork from '../animations/NeuralNetwork';
const HeroSection = () => {
  const resumeUrl = process.env.REACT_APP_RESUME_URL || 'https://drive.google.com/uc?export=download&id=1t1Tc83pxiAMMV9zd8_NJ3S7IRxF_v9zB';

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }} 
      id="home" 
      className="hero-section"
    >
      <div className="hero-bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      <NeuralNetwork />  
      <div className="hero-content">
    <div className="hero-text-container">
      <div className="hero-text">
      <div className="hero-greeting">
        <FaRocket className="greeting-icon" />
        <div className="typing-container">
          <TypingAnimation />
        </div>
      </div>
        
        <div className="glitch-title">
          <span className="title-main">DHIA</span>
          <div className="title-divider">/</div>
          <span className="title-accent">SHAYEB</span>
        </div>
        
        <div className="subtitle-container">
          <div className="loading-bar"></div>
          <h2 className="hero-subtitle">
            <FaBrain className="subtitle-icon" />
            AI Engineer & Full-Stack Architect
          </h2>
        </div>
        
        <p className="hero-description">
          Product-oriented AI Engineer specializing in Agentic AI, RAG, Deep Learning, and Full-Stack delivery. 
          <span className="highlight">Designing and deploying end-to-end AI systems.</span>
        </p>
        
        <div className="hero-cta">
        <a 
          href={resumeUrl}
          className="cta-button primary"
          download="Dhia_Shayeb_Resume.pdf" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDownload className="btn-icon" />
          Download Resume
        </a>
          <div className="social-icons">
            <a href="https://linkedin.com/in/dhia-shayeb" 
              className="social-icon" 
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin />
              <span className="icon-tooltip">Connect on LinkedIn</span>
            </a>
            
            <a href="https://github.com/ChaiebDhia" 
              className="social-icon" 
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub />
              <span className="icon-tooltip">View my GitHub</span>
            </a>
          </div>
          
        </div>
      </div>
    </div>
    
    {/* Executive Portrait */}
    <div className="executive-portrait-container">
      <div className="executive-portrait">
        <img 
          src="/images/DhiaShayeb.png" 
          alt="Dhia Shayeb - Technology Executive" 
          className="portrait-image"
        />
      </div>
    </div>
    
    <div className="hero-stats">
      <div className="stat-item">
        <div className="stat-number">10+</div>
        <div className="stat-label">Tech Stacks</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">24/7</div>
        <div className="stat-label">Availability</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">100%</div>
        <div className="stat-label">Commitment</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">5+</div>
        <div className="stat-label">Timezones</div>
      </div>
    </div>
  </div>
  </motion.section>
  );
};

export default HeroSection;