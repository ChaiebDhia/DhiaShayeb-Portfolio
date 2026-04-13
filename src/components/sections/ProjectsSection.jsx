import React, { useState } from 'react';
import { FaProjectDiagram, FaEye, FaGithub, FaMagic } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './ProjectsSection.scss';

const ProjectsSection = ({ setShowImageModal, setCurrentImage }) => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "DeepCoin-Core",
      subtitle: "Agentic AI + RAG + Deep Learning Platform",
      description: "A comprehensive AI platform for archaeological coin classification, featuring a LangGraph workflow with 5 agents and hybrid RAG, deployed on a cloud-native Next.js 15 and FastAPI stack.",
      detailedDescription: `
        DeepCoin-Core is a production-grade AI platform developed as my Graduation Project at YEBNI. It seamlessly combines Computer Vision, Agentic AI, and full-stack development to classify and analyze archaeological coins.
        
        The core intelligence relies on an EfficientNet-B3 deep learning model with 8x Test-Time Augmentation (TTA), achieving an 80.03% benchmark accuracy across 438 distinct classes. 
        
        To enrich the analytical capabilities, I implemented a multi-agent orchestrated workflow using LangGraph. It features 5 specialized agents utilizing confidence-based routing and a Hybrid RAG approach (BM25 + Vector Search + Reciprocal Rank Fusion) backed by ChromaDB. This expands the knowledge base to 9,541 coin types and over 47,000 embedded vectors.
        
        The backend is powered by asynchronous Python via FastAPI, connected to PostgreSQL and Redis for robust data management and caching. The frontend is built on Next.js 15, offering a responsive analytical interface. Grad-CAM++ was integrated to provide explainability for the neural network predictions, and an Active Learning loop continually improves the model.
        
        The entire application is containerized using Docker Compose, monitored via MLflow, and hardened for production with robust API authentication, rate limiting, structured logs, and a CI/CD pipeline featuring 122 automated tests.
      `,
      tech: ["PyTorch", "LangGraph", "FastAPI", "Next.js 15", "ChromaDB", "Docker", "MLflow", "PostgreSQL"],
      github: "https://github.com/ChaiebDhia/DeepCoin-Core",
      live: "#",
      category: "AI & Full-Stack",
      status: "Production",
      metrics: {
        "Accuracy": "80.03%",
        "Vectors Indexed": "47,705",
        "Classes": "438"
      },
      features: [
        "Multi-Agent Workflow", 
        "Hybrid RAG (BM25+Vector)", 
        "Image Classification (TTA)", 
        "Grad-CAM Explainability",
        "Active Learning Loop",
        "Automated CI/CD"
      ],
      image: "/images/DeepCoin.png",
      viewImageButton: true
    },
    {
      id: 2,
      title: "Automated DevOps Pipeline",
      subtitle: "End-to-End CI/CD Implementation for Spring Boot",
      description: "Designed and implemented a complete CI/CD pipeline incorporating 18 distinct stages that ensure code quality, security, and zero-downtime deployments.",
      detailedDescription: `
        Designed and implemented a complete CI/CD pipeline for a Spring Boot application following DevOps principles and industry best practices. The pipeline incorporates a comprehensive approach to software delivery automation.
    
        The pipeline architecture features 18 distinct stages. Environment preparation handles tool installation, source code management validates branches, and the build process includes comprehensive resolving via Maven.
        
        Quality assurance incorporates JUnit testing with JaCoCo code coverage reporting. Static analysis utilizes SonarQube scanning with quality gate enforcement. Artifact management leverages Nexus repository for versioned artifact storage.
        
        Containerization creates and validates Docker images for consistent deployment. Automated deployment handles rollout with zero-downtime strategies.
        
        The solution demonstrates full automation from commit to production, achieving average pipeline execution time under 2 minutes with 100% test coverage enforcement and a 99.98% deployment success rate.
      `,
      tech: ["Jenkins", "Docker", "SpringBoot", "Nexus", "SonarQube", "Grafana", "Prometheus"],
      github: "https://github.com/ChaiebDhia/DevOps_SpringBoot",
      live: "#",
      category: "DevOps",
      status: "Production",
      metrics: {
        "Pipeline Stages": "18",
        "Avg Duration": "<2min",
        "Success Rate": "99.98%"
      },
      features: [
        "18-Stage Pipeline", 
        "100% Test Coverage Requirement", 
        "Static Analysis Gates", 
        "Artifact Versioning",
        "Zero-Downtime Deployment",
        "Real-time Monitoring"
      ],
      image: "/images/DevOps.png",
      viewImageButton: true
    },
    {
      id: 3,
      title: "Cloud-Native Microservices",
      subtitle: "Scalable Architecture Platform",
      description: "Implemented a robust microservices architecture featuring service discovery, API gateway, and seamless inter-service communication.",
      detailedDescription: `
        Developed a scalable, cloud-native microservices platform using the Spring Cloud ecosystem. The architecture emphasizes decoupled services, resilience, and high availability.
        
        The core infrastructure includes an API Gateway as the single entry point, Eureka for dynamic service discovery and registration, and Spring Cloud Config for centralized, externalized configuration management across all environments.
        
        The services communicate efficiently while persisting data to MySQL databases, all containerized via Docker for parity across dev, staging, and production.
        
        The frontend interface is built with Angular, providing a dynamic single-page application experience that consumes the distributed backend services transparently. This modular structure allows independent scaling of features and resilient failovers.
      `,
      tech: ["Spring Cloud", "Eureka", "API Gateway", "Angular", "MySQL", "Docker"],
      github: "https://github.com/ChaiebDhia/Microservices",
      live: "#",
      category: "Architecture",
      status: "Production",
      metrics: {
        "Architecture": "Microservices",
        "Cloud Native": "Yes",
        "Decoupled": "Yes"
      },
      features: [
        "Service Discovery", 
        "API Gateway", 
        "Centralized Config", 
        "Docker Containerization",
        "Angular Frontend",
        "Relational Persistence"
      ],
      image: "/images/Microservices.png",
      viewImageButton: true
    },
    {
      id: 4,
      title: "SkillSync AI Learning Platform",
      subtitle: "MERN Stack AI Educational Platform",
      description: "Created an innovative learning platform using the MERN stack with advanced AI features including real-time chat, live learning, certifications, and translation.",
      detailedDescription: `
        SkillSync is a comprehensive educational platform that leverages cutting-edge AI technologies to enhance learning experiences. The platform was developed collaboratively at Esprit college using Scrum methodology.
        
        The platform features an AI Therapeutic Assistant, real-time translation capabilities, document processing, and a customized Course Generator. It serves educational resources integrated with a 24/7 AI Chatbot having voice capabilities.
        
        Real-time chat enables live communication between learners, and interactive live sessions provide workshops. The platform relies heavily on MERN architecture (MongoDB, Express, React, Node.js) combined with Gemini AI API for NLP tasks.
      `,
      tech: ["React", "Node.js", "MongoDB", "Express", "Gemini API", "WebSocket", "JWT", "AWS"],
      github: "https://github.com/InnovativeSquad-PI-4TWIN4/PiWebInovativeSquad.git",
      live: "#",
      category: "AI & Full-Stack",
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
        "Document Processing"
      ],
      image: "/images/SkillSync.png",
      viewImageButton: true
    },
    {
      id: 5,
      title: "Assistive Voice Robotics",
      subtitle: "Arduino & IoT Healthcare Prototype",
      description: "Prototyped a voice-controlled assistive technology system using an Arduino-based wheelchair simulator paired with a custom voice assistant.",
      detailedDescription: `
        Developed a voice-controlled system utilizing an Arduino-based prototype simulating a wheelchair, paired with a custom voice assistant to enhance patient autonomy in healthcare.
        
        The modular approach allows for the Arduino prototype to be replaced with a real wheelchair, smart home system, or industrial equipment. It supports natural voice command translations mapped through IoT network protocols.
        
        The technical foundation uses Python on the software side handling NLP mapping, and Arduino C++ to control motors and Bluetooth communication securely.
      `,
      tech: ["Arduino", "Python", "Bluetooth", "Voice Recognition", "IoT", "Windows API"],
      github: "https://github.com/ChaiebDhia/Voice-Controlled-Assistive-Tech-with-Arduino-IoT.git",
      live: "#",
      category: "IoT Architecture",
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
      id: 6,
      title: "Interactive UX Portfolio",
      subtitle: "React WebGL Capabilities Showcase",
      description: "Engineered this production-ready technical portfolio featuring React, Framer Motion, and raw Canvas API WebGL integrations to highlight deep frontend expertise.",
      detailedDescription: `
        This architectural portfolio represents a comprehensive visualization of frontend development skills and 3D web logic modeling. 
        
        Unlike standard template websites, it leverages dynamic Neural Network and Circuit Board backgrounds utilizing algorithmic particle calculations drawn to a raw Canvas layer. This provides extreme performance over traditional DOM animations.
        
        It serves both as an interactive AI chat interface and a WebGL hardware-accelerated demonstration running on a standard React foundation.
      `,
      tech: ["React", "Framer Motion", "Canvas API", "SCSS", "EmailJS", "WebGL", "Responsive Design"],
      github: "https://github.com/ChaiebDhia/DhiaShayeb-Portfolio.git",
      live: "#",
      category: "Frontend",
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
              
              <div className="projects-grid-container">
                  {projects.map((project, index) => (
                    <div 
                      key={project.id} 
                      className="project-slide active"
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
            </div>
            </motion.section>
            
  );
};

export default ProjectsSection;