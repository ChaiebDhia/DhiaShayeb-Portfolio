import React, { useState, useEffect, useRef } from 'react';
import { 
  FaBrain,FaMobileAlt,FaCertificate,FaCloud,FaCodeBranch,FaUniversity,FaGlobe,FaCogs, FaRobot, FaCode, FaProjectDiagram,FaEnvelope,FaLinkedin,FaGithub,FaDownload,FaPaperPlane,FaReact,FaNodeJs,FaPython,FaAws,FaDocker,FaBars,FaTimes,FaLightbulb,FaRocket,FaMagic,FaEye,FaPhone,FaCoffee,FaUsers,FaTrophy,FaStar,FaFire,FaMicrochip,
} from 'react-icons/fa';
import { SiMongodb, SiTensorflow,  } from 'react-icons/si';
import '../components/home.scss'
import emailjs from 'emailjs-com';


const AdvancedPortfolio = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [aiPersonality, setAiPersonality] = useState('professional');
  const [isRecording, setIsRecording] = useState(false);
  const [aiAnalytics, setAiAnalytics] = useState({
    questionsAnswered: 127,
    projectsExplained: 23,
    skillsDiscussed: 45,
    averageResponseTime: '1.2s'
  });
  
  const canvasRef = useRef(null);
  const neuralNetworkRef = useRef(null);
  const chatEndRef = useRef(null);

  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);


  // Enhanced Neural Network Animation
  useEffect(() => {
    if (neuralNetworkRef.current) {
      const canvas = neuralNetworkRef.current;
      const ctx = canvas.getContext('2d');
      let animationFrameId;
      let particles = [];
      let connections = [];
      let brainWaves = [];
      
      const handleResize = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        initializeParticles();
      };
      
      window.addEventListener('resize', handleResize);
      handleResize();
      
      function initializeParticles() {
        particles = [];
        connections = [];
        brainWaves = [];
        const particleCount = Math.min(40, Math.floor(canvas.width * canvas.height / 15000));
        
        // Create neural network nodes
        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1.5,
            vx: Math.random() * 0.4 - 0.2,
            vy: Math.random() * 0.4 - 0.2,
            active: Math.random() > 0.3,
            color: Math.random() > 0.6 ? '#00f7ff' : Math.random() > 0.3 ? '#ff00cc' : '#9933ff',
            pulsePhase: Math.random() * Math.PI * 2,
            energy: Math.random()
          });
        }
        
        // Create brain wave patterns
        for (let i = 0; i < 8; i++) {
          brainWaves.push({
            amplitude: Math.random() * 30 + 20,
            frequency: Math.random() * 0.02 + 0.01,
            phase: Math.random() * Math.PI * 2,
            y: Math.random() * canvas.height,
            speed: Math.random() * 0.5 + 0.2,
            opacity: Math.random() * 0.3 + 0.1
          });
        }
        
        // Create intelligent connections
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const distance = Math.sqrt(
              Math.pow(particles[i].x - particles[j].x, 2) + 
              Math.pow(particles[i].y - particles[j].y, 2)
            );
            
            if (distance < canvas.width / 6 && Math.random() > 0.85) {
              connections.push({
                from: i,
                to: j,
                strength: Math.random(),
                pulsePosition: 0,
                pulseSpeed: Math.random() * 0.04 + 0.01,
                pulseActive: false,
                dataPacket: null
              });
            }
          }
        }
      }


      
      
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw brain waves
        brainWaves.forEach(wave => {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 247, 255, ${wave.opacity})`;
          ctx.lineWidth = 1;
          
          for (let x = 0; x < canvas.width; x += 5) {
            const y = wave.y + Math.sin(x * wave.frequency + wave.phase) * wave.amplitude;
            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.stroke();
          wave.phase += wave.speed * 0.01;
        });
        
        // Draw connections with data flow
        connections.forEach(connection => {
          const fromParticle = particles[connection.from];
          const toParticle = particles[connection.to];
          
          const dx = toParticle.x - fromParticle.x;
          const dy = toParticle.y - fromParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < canvas.width / 5) {
            // Connection line
            ctx.beginPath();
            ctx.moveTo(fromParticle.x, fromParticle.y);
            ctx.lineTo(toParticle.x, toParticle.y);
            
            const opacity = Math.max(0, (1 - distance / (canvas.width / 5)) * 0.3 * connection.strength);
            ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
            
            // Trigger data packets randomly
            if (Math.random() < 0.003 && !connection.pulseActive) {
              connection.pulseActive = true;
              connection.pulsePosition = 0;
              connection.dataPacket = {
                type: Math.random() > 0.5 ? 'data' : 'signal',
                size: Math.random() * 2 + 1
              };
            }
            
            // Animate data packets
            if (connection.pulseActive) {
              connection.pulsePosition += connection.pulseSpeed;
              
              if (connection.pulsePosition > 1) {
                connection.pulseActive = false;
                connection.pulsePosition = 0;
                connection.dataPacket = null;
                // Activate target particle
                toParticle.energy = Math.min(1, toParticle.energy + 0.3);
              } else {
                const pulseX = fromParticle.x + dx * connection.pulsePosition;
                const pulseY = fromParticle.y + dy * connection.pulsePosition;
                
                // Draw data packet
                ctx.beginPath();
                ctx.arc(pulseX, pulseY, connection.dataPacket.size, 0, Math.PI * 2);
                ctx.fillStyle = connection.dataPacket.type === 'data' ? '#ff00cc' : '#00f7ff';
                ctx.fill();
                
                // Data packet trail
                ctx.beginPath();
                ctx.arc(pulseX, pulseY, connection.dataPacket.size * 2, 0, Math.PI * 2);
                ctx.fillStyle = connection.dataPacket.type === 'data' ? 'rgba(255, 0, 204, 0.2)' : 'rgba(0, 247, 255, 0.2)';
                ctx.fill();
              }
            }
          }
        });
        
        // Draw particles with enhanced effects
        particles.forEach(particle => {
          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;
          
          // Boundary collision
          if (particle.x < 0 || particle.x > canvas.width) particle.vx = -particle.vx;
          if (particle.y < 0 || particle.y > canvas.height) particle.vy = -particle.vy;
          
          // Update energy and activity
          particle.energy *= 0.995; // Energy decay
          particle.pulsePhase += 0.1;
          
          if (Math.random() < 0.01) {
            particle.active = !particle.active;
          }
          
          // Draw particle core
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          const coreOpacity = particle.active ? 1 : 0.4;
          ctx.fillStyle = particle.color.replace(')', `, ${coreOpacity})`).replace('rgb', 'rgba');
          ctx.fill();
          
          // Draw energy field
          if (particle.energy > 0.1) {
            const energyRadius = particle.radius * (2 + particle.energy * 2);
            const energyOpacity = particle.energy * 0.3;
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, energyRadius, 0, Math.PI * 2);
            ctx.fillStyle = particle.color.replace(')', `, ${energyOpacity})`).replace('rgb', 'rgba');
            ctx.fill();
          }
          
          // Draw pulse ring for active particles
          if (particle.active) {
            const pulseRadius = particle.radius * (1.5 + Math.sin(particle.pulsePhase) * 0.5);
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, pulseRadius, 0, Math.PI * 2);
            ctx.strokeStyle = particle.color.replace(')', `, 0.6)`).replace('rgb', 'rgba');
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
        
        animationFrameId = requestAnimationFrame(animate);
      };
      
      animate();
      
      return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, []);

  // Circuit Background Animation (Enhanced)
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const gridSpacing = 50;
      const lines = [];
      const pulses = [];
      const nodes = [];
      const primaryColor = "#00f7ff";
      const secondaryColor = "#ff00cc";
      const tertiaryColor = "#9933ff";
      
      const initGrid = () => {
        // Create grid lines
        for (let x = 0; x < canvas.width; x += gridSpacing) {
          for (let y = 0; y < canvas.height; y += gridSpacing) {
            if (Math.random() < 0.3) {
              // Horizontal lines
              if (x + gridSpacing < canvas.width && Math.random() < 0.5) {
                const color = Math.random() < 0.6 ? primaryColor : Math.random() < 0.7 ? secondaryColor : tertiaryColor;
                lines.push({
                  x1: x, y1: y, x2: x + gridSpacing, y2: y,
                  color: color,
                  opacity: 0.1 + Math.random() * 0.3,
                  width: Math.random() < 0.9 ? 0.5 : 1.5
                });
                
                if (Math.random() < 0.15) {
                  pulses.push({
                    x1: x, y1: y, x2: x + gridSpacing, y2: y,
                    pos: 0, speed: 0.4 + Math.random() * 1.2,
                    size: 1 + Math.random() * 2,
                    color: color,
                    intensity: Math.random()
                  });
                }
              }
              
              // Vertical lines
              if (y + gridSpacing < canvas.height && Math.random() < 0.5) {
                const color = Math.random() < 0.6 ? primaryColor : Math.random() < 0.7 ? secondaryColor : tertiaryColor;
                lines.push({
                  x1: x, y1: y, x2: x, y2: y + gridSpacing,
                  color: color,
                  opacity: 0.1 + Math.random() * 0.3,
                  width: Math.random() < 0.9 ? 0.5 : 1.5
                });
                
                if (Math.random() < 0.15) {
                  pulses.push({
                    x1: x, y1: y, x2: x, y2: y + gridSpacing,
                    pos: 0, speed: 0.4 + Math.random() * 1.2,
                    size: 1 + Math.random() * 2,
                    color: color,
                    intensity: Math.random()
                  });
                }
              }
              
              // Add nodes at intersections
              if (Math.random() < 0.1) {
                nodes.push({
                  x: x, y: y,
                  size: Math.random() * 2 + 1,
                  color: Math.random() < 0.5 ? primaryColor : secondaryColor,
                  pulsePhase: Math.random() * Math.PI * 2,
                  active: Math.random() > 0.7
                });
              }
            }
          }
        }
      };
      
      initGrid();
      
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw grid lines
        lines.forEach(line => {
          ctx.beginPath();
          ctx.moveTo(line.x1, line.y1);
          ctx.lineTo(line.x2, line.y2);
          ctx.strokeStyle = line.color.replace(')', `, ${line.opacity})`).replace('rgb', 'rgba');
          ctx.lineWidth = line.width;
          ctx.stroke();
        });
        
        // Draw and animate pulses
        pulses.forEach(pulse => {
          pulse.pos += pulse.speed;
          if (pulse.pos > 100) pulse.pos = 0;
          
          const percent = pulse.pos / 100;
          const x = pulse.x1 + (pulse.x2 - pulse.x1) * percent;
          const y = pulse.y1 + (pulse.y2 - pulse.y1) * percent;
          
          // Main pulse
          ctx.beginPath();
          ctx.arc(x, y, pulse.size, 0, Math.PI * 2);
          ctx.fillStyle = pulse.color;
          ctx.fill();
          
          // Pulse glow
          ctx.beginPath();
          ctx.arc(x, y, pulse.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = pulse.color.replace(')', `, ${0.3 * pulse.intensity})`).replace('rgb', 'rgba');
          ctx.fill();
          
          // Pulse trail
          if (pulse.pos > 10) {
            const trailX = pulse.x1 + (pulse.x2 - pulse.x1) * ((pulse.pos - 10) / 100);
            const trailY = pulse.y1 + (pulse.y2 - pulse.y1) * ((pulse.pos - 10) / 100);
            
            ctx.beginPath();
            ctx.arc(trailX, trailY, pulse.size * 0.5, 0, Math.PI * 2);
            ctx.fillStyle = pulse.color.replace(')', `, ${0.5 * pulse.intensity})`).replace('rgb', 'rgba');
            ctx.fill();
          }
        });
        
        // Draw nodes
        nodes.forEach(node => {
          node.pulsePhase += 0.1;
          
          if (Math.random() < 0.005) {
            node.active = !node.active;
          }
          
          // Node core
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
          ctx.fillStyle = node.active ? node.color : node.color.replace(')', `, 0.4)`).replace('rgb', 'rgba');
          ctx.fill();
          
          // Node pulse ring
          if (node.active) {
            const pulseSize = node.size * (1.5 + Math.sin(node.pulsePhase) * 0.5);
            ctx.beginPath();
            ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
            ctx.strokeStyle = node.color.replace(')', `, 0.6)`).replace('rgb', 'rgba');
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
        
        requestAnimationFrame(animate);
      };
      
      animate();
    }
  }, []);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'project', // 'project' or 'recruitment'
    company: '',
    position: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });




  const handleProjectNavigation = (direction) => {
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




const [showImageModal, setShowImageModal] = useState(false);
const [currentImage, setCurrentImage] = useState('');
  
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  //email
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
  
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        inquiry_type: formData.inquiryType === 'recruitment' ? 'Recruitment' : 'Project',
        company: formData.company || 'N/A',
        position: formData.position || 'N/A',
        project_type: formData.projectType || 'N/A',
        budget: formData.budget || 'Not specified',
        timeline: formData.timeline || 'Not specified',
        message: formData.message
      };
  
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID
      );
  
      setSubmitStatus({
        success: true,
        message: 'Message sent successfully! I will get back to you soon.'
      });
      setFormData({
        name: '',
        email: '',
        inquiryType: 'project',
        company: '',
        position: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });
    } catch (error) {
      console.error('Email sending error:', error);
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again or contact me directly at dhiashayeb6@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  

  // AI Chat 
  const processGeminiRequest = async (input) => {
    if (!input.trim()) return;
    
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = process.env.REACT_APP_API_URL;
    
    if (!apiKey || !apiUrl) {
      const errorMessage = { 
        text: `API configuration is missing. Missing: ${!apiKey ? 'API_KEY ' : ''}${!apiUrl ? 'API_URL' : ''}. Please check your .env file uses REACT_APP_ prefix and restart the development server.`, 
        isUser: false, 
        timestamp: new Date().toLocaleTimeString(),
        id: Date.now() + 1,
        isError: true
      };
      setChatMessages(prev => [...prev, errorMessage]);
      return;
    }
    
    const userMessage = { 
      text: input, 
      isUser: true, 
      timestamp: new Date().toLocaleTimeString(),
      id: Date.now()
    };
    setChatMessages(prev => [...prev, userMessage]);
    setIsProcessing(true);
    setUserInput('');
    
    setAiAnalytics(prev => ({
      ...prev,
      questionsAnswered: prev.questionsAnswered + 1
    }));
    
    try {
      const fullApiUrl = `${apiUrl}?key=${apiKey}`;
      
      // Enhanced comprehensive prompt with all portfolio information
      const comprehensivePrompt = `You are an AI assistant representing Dhia Shayeb, a Senior Full-Stack Engineer. Answer questions ONLY about Dhia based on the following comprehensive information. Be professional, technical, and engaging to showcase his expertise.

  PERSONAL & PROFESSIONAL BACKGROUND:
  - Name: Dhia Shayeb
  - Role: Senior Full-Stack Engineer 
  - Philosophy: "I solve problems through code, regardless of platform or language"
  - Approach: Combines rigorous computer science fundamentals with practical implementation skills

  TECHNICAL EXPERTISE:
  Full-Stack Versatility:
  - Web Development: MERN Stack (MongoDB, Express, React, Node.js), MEAN Stack, Laravel, .NET
  - Mobile Development: Flutter for cross-platform applications
  - System Programming: Python, Java
  - Frontend: Next.js (96% proficiency), React, modern JavaScript
  - Backend: Node.js, Express, API development
  - Databases: MongoDB (89% proficiency), SQL databases
  - Cloud & DevOps: AWS (87% proficiency), Docker (85% proficiency), Kubernetes
  - AI/ML: Python & AI/ML (91% proficiency), TensorFlow (83% proficiency)
  - Architecture: Microservices (90% proficiency)

  PROFESSIONAL EXPERIENCE:
  - Bright Soft: Startup prototype development
  - Tunisie Telecom: Enterprise-scale solutions
  - Remote collaboration across multiple timezones
  - Agile development environments
  - Team leadership experience

  MAJOR PROJECTS:

  1. Automated DevOps Pipeline:
  - Complete CI/CD implementation for SpringBoot applications
  - 18 distinct pipeline stages ensuring code quality, security, and deployment reliability
  - Technologies: Jenkins, Docker, SpringBoot, Nexus, SonarQube, JUnit, Grafana, Prometheus, Portainer, Watchtower
  - Metrics: <2min average pipeline duration, 100% success rate, 100% test coverage enforcement
  - Features: Automated rollback capabilities, comprehensive monitoring, security scanning at every stage

  2. Smart Wheelchair Voice Assistant:
  - Arduino-based assistive technology for mobility
  - Voice-controlled wheelchair system with Windows tablet integration
  - Features: Voice recognition, emergency calls with GPS, health monitoring, smart home integration, PC control
  - Technologies: Arduino, Python, Bluetooth, Voice Recognition, IoT, Windows API
  - Impact: Designed for patients with mobility challenges using user-centered approach

  3. SkillSync AI Learning Platform:
  - MERN Stack educational platform with Gemini AI integration
  - Features: AI therapeutic assistant, real-time translation (10+ languages), course generation, voice-enabled PDF processing, smart scheduling
  - Technologies: React, Node.js, MongoDB, Express, Gemini API, WebSocket, JWT, AWS
  - Capabilities: Document translation, educational resource finder, 24/7 AI chatbot, personalized learning paths

  TECHNICAL SKILLS MATRIX:
  - MERN Stack: 94% proficiency
  - MEAN Stack: 90% proficiency  
  - Next.js: 96% proficiency
  - Flutter: 88% proficiency
  - Python & AI/ML: 91% proficiency
  - MongoDB & SQL: 89% proficiency
  - AWS & Cloud: 87% proficiency
  - Docker & K8s: 85% proficiency
  - TensorFlow: 83% proficiency
  - Microservices: 90% proficiency

  CERTIFICATIONS & EXPERTISE:
  - Scrum Fundamentals Certified (2024): Agile methodology, sprint planning, project management
  - Microservices Architecture Specialist (2024): Distributed systems, API Gateway, service discovery, Docker, security
  - Full-Stack Development Expert: Modern web technologies, React, Node.js, APIs, DevOps
  - Cloud Integration Proficient: Containerization, CI/CD pipelines, Kubernetes, configuration management

  PROFESSIONAL RECOGNITION:
  - Code Quality Focus: Clean, documented code following industry standards
  - Project Success: 100% completion rate on microservices projects
  - Technical Innovation: Implementation of modern architectural patterns
  - Problem Solving: Analytical approach to complex requirements

  DEVELOPMENT APPROACH:
  - Platform agnostic: Web, mobile, desktop, and cloud solutions
  - Clean architecture and maintainable code prioritization
  - Experience from startup prototypes to enterprise solutions
  - Agile environments and continuous learning
  - Global delivery and remote collaboration

  CONTACT INFORMATION:
  - Email: dhiashayeb6@gmail.com
  - LinkedIn: linkedin.com/in/dhia-shayeb
  - GitHub: github.com/ChaiebDhia
  - Available for: Freelance and full-time opportunities
  - Response time: Within 24 hours

  IMPORTANT GUIDELINES:
  - Only answer questions about Dhia Shayeb and his professional profile
  - If asked about something not in this information, respond professionally: "That's an excellent area I'm actively exploring and would be excited to learn more about in the right opportunity"
  - Keep responses professional, technical, and engaging
  - Highlight relevant expertise based on the question
  - Show enthusiasm for innovation and problem-solving
  - Emphasize adaptability and continuous learning

  User Question: ${input}

  Provide a professional, engaging response that showcases Dhia's expertise and would impress potential employers or clients.`;
      
      const response = await fetch(fullApiUrl, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: comprehensivePrompt
            }]
          }]
        })
      });
      
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status} - ${response.statusText}`);
      }
      
      const data = await response.json();
      
      if (data.error) {
        throw new Error(`API Error: ${data.error.message || 'Unknown API error'}`);
      }
      
      const aiResponse = data?.candidates?.[0]?.content?.parts?.[0]?.text || "I'm experiencing some technical difficulties. Please try again!";
      
      const aiMessage = { 
        text: aiResponse, 
        isUser: false, 
        timestamp: new Date().toLocaleTimeString(),
        id: Date.now() + 1
      };
      setChatMessages(prev => [...prev, aiMessage]);
      
    } catch (error) {
      console.error('Gemini API Error:', error);
      
      let errorText = "I'm having trouble connecting right now. Please check your connection and try again!";
      
      if (error.message.includes('401')) {
        errorText = "Authentication failed. Please check your API key in the .env file.";
      } else if (error.message.includes('403')) {
        errorText = "Access denied. Your API key may not have the required permissions.";
      } else if (error.message.includes('429')) {
        errorText = "Rate limit exceeded. Please wait a moment before trying again.";
      } else if (error.message.includes('500')) {
        errorText = "Server error. The AI service is temporarily unavailable.";
      } else if (error.message.includes('API Error')) {
        errorText = error.message;
      }
      
      const errorMessage = { 
        text: errorText, 
        isUser: false, 
        timestamp: new Date().toLocaleTimeString(),
        id: Date.now() + 1,
        isError: true
      };
      setChatMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    processGeminiRequest(userInput);
  };

  // Enhanced projects data
  const projects = [
    {
      id: 1,
      title: "Automated DevOps Pipeline",
      subtitle: "End-to-End CI/CD Implementation for SpringBoot",
      description: "Designed and implemented a complete CI/CD pipeline for a SpringBoot application following DevOps principles. The pipeline incorporates 18 distinct stages that ensure code quality, security, and deployment reliability.",
      detailedDescription: `
        Designed and implemented a complete CI/CD pipeline for a SpringBoot application following DevOps principles. The pipeline incorporates:
    
        The pipeline architecture features 18 distinct stages that ensure code quality, security, and deployment reliability:
        
        - Environment Preparation: Tool installation and configuration
        - Source Code Management: Git checkout with branch validation
        - Build Process: Maven clean, compile, and package with dependency resolution
        - Quality Assurance: JUnit testing with JACOCO code coverage reporting
        - Static Analysis: SonarQube scanning with quality gate enforcement
        - Artifact Management: Nexus repository for versioned artifact storage
        - Containerization: Docker image creation and validation
        - Deployment: Automated rollout to containerized environments
        - Monitoring: Portainer for container management and Watchtower for auto-updates
        - Notification: Email alerts for pipeline status changes
        
        The solution demonstrates full automation from code commit to production deployment, with:
        - Average pipeline execution time under 2 minutes
        - 100% test coverage enforcement
        - Static code analysis with zero critical issues
        - Automated rollback capabilities
        - Comprehensive monitoring through Grafana dashboards
        
        Technical highlights include:
        - Declarative Jenkins pipeline with parallel stage execution
        - Infrastructure-as-Code principles for environment consistency
        - Immutable artifacts through Nexus repository
        - Container orchestration with health checks
        - Security scanning at every pipeline stage
      `,
      tech: ["Jenkins", "Docker", "SpringBoot", "Nexus", "SonarQube", "JUnit", "Grafana", "Prometheus", "Portainer", "Watchtower"],
      github: "#",
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
      id: 2,
      title: "Smart Wheelchair Voice Assistant",
      subtitle: "Arduino-based Assistive Technology for Mobility",
      description: "Developed an innovative voice-controlled wheelchair system combining Arduino robotics with a Windows tablet voice assistant to help patients control their environment autonomously.",
      detailedDescription: `
        This project combines an Arduino-based robot car simulating a 4-wheeled wheelchair with a voice assistant application, allowing patients to intuitively control:
        
        - The wheelchair movement through voice commands
        - Smart home devices (lights, appliances)
        - Their personal computer
        
        Key Features:
        - Voice recognition system for hands-free control
        - Emergency call functionality with GPS location sharing
        - Health monitoring with automated reports to doctors
        - Home automation integration
        - PC control capabilities
        
        Technical Implementation:
        - Arduino Uno with motor shield and ultrasonic sensors
        - Bluetooth HC-06 module for wireless communication
        - Python-based voice assistant on Windows tablet
        - Google Maps integration for emergency location
        - Email notification system for alerts
        
        The system was designed with a user-centered approach to ensure accessibility and ease of use for patients with mobility challenges.
      `,
      tech: ["Arduino", "Python", "Bluetooth", "Voice Recognition", "IoT", "Windows API"],
      github: "#",
      live: "#",
      category: "Assistive Technology",
      status: "Prototype",
      metrics: {
        "Components": "8+",
        "Response Time": "<1s",
        "Commands": "20+"
      },
      features: [
        "Voice Control", 
        "Emergency Alert System", 
        "Health Monitoring", 
        "Smart Home Integration",
        "PC Control",
        "User-Friendly Interface"
      ],
      image: "/images/VA.png", // Update with your image path
      viewImageButton: true
    },
    {
      id: 3,
      title: "SkillSync AI Learning Platform",
      subtitle: "MERN Stack Educational Platform with Gemini AI Integration",
      description: "Created an innovative learning platform using the MERN stack with advanced AI features including real-time translation, course generation, and therapeutic assistance.",
      detailedDescription: `
        SkillSync is a comprehensive educational platform that leverages cutting-edge AI technologies to enhance learning experiences:
        
        Core Features:
        - AI Therapeutic Assistant: Provides mental health support and guidance
        - Real-time Translation: Translates spoken and written content instantly
        - Document Translation: Processes uploaded materials in multiple languages
        - Course Generator: Creates customized learning paths based on user needs
        - Educational Resource Finder: Locates relevant materials for any topic
        - AI Chatbot: 24/7 learning assistance and Q&A
        - Voice-Enabled PDF Processing: Summarizes and interacts with course materials
        - Smart Scheduling: Creates personalized learning schedules based on availability
        - Roadmap Generator: Develops step-by-step learning plans
        
        Technical Stack:
        - MERN Architecture (MongoDB, Express, React, Node.js)
        - Gemini AI API for advanced NLP capabilities
        - WebSocket for real-time communication
        - JWT for secure authentication
        - AWS S3 for document storage
        
        The platform was designed to break language barriers and provide personalized, accessible education for all users.
      `,
      tech: ["React", "Node.js", "MongoDB", "Express", "Gemini API", "WebSocket", "JWT", "AWS"],
      github: "#",
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
        "Voice Interaction",
        "Smart Scheduling",
        "Document Processing"
      ],
      image: "/images/SkillSync.png", // Update with your image path
      viewImageButton: true
    }
  ];

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

  const achievements = [
    { icon: <FaTrophy />, title: "Tech Innovation Award", year: "2024", description: "Best AI Integration" },
    { icon: <FaStar />, title: "GitHub Contributor", year: "2023", description: "Open Source Excellence" },
    { icon: <FaFire />, title: "Performance Leader", year: "2023", description: "99.9% Uptime Record" },
    { icon: <FaUsers />, title: "Team Leadership", year: "2022", description: "Led 8+ Engineers" }
  ];

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsNavOpen(false);
    }
  };


  return (
    <div className={`portfolio-container ${isLoaded ? 'loaded' : 'loading'}`}>
      {/* Background Effects */}
      <canvas ref={canvasRef} className="circuit-background" />
      
      <div className="ambient-background">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
        <div className="nav-brand">
          <FaMicrochip className="brand-icon" />
          <span className="brand-text">Dhia Shayeb</span>
          <div className="brand-subtitle">Full-Stack Engineer</div>
        </div>
          
          <div className={`nav-menu ${isNavOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>
              <FaRocket /> Home
            </a>
            <a href="#about" onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>
              <FaBrain /> About
            </a>
            <a href="#projects" onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>
              <FaProjectDiagram /> Projects
            </a>
            <a href="#skills" onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>
              <FaCode /> Skills
            </a>
            <a href="#expertise" onClick={() => scrollToSection('expertise')} className={activeSection === 'expertise' ? 'active' : ''}>
              <FaLightbulb /> Expertise
            </a>
            <a href="#contact" onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>
              <FaEnvelope /> Contact
            </a>
            
          </div>
          
          <button className="nav-toggle" onClick={() => setIsNavOpen(!isNavOpen)}>
            
            {isNavOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
<section id="home" className="hero-section">
  <canvas ref={neuralNetworkRef} className="neural-network-canvas" />
  
  <div className="hero-content">
    <div className="hero-text-container">
      <div className="hero-text">
        <div className="hero-greeting">
          <FaRocket className="greeting-icon" />
          <span>Welcome to the Future</span>
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
            Full-Stack Engineer, AI/ML Solutions
          </h2>
        </div>
        
        <p className="hero-description">
          Pioneering the future of technology through innovative AI integration, 
          scalable architecture, and next-generation web solutions. 
          <span className="highlight">Building tomorrow's applications today.</span>
        </p>
        
        <div className="hero-cta">
          <a 
            href="https://drive.google.com/uc?export=download&id=YOUR_GOOGLE_DRIVE_FILE_ID" 
            className="cta-button primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload className="btn-icon" />
            Download Resume
          </a>
          <button className="cta-button secondary" onClick={() => setIsChatOpen(true)}>
            <FaRobot className="btn-icon" />
            Chat with AI Assistant
          </button>
        </div>
      </div>
    </div>
    
    {/* Executive Portrait - Positioned responsively */}
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
        <div className="stat-number">6+</div>
        <div className="stat-label">Years Experience</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">50+</div>
        <div className="stat-label">Projects Delivered</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">99.9%</div>
        <div className="stat-label">Uptime Record</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">15+</div>
        <div className="stat-label">AI Integrations</div>
      </div>
    </div>
  </div>
</section>

      <section id="about" className="about-section">
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

      {/* Education section with improved spacing */}
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

      {/* CTA Buttons with better spacing */}
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
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
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
                        <button className="project-btn secondary">
                          <FaGithub className="btn-icon" />
                          Code
                        </button>
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
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
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
      </section>

      {/* Expertise & Certifications Section */}
      <section id="expertise" className="expertise-section">
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
                        <FaMagic className="item-icon" /> {/* Changed to magic wand for creativity */}
                        <h4>UI/UX Development</h4>
                      </div>
                      <div className="item-subtitle">Design Thinking in Team Projects</div>
                      <div className="item-description">
                        Applied the full UX process (research → Figma prototyping → testing → iteration) in collaborative projects. Focused on user-centered design, usability testing, and seamless UI integration into functional code.
                      </div>
                    </div>
                    <div className="verification-badge portfolio">Project Experience</div> {/* Changed to reflect hands-on work */}
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
                <FaCodeBranch className="recognition-icon" />
                <div className="recognition-title">Code Quality Focus</div>
                <div className="recognition-description">
                  Maintaining clean, documented code following industry standards
                </div>
                <div className="recognition-metric">High Standards</div>
                <div className="recognition-glow"></div>
              </div>
              
              <div className="recognition-card">
                <FaRocket className="recognition-icon" />
                <div className="recognition-title">Project Success</div>
                <div className="recognition-description">
                  Successfully delivered multiple microservices projects
                </div>
                <div className="recognition-metric">100% Completion</div>
                <div className="recognition-glow"></div>
              </div>
              
              <div className="recognition-card">
                <FaCogs className="recognition-icon" />
                <div className="recognition-title">Technical Innovation</div>
                <div className="recognition-description">
                  Implementing modern architectural patterns and solutions
                </div>
                <div className="recognition-metric">Latest Tech Stack</div>
                <div className="recognition-glow"></div>
              </div>
              
              <div className="recognition-card">
                <FaMagic className="recognition-icon" />
                <div className="recognition-title">Problem Solving</div>
                <div className="recognition-description">
                  Analyzing complex requirements and delivering efficient solutions
                </div>
                <div className="recognition-metric">Analytical Approach</div>
                <div className="recognition-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-content">
          <div className="section-header">
            <div className="section-title">
              <FaEnvelope className="section-icon" />
              <h2>INITIALIZE CONNECTION</h2>
            </div>
            <div className="section-subtitle">
              Ready to build the future together?
            </div>
          </div>
          
          <div className="contact-grid">
            <div className="contact-info">
              <h3 className="contact-heading">
                <FaRocket className="contact-icon" />
                Let's Create Something Amazing
              </h3>
              <p className="contact-text">
                Always excited to collaborate on innovative projects that push technological boundaries. 
                Whether you're looking to integrate AI into your platform, scale your architecture, 
                or build something entirely new, let's connect.
              </p>
              
              <div className="contact-details">
                
                <div className="detail-item">
                  <FaCoffee className="detail-icon" />
                  <span>Available for freelance & full-time</span>
                </div>
                <div className="detail-item">
                  <FaPhone className="detail-icon" />
                  <span>Response within 24 hours</span>
                </div>
              </div>

              <div className="contact-links">
                <a href="mailto:dhiashayeb6@gmail.com" className="contact-link">
                  <FaEnvelope className="link-icon" />
                  <span>dhiashayeb6@gmail.com</span>
                </a>
                <a href="https://linkedin.com/in/dhia-shayeb" className="contact-link">
                  <FaLinkedin className="link-icon" />
                  <span>LinkedIn Profile</span>
                </a>
                <a href="https://github.com/ChaiebDhia" className="contact-link">
                  <FaGithub className="link-icon" />
                  <span>GitHub Portfolio</span>
                </a>
              </div>
            </div>
            
            <div className="contact-form">
              <form className="form-container" onSubmit={handleSubmit}>
                {/* Basic Info */}
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder="Your Name *" 
                    className="form-input" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                  <div className="input-border"></div>
                </div>
                
                <div className="form-group">
                  <input 
                    type="email" 
                    placeholder="Your Email *" 
                    className="form-input" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                  <div className="input-border"></div>
                </div>
                
                {/* Inquiry Type Toggle */}
                <div className="form-group radio-group">
                  <label className={`radio-option ${formData.inquiryType === 'project' ? 'active' : ''}`}>
                    <input
                      type="radio"
                      name="inquiryType"
                      checked={formData.inquiryType === 'project'}
                      onChange={() => setFormData({...formData, inquiryType: 'project'})}
                    />
                    <span>Project Inquiry</span>
                  </label>
                  <label className={`radio-option ${formData.inquiryType === 'recruitment' ? 'active' : ''}`}>
                    <input
                      type="radio"
                      name="inquiryType"
                      checked={formData.inquiryType === 'recruitment'}
                      onChange={() => setFormData({...formData, inquiryType: 'recruitment'})}
                    />
                    <span>Recruitment Opportunity</span>
                  </label>
                </div>
                
                {/* Conditional Fields */}
                {formData.inquiryType === 'recruitment' ? (
                  <>
                    <div className="form-group">
                      <input 
                        type="text" 
                        placeholder="Company Name *" 
                        className="form-input" 
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        required
                      />
                      <div className="input-border"></div>
                    </div>
                    <div className="form-group">
                      <input 
                        type="text" 
                        placeholder="Position *" 
                        className="form-input" 
                        value={formData.position}
                        onChange={(e) => setFormData({...formData, position: e.target.value})}
                        required
                      />
                      <div className="input-border"></div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="form-group">
                      <input 
                        type="text" 
                        placeholder="Project Type *" 
                        className="form-input" 
                        value={formData.projectType}
                        onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                        required
                      />
                      <div className="input-border"></div>
                    </div>
                    <div className="form-group">
                      <input 
                        type="text" 
                        placeholder="Budget Range" 
                        className="form-input" 
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      />
                      <div className="input-border"></div>
                    </div>
                    <div className="form-group">
                      <input 
                        type="text" 
                        placeholder="Timeline" 
                        className="form-input" 
                        value={formData.timeline}
                        onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                      />
                      <div className="input-border"></div>
                    </div>
                  </>
                )}
                
                <div className="form-group">
                  <textarea 
                    placeholder={formData.inquiryType === 'recruitment' ? 'Tell me about the opportunity... *' : 'Tell me about your project... *'} 
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  ></textarea>
                  <div className="input-border"></div>
                </div>
                
                {submitStatus && (
                  <div className={`form-status ${submitStatus.success ? 'success' : 'error'}`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  <FaPaperPlane className="btn-icon" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Widget */}
      {isChatOpen && (
        <div className="chat-widget">
          <div className="chat-header">
            <div className="chat-info">
              <FaRobot className="chat-avatar" />
              <div className="chat-details">
                <h4>AI Assistant</h4>
                
              </div>
            </div>
            
            <div className="chat-controls">
              <button onClick={() => setIsChatOpen(false)} className="chat-close">
                <FaTimes />
              </button>
            </div>
          </div>
          
          <div className="chat-messages">
            {chatMessages.length === 0 && (
              <div className="welcome-message">
                <FaRobot className="welcome-icon" />
                <h4>Hello! I'm Dhia's AI Assistant</h4>
                <p>Ask me anything about Dhia's experience, projects, or technical expertise!</p>
              </div>
            )}
            
            {chatMessages.map((message) => (
              <div key={message.id} className={`message ${message.isUser ? 'user' : 'ai'} ${message.isError ? 'error' : ''}`}>
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="message-time">{message.timestamp}</span>
                </div>
              </div>
            ))}
            
            {isProcessing && (
              <div className="message ai">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          
          <form onSubmit={handleChatSubmit} className="chat-input-form">
            <div className="input-container">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask about projects, skills, experience..."
                className="chat-input"
                disabled={isProcessing}
              />
              
              <button 
                type="submit" 
                className="send-btn"
                disabled={isProcessing || !userInput.trim()}
              >
                <FaPaperPlane />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Chat Toggle Button */}
      <button 
        className="chat-toggle"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        {isChatOpen ? <FaTimes /> : <FaRobot />}
      </button>


      {showTerms && (
  <div className="legal-modal">
    <div className="modal-content">
      <button className="modal-close" onClick={() => setShowTerms(false)}>
        <FaTimes />
      </button>
      <h3>Terms of Service</h3>
      <div className="legal-content">
        <h4>1. Acceptance of Terms</h4>
        <p>By accessing and using this portfolio website ("Site"), you accept and agree to be bound by these Terms of Service...</p>
        
        <h4>2. Intellectual Property</h4>
        <p>All content on this Site, including but not limited to text, graphics, logos, and software, is the property of Dhia Shayeb and protected by intellectual property laws...</p>
        
        <h4>3. Use License</h4>
        <p>Permission is granted to temporarily download one copy of the materials on this Site for personal, non-commercial transitory viewing only...</p>
        
        <h4>4. Disclaimer</h4>
        <p>The materials on this Site are provided "as is". Dhia Shayeb makes no warranties, expressed or implied...</p>
        
        <h4>5. Limitations</h4>
        <p>In no event shall Dhia Shayeb or its suppliers be liable for any damages arising out of the use or inability to use the materials on this Site...</p>
      </div>
    </div>
  </div>
)}

{showImageModal && (
  <div className="image-modal">
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

{showPrivacy && (
  <div className="legal-modal">
    <div className="modal-content">
      <button className="modal-close" onClick={() => setShowPrivacy(false)}>
        <FaTimes />
      </button>
      <h3>Privacy Policy</h3>
      <div className="legal-content">
        <h4>1. Information Collection</h4>
        <p>We may collect personal identification information including but not limited to name, email address, and contact details when users fill out our contact form...</p>
        
        <h4>2. Use of Information</h4>
        <p>Collected information may be used to respond to inquiries, improve user experience, and for communication purposes...</p>
        
        <h4>3. Data Protection</h4>
        <p>We implement appropriate data collection, storage, and processing practices to protect against unauthorized access...</p>
        
        <h4>4. Cookies</h4>
        <p>Our Site may use "cookies" to enhance User experience. Users may set their web browser to refuse cookies...</p>
        
        <h4>5. Changes to Policy</h4>
        <p>We reserve the right to update this privacy policy at any time. We encourage Users to frequently check this page for any changes...</p>
      </div>
    </div>
  </div>
)}
      
      <footer className="portfolio-footer">
        <div className="footer-particle"></div>
        <div className="footer-particle"></div>
        <div className="footer-content">
        <div className="copyright-info">
          <p>© {new Date().getFullYear()} Dhia Shayeb. All Rights Reserved.</p>
          <p className="copyright-notice">
            The content, design, and code of this portfolio are protected under international 
            copyright laws. Unauthorized reproduction or distribution of any materials 
            without express written permission is strictly prohibited.
          </p>
        </div>
          <div className="footer-links">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); setShowPrivacy(true); }}>Privacy Policy</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); setShowTerms(true); }}>Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
    
  );
};

export default AdvancedPortfolio;