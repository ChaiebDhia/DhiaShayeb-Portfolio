import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaReact, FaPython, FaAws, FaDocker, FaMobileAlt, FaMicrochip } from 'react-icons/fa';
import { SiMongodb, SiTensorflow } from 'react-icons/si';
import './SkillsSection.scss';

const SkillsSection = () => {
  const skills = [
    { name: "MERN Stack", icon: <SiMongodb />, level: 94, category: "Full Stack" },
    { name: "MEAN Stack", icon: <FaCode />, level: 90, category: "Full Stack" },
    { name: "Next.js", icon: <FaReact />, level: 96, category: "Frontend" },
    { name: "Flutter", icon: <FaMobileAlt />, level: 88, category: "Mobile" },
    { name: "Python & AI/ML", icon: <FaPython />, level: 91, category: "AI/ML" },
    { name: "MongoDB & SQL", icon: <SiMongodb />, level: 89, category: "Database" },
    { name: "AWS & Cloud", icon: <FaAws />, level: 87, category: "Cloud" },
    { name: "Docker & K8s", icon: <FaDocker />, level: 85, category: "DevOps" },
    { name: "TensorFlow", icon: <SiTensorflow />, level: 83, category: "AI/ML" },
    { name: "Microservices", icon: <FaMicrochip />, level: 90, category: "Architecture" }
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