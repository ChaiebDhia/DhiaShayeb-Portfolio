import React from 'react';
import { 
  FaLightbulb, FaRocket, FaCode, FaGlobe, 
  FaUniversity, FaMicrochip, FaPaperPlane ,FaBrain,FaCogs
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
              <h2>AI ENGINEER & FULL-STACK ARCHITECT</h2>
            </div>
            <div className="section-subtitle">
              Orchestrating intelligent systems and scalable architectures
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
                  I design and deploy end-to-end AI systems, bridging the gap between cutting-edge research and production-ready applications. My expertise spans <strong>Agentic AI orchestration (LangGraph)</strong>, <strong>Advanced RAG (ChromaDB, Hybrid Search)</strong>, and <strong>Deep Learning (PyTorch, CV)</strong>. By combining rigorous ML methodologies with robust <strong>Full-Stack engineering (MERN, MEAN, Next.js, FastAPI)</strong> and <strong>Mobile (Flutter)</strong>, I deliver solutions that are not only intelligent but structurally sound, scalable, and secure.
                </p>
              </div>
              
              <div className="bio-section">
                <h3 className="bio-title">
                  <FaRocket className="bio-icon" />
                  Development Approach
                </h3>
                <p className="bio-content">
                  Whether building multi-agent LLM workflows, training neural networks, or configuring CI/CD pipelines, I prioritize observability, modularity, and quantifiable impact. My experience ranges from developing deep learning platforms like DeepCoin-Core to automating enterprise telecom infrastructures. I thrive in cloud-native environments (AWS, Docker, Jenkins) and continuously push boundaries to engineer the next generation of AI-driven applications.
                </p>
              </div>
              
              <div className="about-highlights">
                <div className="highlight-grid">
                  <div className="highlight-item">
                    <div className="highlight-icon-container">
                      <FaBrain className="highlight-icon" />
                    </div>
                    <div className="highlight-content">
                      <h4>Agentic AI Systems</h4>
                      <p>Multi-agent orchestration & advanced RAG</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon-container">
                      <FaCode className="highlight-icon" />
                    </div>
                    <div className="highlight-content">
                      <h4>Full-Stack Mastery</h4>
                      <p>FastAPI, Next.js 15, and asynchronous Python</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon-container">
                      <FaGlobe className="highlight-icon" />
                    </div>
                    <div className="highlight-content">
                      <h4>Cloud & MLOps</h4>
                      <p>AWS, Docker, Jenkins, and MLflow pipelines</p>
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
                      <div className="education-period">2021 - 2026</div>
                    </div>
                    <div className="education-details">
                      
                    </div>
                  </div> {/* ✅ closes education-item */}
                </div> {/* ✅ closes education-timeline */}
              </div> {/* ✅ closes bio-section education-section */}

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
            </div> {/* ✅ closes about-text */}
            
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
                    <div className="tech-node">FRONTEND</div>
                  </div>
  
                  <div className="tech-orbit backend-orbit">
                    <div className="tech-node">BACKEND</div>
                  </div>
  
                  <div className="tech-orbit mobile-orbit">
                    <div className="tech-node">MOBILE</div>
                  </div>
  
                  <div className="tech-orbit devops-orbit">
                    <div className="tech-node">DEVOPS</div>
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
