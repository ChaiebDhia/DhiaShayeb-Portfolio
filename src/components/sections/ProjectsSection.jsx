import React, { useState } from 'react';
import { FaProjectDiagram, FaEye, FaGithub,FaMagic,FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './ProjectsSection.scss';

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const projects = [
    {
      id: 1,
      title: "SkillSync AI Learning Platform",
      subtitle: "MERN Stack Educational Platform with Gemini AI Integration",
      description: "Created an innovative learning platform using the MERN stack with advanced AI features including real-time chat, live learning, certifications, and real-time translation. I worked in a group at Esprit, my college, to develop this project using sprints to showcase collaboration, soft skills, and Scrum methodology.",
      detailedDescription: `
        SkillSync is a comprehensive educational platform that leverages cutting-edge AI technologies to enhance learning experiences. The platform was developed collaboratively at Esprit college using Scrum methodology and sprint-based development to demonstrate teamwork and project management skills.
        
        The platform features an AI Therapeutic Assistant that provides mental health support and guidance to learners. Real-time translation capabilities allow for instant translation of spoken and written content, breaking down language barriers in education.
        
        Document translation processes uploaded materials in multiple languages, while the Course Generator creates customized learning paths based on individual user needs. The Educational Resource Finder locates relevant materials for any topic, supported by a 24/7 AI Chatbot with voice capabilities for learning assistance and Q&A.
        
        PDF processing capabilities automatically generate summaries of course materials and documents, complemented by Smart Scheduling that creates personalized learning schedules. The Roadmap Generator develops step-by-step learning plans, while the certification system awards credentials upon course completion.
        
        Real-time chat enables live communication between learners, and interactive live sessions provide workshops and collaborative learning opportunities. The platform uses MERN architecture with MongoDB, Express, React, and Node.js as its foundation.
        
        Advanced integration includes Gemini AI API for natural language processing, WebSocket for real-time communication, JWT for secure authentication, and AWS S3 for document storage. The platform was designed to provide personalized, accessible education for all users while fostering collaboration and communication skills.
      `,
      tech: ["React", "Node.js", "MongoDB", "Express", "Gemini API", "WebSocket", "JWT", "AWS"],
      github: "https://github.com/InnovativeSquad-PI-4TWIN4/PiWebInovativeSquad.git",
      live: "#",
      category: "AI Education",
      status: "Beta",
      metrics: {
        "AI Features": "8+",
        "Languages": "10+",
        "Response Time": "<2s"
      },
      features: [
        "Real-time Translation", 
        "AI Course Generation", 
        "Therapeutic Assistant", 
        "Voice-Enabled Chatbot",
        "Smart Scheduling",
        "Document Processing",
        "Certifications",
        "Live Learning"
      ],
      image: "/images/SkillSync.png",
      viewImageButton: true
    },
    {
      id: 2,
      title: "Automated DevOps Pipeline",
      subtitle: "End-to-End CI/CD Implementation for SpringBoot",
      description: "Designed and implemented a complete CI/CD pipeline for a SpringBoot application following DevOps principles. The pipeline incorporates 18 distinct stages that ensure code quality, security, and deployment reliability.",
      detailedDescription: `
        Designed and implemented a complete CI/CD pipeline for a SpringBoot application following DevOps principles and industry best practices. The pipeline incorporates a comprehensive approach to software delivery automation.
    
        The pipeline architecture features 18 distinct stages that ensure code quality, security, and deployment reliability throughout the development lifecycle. Environment preparation handles tool installation and configuration, while source code management performs Git checkout with branch validation.
        
        The build process includes Maven clean, compile, and package operations with comprehensive dependency resolution. Quality assurance incorporates JUnit testing with JACOCO code coverage reporting to maintain high code standards.
        
        Static analysis utilizes SonarQube scanning with quality gate enforcement to catch potential issues early. Artifact management leverages Nexus repository for versioned artifact storage and distribution.
        
        Containerization creates and validates Docker images for consistent deployment across environments. Automated deployment handles rollout to containerized environments with zero-downtime strategies.
        
        Monitoring integration includes Portainer for container management and Watchtower for automatic updates. Email notification systems alert stakeholders of pipeline status changes and critical events.
        
        The solution demonstrates full automation from code commit to production deployment, achieving average pipeline execution time under 2 minutes with 100% test coverage enforcement. Static code analysis maintains zero critical issues while automated rollback capabilities ensure system reliability.
        
        Technical highlights include declarative Jenkins pipeline with parallel stage execution, infrastructure-as-code principles for environment consistency, and immutable artifacts through Nexus repository. Container orchestration includes health checks, security scanning at every stage, and comprehensive monitoring through Grafana dashboards.
      `,
      tech: ["Jenkins", "Docker", "SpringBoot", "Nexus", "SonarQube", "JUnit", "Grafana", "Prometheus", "Portainer", "Watchtower", "JaCoCo"],
      github: "https://github.com/ChaiebDhia/DevOps_SpringBoot.git",
      live: "#",
      category: "DevOps",
      status: "Production",
      metrics: {
        "Pipeline Stages": "18",
        "Avg Duration": "<2min",
        "Success Rate": "100%"
      },
      features: [
        "Automated CI/CD Pipeline", 
        "Code Quality Gates", 
        "Container Orchestration", 
        "Artifact Versioning",
        "Auto-healing Infrastructure",
        "Real-time Monitoring"
      ],
      image: "/images/DevOps.png",
      viewImageButton: true
    },
    {
      id: 3,
      title: "Voice-Controlled Assistive Tech",
      subtitle: "Arduino & IoT Prototype for Accessibility",
      description: "Prototyping Innovation: Voice-Controlled Assistive Tech with Arduino & IoT. A voice-controlled system using an Arduino-based prototype paired with a custom voice assistant.",
      detailedDescription: `
        Prototyping Innovation: Voice-Controlled Assistive Tech with Arduino & IoT represents a comprehensive approach to accessibility technology development.
        
        Developed a voice-controlled system using an Arduino-based prototype simulating a wheelchair, paired with a custom voice assistant. While initially designed to enhance patient autonomy in healthcare, this solution demonstrates broader applications across multiple domains.
        
        The modular design allows the Arduino prototype to be replaced with real wheelchairs, smart home devices, or industrial equipment, making it adaptable for healthcare, smart cities, logistics, and manufacturing environments.
        
        Voice control capabilities enable users to intuitively navigate environments, control PC operations, and manage IoT devices such as lights and appliances through natural voice commands. The scalable architecture follows layered IoT principles including perception, network, and application layers for seamless integration with diverse hardware systems.
        
        Beyond healthcare applications, this project serves as a proof-of-concept for voice-driven automation in smart homes, providing control systems for elderly and disabled individuals. Industrial IoT applications include hands-free operation in warehouses and factories, while educational applications offer assistive learning tools for students with mobility challenges.
        
        The technical implementation combines Arduino hardware with 4WD robot car prototype, sensors, and Bluetooth modules for connectivity. Software development utilized Python for voice assistant functionality, UML-designed workflows, and IoT communication protocols.
        
        User-centric design prioritized accessibility with voice control and GUI fallback options for diverse user needs. Future development explores AI-driven multilingual support for Arabic, French, and English, along with 360-degree obstacle detection and cloud integration to bypass throttling limitations.
        
        The ultimate goal is creating a universal voice-control platform adaptable to any domain, demonstrating the potential for voice technology to revolutionize human-computer interaction across industries.
      `,
      tech: ["Arduino", "Python", "Bluetooth", "Voice Recognition", "IoT", "Windows API"],
      github: "https://github.com/ChaiebDhia/Voice-Controlled-Assistive-Tech-with-Arduino-IoT.git",
      live: "#",
      category: "IoT Prototype",
      status: "Prototype",
      metrics: {
        "Hardware Modules": "8+",
        "Response Time": "<1s",
        "Voice Commands": "20+"
      },
      features: [
        "Voice Control", 
        "Modular Design", 
        "IoT Integration", 
        "PC Control",
        "Smart Home Ready",
        "Scalable Architecture"
      ],
      image: "/images/VA.png",
      viewImageButton: true
    },
    {
      id: 4,
      title: "Interactive Portfolio",
      subtitle: "React-based Technical Showcase",
      description: "This responsive portfolio demonstrates modern web development techniques with custom animations, neural network visualizations, and AI integration.",
      detailedDescription: `
        This portfolio represents a comprehensive showcase of frontend development skills and technical creativity, demonstrating advanced web development capabilities through interactive design elements.
        
        The portfolio features an interactive neural network visualization using Canvas API technology, creating dynamic visual representations of complex algorithms. Circuit board animated backgrounds with dynamic particle effects provide an engaging technological aesthetic that reflects the technical nature of the content.
        
        AI-powered assistant integration enables professional inquiries and interactive user engagement. Responsive design ensures optimal viewing across all devices, complemented by smooth animations and transitions that enhance user experience.
        
        The project showcase section provides detailed technical breakdowns of each project, allowing visitors to understand the depth and complexity of development work. Professional contact form integration with email functionality facilitates seamless communication.
        
        Technical implementation utilizes React with modern hooks for state management and component architecture. Framer Motion provides smooth animations and transitions, while custom neural network visualization algorithms create unique interactive elements.
        
        Dynamic circuit board animation leverages WebGL technology for performance optimization. EmailJS integration handles contact form functionality without requiring backend infrastructure, while responsive design follows mobile-first principles.
        
        Performance optimizations include efficient rendering of complex animations, lazy loading strategies for improved loading times, and optimized asset management. Smooth scroll behavior and intuitive navigation enhance user experience across all interactions.
        
        This project demonstrates the ability to create engaging, interactive web experiences while maintaining clean code architecture and optimal performance standards. The portfolio serves as both a technical demonstration and a professional showcase of development capabilities.
      `,
      tech: ["React", "Framer Motion", "Canvas API", "SCSS", "EmailJS", "WebGL", "Responsive Design"],
      github: "https://github.com/ChaiebDhia/DhiaShayeb-Portfolio.git",
      live: "#",
      category: "Web Development",
      status: "Production",
      metrics: {
        "Interactive Elements": "15+",
        "Performance Score": "95+",
        "React Components": "15+"
      },
      features: [
        "Interactive Visualizations", 
        "AI Integration", 
        "Responsive Design", 
        "Smooth Animations",
        "Contact Form",
        "Performance Optimized"
      ],
      image: "/images/MyPortfolio.png", 
      viewImageButton: true
    }
  ];

  const handleProjectNavigation = (direction) => {
    setActiveProject(null);
    if (direction === 'prev') {
      setCurrentProjectIndex(prev => 
        prev === 0 ? projects.length - 1 : prev - 1
      );
    } else {
      setCurrentProjectIndex(prev => 
        prev === projects.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }} id="projects" className="projects-section">
            <div className="section-content">
              <div className="section-header">
                <div className="section-title">
                  <FaProjectDiagram className="section-icon" />
                  <h2>DIGITAL ARSENAL</h2>
                </div>
                <div className="section-subtitle">
                  Breakthrough projects that redefine possibilities
                </div>
              </div>
              
              <div className="projects-container">
                <button 
                  className="project-nav prev"
                  onClick={() => handleProjectNavigation('prev')}
                >
                  &lt;
                </button>
                
                <div className="projects-slider" style={{ transform: `translateX(-${currentProjectIndex * 100}%)` }}>
                  {projects.map((project, index) => (
                    <div 
                      key={project.id} 
                      className={`project-slide ${index === currentProjectIndex ? 'active' : ''}`}
                    >
                      <div className="project-card">
                        <div className="project-image">
                          
                        <img 
                        src={project.image}
                        alt={project.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      {project.viewImageButton && (
                        <div className="image-overlay">
                          <button 
                            className="view-image-btn"
                            onClick={() => {
                              setCurrentImage(project.image);
                              setShowImageModal(true);
                            }}
                          >
                            View Image
                          </button>
                        </div>
                      )}
                          <div className="project-overlay">
                            <div className="project-status">
                              <span className={`status-badge ${project.status.toLowerCase()}`}>
                                {project.status}
                              </span>
                            </div>
                            <div className="project-category">{project.category}</div>
                          </div>
                        </div>
                        
                        <div className="project-info">
                          <div className="project-header">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-subtitle">{project.subtitle}</p>
                          </div>
                          
                          <p className="project-description">{project.description}</p>
                          
                          <div className="project-tech">
                            {project.tech.slice(0, 4).map((tech, i) => (
                              <span key={i} className="tech-tag">{tech}</span>
                            ))}
                            {project.tech.length > 4 && (
                              <span className="tech-more">+{project.tech.length - 4}</span>
                            )}
                          </div>
                          
                          <div className="project-metrics">
                            {Object.entries(project.metrics).map(([key, value]) => (
                              <div key={key} className="metric-item">
                                <div className="metric-value">{value}</div>
                                <div className="metric-label">{key}</div>
                              </div>
                            ))}
                          </div>
                          
                          <div className="project-actions">
                            <button 
                              className="project-btn primary"
                              onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                            >
                              <FaEye className="btn-icon" />
                              {activeProject === project.id ? 'Close' : 'Explore'}
                            </button>
                            <a 
                              href={project.github} 
                              className="project-btn secondary"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaGithub className="btn-icon" />
                              Code
                            </a>
                          </div>
                        </div>
                        
                        {activeProject === project.id && (
                          <div className="project-expanded">
                            <div className="expanded-content">
                              <h4>Technical Deep Dive</h4>
                              <p>{project.detailedDescription}</p>
                              
                              <div className="project-features">
                                <h5>Key Features</h5>
                                <div className="features-grid">
                                  {project.features.map((feature, i) => (
                                    <div key={i} className="feature-item">
                                      <FaMagic className="feature-icon" />
                                      <span>{feature}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              <div className="project-stack">
                                <h5>Full Tech Stack</h5>
                                <div className="stack-list">
                                  {project.tech.map((tech, i) => (
                                    <span key={i} className="stack-item">{tech}</span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <button 
                  className="project-nav next"
                  onClick={() => handleProjectNavigation('next')}
                >
                  &gt;
                </button>
              </div>
            </div>
            <div>
                {showImageModal && (
                  <div className="image-modal">
                    <div className="modal-backdrop" onClick={() => setShowImageModal(false)}></div>
                    <div className="modal-content">
                      <button className="modal-close" onClick={() => setShowImageModal(false)}>
                        <FaTimes />
                      </button>
                      <img 
                        src={currentImage} 
                        alt="Project Preview" 
                        className="modal-image" 
                      />
                    </div>
                  </div>
                )}
            </div>
            </motion.section>
            
  );
};

export default ProjectsSection;