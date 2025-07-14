import React from 'react';
import { 
  FaMicrochip, FaLightbulb, FaCertificate, FaProjectDiagram, FaGithub, 
  FaCloud, FaMagic, FaCode, FaGlobe, FaBolt, FaHandshake 
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import './ExpertiseSection.scss';

const ExpertiseSection = () => {
  return (
    <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }} id="expertise" className="expertise-section">
            <div className="section-content">
              <div className="section-header">
                <div className="section-title">
                  <FaLightbulb className="section-icon" />
                  <h2>EXPERTISE MATRIX</h2>
                </div>
                <div className="section-subtitle">
                  Professional credentials and specialized knowledge domains
                </div>
              </div>
              
              <div className="expertise-grid">
                {/* Technical Certifications Column */}
                <div className="expertise-column">
                  <div className="column-title">
                    <FaMicrochip className="column-icon" />
                    <h3>Technical Certifications</h3>
                  </div>
                  
                  <div className="expertise-list">
                    <div className="expertise-item">
                      <div className="item-header">
                        <div className="item-info">
                          <div className="item-title">
                            <FaCertificate className="item-icon" />
                            <h4>Scrum Fundamentals</h4>
                          </div>
                          <div className="item-subtitle">Agile Methodology & Project Management</div>
                          <div className="item-description">
                            Certified in Scrum principles, sprint planning, and agile development practices for efficient project delivery.
                          </div>
                        </div>
                        <div className="verification-badge">Certified</div>
                      </div>
                      <div className="item-details">
                        <div className="detail-tags">
                          <span className="tag">Scrum</span>
                          <span className="tag">Agile</span>
                          <span className="tag">Sprint Planning</span>
                        </div>
                        <div className="detail-year">2024</div>
                      </div>
                      <div className="expertise-glow"></div>
                    </div>
                  </div>
                </div>
                
                {/* Professional Expertise Column */}
                <div className="expertise-column">
                  <div className="column-title">
                    <FaLightbulb className="column-icon" />
                    <h3>Professional Expertise</h3>
                  </div>
                  
                  <div className="expertise-list">
                    <div className="expertise-item">
                      <div className="item-header">
                        <div className="item-info">
                          <div className="item-title">
                            <FaProjectDiagram className="item-icon" />
                            <h4>Microservices Architecture</h4>
                          </div>
                          <div className="item-subtitle">Distributed Systems & MSA Implementation</div>
                          <div className="item-description">
                            Comprehensive expertise in microservices architecture design, implementation, and deployment with modern DevOps practices.
                          </div>
                        </div>
                        <div className="verification-badge">Specialist</div>
                      </div>
                      <div className="item-details">
                        <div className="detail-tags">
                          <span className="tag">API Gateway</span>
                          <span className="tag">Service Discovery</span>
                          <span className="tag">Docker</span>
                          <span className="tag">Security</span>
                        </div>
                        <div className="detail-year">2024</div>
                      </div>
                      <div className="expertise-glow"></div>
                    </div>
                    
                    <div className="expertise-item">
                      <div className="item-header">
                        <div className="item-info">
                          <div className="item-title">
                            <FaGithub className="item-icon" />
                            <h4>Full-Stack Development</h4>
                          </div>
                          <div className="item-subtitle">Modern Web Technologies</div>
                          <div className="item-description">
                            Proficient in developing end-to-end applications using modern frameworks, with focus on scalable architecture and best practices.
                          </div>
                        </div>
                        <div className="verification-badge portfolio">Portfolio</div>
                      </div>
                      <div className="item-details">
                        <div className="detail-tags">
                          <span className="tag">React</span>
                          <span className="tag">Node.js</span>
                          <span className="tag">APIs</span>
                          <span className="tag">DevOps</span>
                        </div>
                        <div className="detail-year">2024</div>
                      </div>
                      <div className="expertise-glow"></div>
                    </div>
                    
                    <div className="expertise-item">
                      <div className="item-header">
                        <div className="item-info">
                          <div className="item-title">
                            <FaCloud className="item-icon" />
                            <h4>Cloud Integration</h4>
                          </div>
                          <div className="item-subtitle">Containerization & Deployment</div>
                          <div className="item-description">
                            Experience in containerizing applications, implementing CI/CD pipelines, and managing distributed system deployments.
                          </div>
                        </div>
                        <div className="verification-badge">Proficient</div>
                      </div>
                      <div className="item-details">
                        <div className="detail-tags">
                          <span className="tag">Docker</span>
                          <span className="tag">Kubernetes</span>
                          <span className="tag">CI/CD</span>
                          <span className="tag">Config Management</span>
                        </div>
                        <div className="detail-year">2024</div>
                      </div>
                      <div className="expertise-glow"></div>
                    </div>
    
                    <div className="expertise-item">
                      <div className="item-header">
                        <div className="item-info">
                          <div className="item-title">
                            <FaMagic className="item-icon" /> 
                            <h4>UI/UX Development</h4>
                          </div>
                          <div className="item-subtitle">Design Thinking in Team Projects</div>
                          <div className="item-description">
                            Applied the full UX process (research → Figma prototyping → testing → iteration) in collaborative projects. Focused on user-centered design, usability testing, and seamless UI integration into functional code.
                          </div>
                        </div>
                        <div className="verification-badge portfolio">Project Experience</div> 
                      </div>
                      <div className="item-details">
                        <div className="detail-tags">
                          <span className="tag">Figma</span>
                          <span className="tag">User Testing</span>
                          <span className="tag">Iterative Design</span>
                          <span className="tag">Team Collaboration</span>
                        </div>
                        <div className="detail-year">2024</div>
                      </div>
                      <div className="expertise-glow"></div>
                    </div>
            
                  </div>
                </div>
              </div>
              
              {/* Professional Recognition */}
              <div className="recognition-section">
                <div className="recognition-header">
                  <h3>Professional Recognition</h3>
                  <p>Academic achievements and project success metrics</p>
                </div>
                
                <div className="recognition-grid">
                  <div className="recognition-card">
                    <FaCode className="recognition-icon" />
                    <div className="recognition-title">Polyvalent</div>
                    <div className="recognition-description">
                      Full-stack to AI/ML solutions
                    </div>
                    <div className="recognition-metric">Versatile</div>
                  </div>
                  
                  <div className="recognition-card">
                    <FaGlobe className="recognition-icon" />
                    <div className="recognition-title">Global</div>
                    <div className="recognition-description">
                      Remote collaboration expert
                    </div>
                    <div className="recognition-metric">Worldwide</div>
                  </div>
                  
                  <div className="recognition-card">
                    <FaBolt className="recognition-icon" />
                    <div className="recognition-title">Efficient</div>
                    <div className="recognition-description">
                      Fast turnaround times
                    </div>
                    <div className="recognition-metric">Timely</div>
                  </div>
                  
                  <div className="recognition-card">
                    <FaHandshake className="recognition-icon" />
                    <div className="recognition-title">Reliable</div>
                    <div className="recognition-description">
                      Consistent deliverables
                    </div>
                    <div className="recognition-metric">Trusted</div>
                  </div>
                </div>
              </div>
            </div>
        </motion.section>
  );
};

export default ExpertiseSection;