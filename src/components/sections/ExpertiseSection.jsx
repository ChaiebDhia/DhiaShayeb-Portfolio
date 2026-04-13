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
                            <h4>AI Engineer Intern (Graduation Project)</h4>
                          </div>
                          <div className="item-subtitle">YEBNI, Tunisia • Feb 2026 - Jul 2026</div>
                          <div className="item-description">
                            Architected DeepCoin-Core with a LangGraph workflow featuring 5 agents, hybrid RAG, EfficientNet-B3 (80.03% TTA), and hardened CI/CD production pipelines.
                          </div>
                        </div>
                        <div className="verification-badge">Intern</div>
                      </div>
                      <div className="item-details">
                        <div className="detail-tags">
                          <span className="tag">LangGraph</span>
                          <span className="tag">Hybrid RAG</span>
                          <span className="tag">PyTorch</span>
                          <span className="tag">CI/CD</span>
                        </div>
                        <div className="detail-year">2026</div>
                      </div>
                      <div className="expertise-glow"></div>
                    </div>
                    
                    <div className="expertise-item">
                      <div className="item-header">
                        <div className="item-info">
                          <div className="item-title">
                            <FaProjectDiagram className="item-icon" />
                            <h4>Full-Stack Engineering Intern</h4>
                          </div>
                          <div className="item-subtitle">Tunisia Telecom, Tunisia • Jul 2025 - Aug 2025</div>
                          <div className="item-description">
                            Developed Python automation for FTTH/5G infrastructure. Created real-time Streamlit monitoring dashboards and reduced configuration time by 80% via network automation.
                          </div>
                        </div>
                        <div className="verification-badge">Intern</div>
                      </div>
                      <div className="item-details">
                        <div className="detail-tags">
                          <span className="tag">Python</span>
                          <span className="tag">Automation</span>
                          <span className="tag">Streamlit</span>
                          <span className="tag">Networking</span>
                        </div>
                        <div className="detail-year">2025</div>
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
                          <div className="item-subtitle">Bright Soft, Tunisia • Jul 2023 - Aug 2023</div>
                          <div className="item-description">
                            Developed full-stack SaaS features leveraging React and Node.js. Contributed to AI/NLP workflows for document processing and enhanced application testing practices.
                          </div>
                        </div>
                        <div className="verification-badge portfolio">Intern</div>
                      </div>
                      <div className="item-details">
                        <div className="detail-tags">
                          <span className="tag">React</span>
                          <span className="tag">Node.js</span>
                          <span className="tag">AI/NLP</span>
                          <span className="tag">SaaS</span>
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
