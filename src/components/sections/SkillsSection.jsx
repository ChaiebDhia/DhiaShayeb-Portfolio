import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaReact, FaPython, FaAws, FaDocker, FaMobileAlt, FaMicrochip } from 'react-icons/fa';
import { SiMongodb, SiTensorflow } from 'react-icons/si';
import './SkillsSection.scss';

const SkillsSection = () => {
  const skills = [
    { name: "Agentic AI & LLMs", icon: <FaPython />, level: 96, category: "AI/ML" },
    { name: "RAG & Vector DBs", icon: <SiMongodb />, level: 94, category: "AI/ML Data" },
    { name: "PyTorch & OpenCV", icon: <SiTensorflow />, level: 90, category: "Deep Learning" },
    { name: "FastAPI & Python", icon: <FaCode />, level: 95, category: "Backend" },
    { name: "Next.js 15 & React", icon: <FaReact />, level: 93, category: "Frontend" },
    { name: "MERN/MEAN Stacks", icon: <SiMongodb />, level: 94, category: "Full Stack" },
    { name: "Flutter & Mobile", icon: <FaMobileAlt />, level: 88, category: "Mobile" },
    { name: "Docker & CI/CD", icon: <FaDocker />, level: 92, category: "DevOps" },
    { name: "AWS & Cloud-Native", icon: <FaAws />, level: 88, category: "Cloud" },
    { name: "PostgreSQL & Redis", icon: <SiMongodb />, level: 89, category: "Data" },
    { name: "LangGraph Workflows", icon: <FaMicrochip />, level: 95, category: "Architecture" },
    { name: "MLflow & Observability", icon: <FaCode />, level: 85, category: "MLOps" }
  ];

  return (
    <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }} id="skills" className="skills-section">
            <div className="section-content">
              <div className="section-header">
                <div className="section-title">
                  <FaCode className="section-icon" />
                  <h2>TECHNICAL MATRIX</h2>
                </div>
                <div className="section-subtitle">
                  Advanced capabilities and expertise levels
                </div>
              </div>
              
              <div className="skills-container">
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                      <div className="skill-header">
                        <div className="skill-icon">{skill.icon}</div>
                        <div className="skill-info">
                          <h4 className="skill-name">{skill.name}</h4>
                          <span className="skill-category">{skill.category}</span>
                        </div>
                      </div>
                      
                      <div className="skill-progress">
                        <div className="progress-bar">
                          <div 
                            className="progress-fill" 
                            style={{ width: `${skill.level}%` }}
                          >
                            <div className="progress-glow"></div>
                          </div>
                        </div>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </motion.section>
  );
};

export default SkillsSection;