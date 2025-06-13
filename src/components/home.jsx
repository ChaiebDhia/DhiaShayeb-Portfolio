import React, { useState, useEffect, useRef } from 'react';
import { 
  FaBrain, FaRobot, FaCode,FaGraduationCap, FaProjectDiagram,FaEnvelope,FaLinkedin,FaGithub,FaDownload,FaMicrophone,FaPaperPlane,FaReact,FaNodeJs,FaPython,FaAws,FaDocker,FaDatabase,FaBars,FaTimes,FaLightbulb,FaRocket,FaShieldAlt,FaChartLine,FaCloudUploadAlt,FaMagic,FaEye,FaHeart,FaMapMarkerAlt,FaPhone,FaCoffee,FaUsers,FaTrophy,FaStar,FaFire,FaLock,FaMicrochip,FaAtom
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTensorflow, SiKubernetes, SiOpenai, SiGoogle } from 'react-icons/si';
import { FaMoon, FaSun } from 'react-icons/fa';
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

  const [isLightMode, setIsLightMode] = useState(false);
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

  

  // Enhanced AI Chat with multiple personalities
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
      
      const response = await fetch(fullApiUrl, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are Dhia Shayeb, an innovative Senior Full-Stack Engineer and AI Solutions Architect. 
              Answer this question about Dhia: ${input}
              Keep responses professional, technical, and informative.`
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
      title: "NeuroCommerce AI Platform",
      subtitle: "Next-Gen E-Commerce with AI Brain",
      description: "Revolutionary e-commerce platform powered by advanced AI for personalized shopping experiences, predictive analytics, and intelligent inventory management.",
      detailedDescription: "Built with microservices architecture, featuring real-time recommendation engine, computer vision for product search, and natural language processing for customer support automation.",
      tech: ["React", "Node.js", "Python", "TensorFlow", "MongoDB", "AWS", "Redis"],
      github: "#",
      live: "#",
      category: "AI/ML",
      status: "Production",
      metrics: {
        users: "10K+",
        performance: "99.9%",
        aiAccuracy: "94%"
      },
      features: ["AI Recommendations", "Visual Search", "Chatbot", "Predictive Analytics"]
    },
    {
      id: 2,
      title: "RealTime Analytics Engine",
      subtitle: "Data Intelligence at Light Speed",
      description: "High-performance analytics dashboard processing millions of events per second with real-time visualizations and AI-powered insights.",
      detailedDescription: "Microservices-based platform using Apache Kafka, Redis, and custom ML models for real-time pattern recognition and anomaly detection.",
      tech: ["React", "D3.js", "Node.js", "Kafka", "Redis", "Docker", "Kubernetes"],
      github: "#",
      live: "#",
      category: "Data Engineering",
      status: "Production",
      metrics: {
        events: "1M+/sec",
        latency: "<50ms",
        uptime: "99.99%"
      },
      features: ["Real-time Processing", "ML Insights", "Custom Dashboards", "API Gateway"]
    },
    {
      id: 3,
      title: "Quantum CMS Intelligence",
      subtitle: "Content Creation Reimagined",
      description: "AI-powered content management system with automated content generation, SEO optimization, and multi-language support.",
      detailedDescription: "Next.js based CMS with integrated OpenAI GPT models, automated image optimization, and intelligent content scheduling.",
      tech: ["Next.js", "PostgreSQL", "OpenAI API", "AWS S3", "Stripe", "Vercel"],
      github: "#",
      live: "#",
      category: "Content Management",
      status: "Beta",
      metrics: {
        content: "50K+",
        languages: "12",
        seoScore: "98%"
      },
      features: ["Auto Content", "SEO AI", "Multi-language", "Analytics"]
    }
  ];

  const skills = [
    { name: "React & Next.js", icon: <FaReact />, level: 96, category: "Frontend" },
    { name: "Node.js & Express", icon: <FaNodeJs />, level: 94, category: "Backend" },
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
          <div className="brand-subtitle">Software Engineer</div>
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
            <a href="#achievements" onClick={() => scrollToSection('achievements')} className={activeSection === 'achievements' ? 'active' : ''}>
              <FaTrophy /> Achievements
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
                SENIOR AI SOLUTIONS ARCHITECT
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

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-content">
          <div className="section-header">
            <div className="section-title">
              <FaBrain className="section-icon" />
              <h2>NEURAL PROFILE</h2>
            </div>
            <div className="section-subtitle">
              Decoding the mind behind the code
            </div>
          </div>
          
          <div className="about-grid">
            <div className="about-text">
              <div className="bio-section">
                <h3 className="bio-title">
                  <FaLightbulb className="bio-icon" />
                  Innovation Matrix
                </h3>
                <p className="bio-content">
                  Senior Full-Stack Engineer with 6+ years of experience architecting next-generation 
                  applications. Specialized in AI integration, microservices architecture, and 
                  high-performance web solutions. Led cross-functional teams to deliver 50+ 
                  successful projects with 99.9% uptime records.
                </p>
              </div>
              
              <div className="bio-section">
                <h3 className="bio-title">
                  <FaRocket className="bio-icon" />
                  Mission Statement
                </h3>
                <p className="bio-content">
                  Bridging the gap between cutting-edge AI technology and practical business solutions. 
                  Passionate about creating scalable, intelligent systems that solve real-world problems 
                  while pushing the boundaries of what's possible with modern web technologies.
                </p>
              </div>
              
              <div className="about-highlights">
                <div className="highlight-item">
                  <FaShieldAlt className="highlight-icon" />
                  <div className="highlight-content">
                    <h4>Security First</h4>
                    <p>Enterprise-grade security implementations</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <FaChartLine className="highlight-icon" />
                  <div className="highlight-content">
                    <h4>Performance Optimized</h4>
                    <p>Sub-second load times, scalable architecture</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <FaCloudUploadAlt className="highlight-icon" />
                  <div className="highlight-content">
                    <h4>Cloud Native</h4>
                    <p>AWS, Azure, GCP certified solutions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-visual">
              <div className="skill-radar">
                <div className="radar-center">
                  <FaAtom className="radar-icon" />
                  <div className="radar-text">CORE</div>
                </div>
                <div className="radar-ring ring-1">
                  <div className="skill-point frontend">Frontend</div>
                  <div className="skill-point backend">Backend</div>
                  <div className="skill-point ai">AI/ML</div>
                  <div className="skill-point cloud">Cloud</div>
                </div>
                <div className="radar-ring ring-2">
                  <div className="tech-dot react">React</div>
                  <div className="tech-dot node">Node</div>
                  <div className="tech-dot python">Python</div>
                  <div className="tech-dot aws">AWS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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

      {/* Achievements Section */}
      <section id="achievements" className="achievements-section">
        <div className="section-content">
          <div className="section-header">
            <div className="section-title">
              <FaTrophy className="section-icon" />
              <h2>ACHIEVEMENT UNLOCKED</h2>
            </div>
            <div className="section-subtitle">
              Recognition and milestones in the digital realm
            </div>
          </div>
          
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-content">
                  <h4 className="achievement-title">{achievement.title}</h4>
                  <p className="achievement-description">{achievement.description}</p>
                  <span className="achievement-year">{achievement.year}</span>
                </div>
                <div className="achievement-glow"></div>
              </div>
            ))}
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
                  <FaMapMarkerAlt className="detail-icon" />
                  <span>San Francisco, CA</span>
                </div>
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
                <a href="mailto:alex@example.com" className="contact-link">
                  <FaEnvelope className="link-icon" />
                  <span>alex@example.com</span>
                </a>
                <a href="https://linkedin.com/in/alexchen" className="contact-link">
                  <FaLinkedin className="link-icon" />
                  <span>LinkedIn Profile</span>
                </a>
                <a href="https://github.com/alexchen" className="contact-link">
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
            <a href="mailto:dhiashayeb6@gmail.com">Contact Directly</a>
          </div>
        </div>
      </footer>
    </div>
    
  );
};

export default AdvancedPortfolio;