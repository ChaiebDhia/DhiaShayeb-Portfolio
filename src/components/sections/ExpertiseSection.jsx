import React from 'react';
import { 
  FaMicrochip, FaLightbulb, FaCertificate, FaProjectDiagram, FaGithub, 
  FaCloud, FaCode, FaBolt 
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
{/* Technical & Analytical Capabilities Column */}
                  <div className="expertise-column">
                    <div className="column-title">
                      <FaMicrochip className="column-icon" />
                      <h3>AI & Technical Expertise</h3>
                    </div>
                    
                    <div className="expertise-list">
                      <div className="expertise-item">
                        <div className="item-header">
                          <div className="item-info">
                            <div className="item-title">
                              <FaCertificate className="item-icon" />
                              <h4>Agentic AI & LLMs</h4>
                            </div>
                            <div className="item-subtitle">LangGraph • Prompt Engineering • LLMs</div>
                            <div className="item-description">
                              Mastery in orchestrating multi-agent systems, fallback strategies, and conditional routing using LangGraph. Proven ability to combat hallucinations via grounding.
                            </div>
                          </div>
                          <div className="verification-badge">Specialist</div>
                        </div>
                        <div className="item-details">
                          <div className="detail-tags">
                            <span className="tag">LangGraph</span>
                            <span className="tag">LLaMA 3</span>
                            <span className="tag">Prompt Engineering</span>
                            <span className="tag">Multi-Agent</span>
                          </div>
                          <div className="detail-year">2026</div>
                        </div>
                        <div className="expertise-glow"></div>
                      </div>
                      
                      <div className="expertise-item">
                        <div className="item-header">
                          <div className="item-info">
                            <div className="item-title">
                              <FaBolt className="item-icon" />
                              <h4>Advanced RAG Systems</h4>
                            </div>
                            <div className="item-subtitle">Hybrid Search • Vector Databases • RRF</div>
                            <div className="item-description">
                              Architecting dense retrieval pipelines using ChromaDB and blending BM25 with exact-match signals through Reciprocal Rank Fusion for perfect contextual injections.
                            </div>
                          </div>
                          <div className="verification-badge">Expert</div>
                        </div>
                        <div className="item-details">
                          <div className="detail-tags">
                            <span className="tag">ChromaDB</span>
                            <span className="tag">RAG</span>
                            <span className="tag">BM25</span>
                            <span className="tag">Vector Search</span>
                          </div>
                          <div className="detail-year">2026</div>
                        </div>
                        <div className="expertise-glow"></div>
                      </div>
                      
                      <div className="expertise-item">
                        <div className="item-header">
                          <div className="item-info">
                            <div className="item-title">
                              <FaCode className="item-icon" />
                              <h4>Full-Stack MERN & Next.js</h4>
                            </div>
                            <div className="item-subtitle">FastAPI • React • Next.js 15 • Node.js</div>
                            <div className="item-description">
                              Building end-to-end monolithic and microservices structures, implementing secure APIs, load balancing via Nginx, and wrapping everything smoothly in Next.js 15 frontends.
                            </div>
                          </div>
                          <div className="verification-badge">Architect</div>
                        </div>
                        <div className="item-details">
                          <div className="detail-tags">
                            <span className="tag">Next.js 15</span>
                            <span className="tag">FastAPI</span>
                            <span className="tag">MERN/MEAN</span>
                            <span className="tag">Web Vitals</span>
                          </div>
                          <div className="detail-year">2026</div>
                      </div>
                      <div className="expertise-glow"></div>
                    </div>
                  </div>
                </div>
                
                {/* Professional Experience Column */}
                <div className="expertise-column">
                  <div className="column-title">
                    <FaLightbulb className="column-icon" />
                    <h3>Professional Experience</h3>
                  </div>
                  
                  <div className="expertise-list">
                    <div className="expertise-item">
                      <div className="item-header">
                        <div className="item-info">
                          <div className="item-title">
                            <FaMicrochip className="item-icon" />
                            <h4>AI & Full-Stack Engineer</h4>
                          </div>
                          <div className="item-subtitle">YEBNI • Aug 2024 - Present</div>
                          <div className="item-description">
                            Architecting scalable AI solutions and robust web applications. Integrating large language models and modern frameworks to drive enterprise automation and streamline operations.
                          </div>
                        </div>
                        <div className="verification-badge">Engineer</div>
                      </div>
                      <div className="item-details">
                        <div className="detail-tags">
                          <span className="tag">Agentic AI</span>
                          <span className="tag">Next.js</span>
                          <span className="tag">Python</span>
                          <span className="tag">LLMs</span>
                        </div>
                        <div className="detail-year">2024</div>
                      </div>
                      <div className="expertise-glow"></div>
                    </div>
                    
                    <div className="expertise-item">
                      <div className="item-header">
                        <div className="item-info">
                          <div className="item-title">
                            <FaProjectDiagram className="item-icon" />
                            <h4>Software Engineer Intern</h4>
                          </div>
                          <div className="item-subtitle">Tunisia Telecom • Jan 2024 - May 2024</div>
                          <div className="item-description">
                            Developed internal telecommunication management tools. Optimized database architectures and implemented secure API microservices for high-availability systems.
                          </div>
                        </div>
                        <div className="verification-badge">Intern</div>
                      </div>
                      <div className="item-details">
                        <div className="detail-tags">
                          <span className="tag">Microservices</span>
                          <span className="tag">Backend</span>
                          <span className="tag">SQL</span>
                          <span className="tag">Node.js</span>
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
                            <h4>Web Developer Intern</h4>
                          </div>
                          <div className="item-subtitle">Bright Soft • Feb 2023 - May 2023</div>
                          <div className="item-description">
                            Contributed to the development of full-stack data dashboards. Engineered scalable user interfaces and automated CI/CD pipelines to accelerate feature delivery.
                          </div>
                        </div>
                        <div className="verification-badge portfolio">Intern</div>
                      </div>
                      <div className="item-details">
                        <div className="detail-tags">
                          <span className="tag">React</span>
                          <span className="tag">Frontend</span>
                          <span className="tag">APIs</span>
                          <span className="tag">DevOps</span>
                        </div>
                        <div className="detail-year">2023</div>
                      </div>
                      <div className="expertise-glow"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Professional Recognition */}
              <div className="recognition-section">
                <div className="recognition-header">
                  <h3>Certifications & Achievements</h3>
                  <p>Verified professional capabilities</p>
                </div>
                
                <div className="recognition-grid">
                  <div className="recognition-card">
                    <FaCertificate className="recognition-icon" />
                    <div className="recognition-title">Anthropic Agent</div>
                    <div className="recognition-description">
                      Certified Agentic Skills
                    </div>
                    <div className="recognition-metric">2025</div>
                  </div>
                  
                  <div className="recognition-card">
                    <FaCloud className="recognition-icon" />
                    <div className="recognition-title">AWS Academy</div>
                    <div className="recognition-description">
                      Cloud Foundations Graduate
                    </div>
                    <div className="recognition-metric">2025</div>
                  </div>
                  
                  <div className="recognition-card">
                    <FaBolt className="recognition-icon" />
                    <div className="recognition-title">Oracle Cloud</div>
                    <div className="recognition-description">
                      Infrastructure Associate
                    </div>
                    <div className="recognition-metric">2025</div>
                  </div>
                  
                  <div className="recognition-card">
                    <FaProjectDiagram className="recognition-icon" />
                    <div className="recognition-title">AVIATRIX</div>
                    <div className="recognition-description">
                      Multi-Cloud Networking
                    </div>
                    <div className="recognition-metric">2025</div>
                  </div>
                </div>
              </div>
            </div>
        </motion.section>
  );
};

export default ExpertiseSection;
