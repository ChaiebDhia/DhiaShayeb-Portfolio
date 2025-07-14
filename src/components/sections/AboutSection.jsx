import React from 'react';
import { 
  FaLightbulb, FaRocket, FaCode, FaMobileAlt, FaGlobe, 
  FaUniversity, FaCodeBranch, FaMicrochip, FaPaperPlane ,FaBrain,FaCogs
} from 'react-icons/fa';
import './AboutSection.scss';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }} id="about" className="about-section">
        <div className="section-content">
          <div className="section-header">
            <div className="section-title">
              <FaBrain className="section-icon" />
              <h2>TECHNICAL ARCHITECT</h2>
            </div>
            <div className="section-subtitle">
              Engineering solutions across the digital spectrum
            </div>
          </div>
          
          <div className="about-grid">
            <div className="about-text">
              <div className="bio-section">
                <h3 className="bio-title">
                  <FaLightbulb className="bio-icon" />
                  Technical Philosophy
                </h3>
                <p className="bio-content">
                  I solve problems through code, regardless of platform or language. With expertise spanning <strong>web development (MERN/MEAN, Laravel, .NET)</strong>, <strong>mobile applications (Flutter)</strong>, and <strong>system programming (Python, Java)</strong>, I adapt my toolkit to project requirements. My approach combines rigorous computer science fundamentals with practical implementation skills to deliver robust, scalable solutions.
                </p>
              </div>
              
              <div className="bio-section">
                <h3 className="bio-title">
                  <FaRocket className="bio-icon" />
                  Development Approach
                </h3>
                <p className="bio-content">
                  Whether building responsive web interfaces, cross-platform mobile apps, or backend systems, I prioritize clean architecture and maintainable code. My experience ranges from startup prototypes at Bright Soft to enterprise solutions at Tunisie Telecom, giving me perspective on projects of all scales. I thrive in agile environments and continuously expand my technical repertoire to meet evolving challenges.
                </p>
              </div>
              
              <div className="about-highlights">
        <div className="highlight-grid">
          <div className="highlight-item">
            <div className="highlight-icon-container">
              <FaCode className="highlight-icon" />
            </div>
            <div className="highlight-content">
              <h4>Full-Stack Versatility</h4>
              <p>Frontend to DevOps with multiple tech stacks</p>
            </div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon-container">
              <FaMobileAlt className="highlight-icon" />
            </div>
            <div className="highlight-content">
              <h4>Platform Agnostic</h4>
              <p>Web, mobile, desktop, and cloud solutions</p>
            </div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon-container">
              <FaGlobe className="highlight-icon" />
            </div>
            <div className="highlight-content">
              <h4>Global Delivery</h4>
              <p>Remote collaboration across timezones</p>
            </div>
          </div>
        </div>
      </div>

      {/* Education section */}
      <div className="bio-section education-section">
        <div className="section-divider"></div>
        
        <h3 className="bio-title">
          <FaUniversity className="bio-icon" />
          Education & Technical Foundation
        </h3>
        
        <div className="education-timeline">
          {/* ESPRIT */}
          <div className="education-item">
            <div className="education-header">
              <div className="education-icon">
                <FaMicrochip />
              </div>
              <div className="education-title">
                <span className="institution">ESPRIT - Private Higher School of Engineering and Technology</span>
                <span className="degree">Engineer's Degree, Information Technology</span>
              </div>
              <div className="education-period">2024 - 2026</div>
            </div>
            <div className="education-details">
              <div className="education-tag">
                <span>Specialization: Web Technologies & Internet Systems (TWIN)</span>
              </div>
            </div>
          </div>

          {/* ISIK */}
          <div className="education-item">
            <div className="education-header">
              <div className="education-icon">
                <FaCodeBranch />
              </div>
              <div className="education-title">
                <span className="institution">Higher Institute of Computer Science of Kef</span>
                <span className="degree">Master's Degree (Partial), Intelligent Web Applications</span>
              </div>
              <div className="education-period">2023 - 2024</div>
            </div>
            <div className="education-details">
              <p className="transition-note">
                Proactively transitioned academic paths after successfully completing the first year to pursue an Engineering degree at ESPRIT.
              </p>
            </div>
          </div>

          {/* Bachelor's */}
          <div className="education-item">
            <div className="education-header">
              <div className="education-icon">
                <FaCode />
              </div>
              <div className="education-title">
                <span className="institution">Higher Institute of Computer Science of Kef</span>
                <span className="degree">Bachelor of Engineering, Computer Science</span>
              </div>
              <div className="education-period">2020 - 2023</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="cta-section">
        <div className="cta-buttons">
          <a href="#contact" className="cta-button primary">
            <FaPaperPlane /> Start a Conversation
          </a>
          <a href="#projects" className="cta-button secondary">
            <FaCode /> Explore My Projects
          </a>
        </div>
      </div>
            </div>
            
            <div className="about-visual">
              <div className="tech-showcase">
                {/* Central hub with rotating icon and changing text */}
                <div className="tech-hub">
                  <FaCogs className="hub-icon" />
                  <div className="hub-text">TECH</div>
                  <div className="changing-text">STACK</div>
                </div>

                {/* Separate orbits for each tech category */}
                <div className="tech-orbit frontend-orbit">
                  <div className="tech-node">Frontend</div>
                </div>

                <div className="tech-orbit backend-orbit">
                  <div className="tech-node">Backend</div>
                </div>

                <div className="tech-orbit mobile-orbit">
                  <div className="tech-node">Mobile</div>
                </div>

                <div className="tech-orbit devops-orbit">
                  <div className="tech-node">DevOps</div>
                </div>

                <div className="tech-orbit cloud-orbit">
                  <div className="tech-node ai">AI/ML</div>
                </div>

                {/* Animated connection lines */}
                <div className="connection-lines">
                  <div className="line line-1"></div>
                  <div className="line line-2"></div>
                  <div className="line line-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
  );
};

export default AboutSection;