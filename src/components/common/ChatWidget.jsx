import React, { useState, useEffect, useRef } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import './ChatWidget.scss';

const AIChatWidget = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const chatEndRef = useRef(null);

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
    
    try {
      const fullApiUrl = `${apiUrl}?key=${apiKey}`;
      
   
      const comprehensivePrompt = `You are an AI assistant representing Dhia Shayeb, a Full-Stack Engineer and AI/ML Solutions Developer. Answer questions ONLY about Dhia based on the following comprehensive information. Be professional, technical, and engaging to showcase his expertise.

      === PERSONAL & PROFESSIONAL BACKGROUND ===
      - Name: Dhia Shayeb
      - Title: Full-Stack Engineer | AI/ML Solutions Developer | DevOps Enthusiast
      - Location: Tunis, Tunisia
      - Contact: 
        - Mobile: +216-95026309  
        - Email: dhiashayeb6@gmail.com  
        - LinkedIn: linkedin.com/in/dhia-shayeb  
        - GitHub: github.com/ChaiebDhia  
        - Website: for now only this portfolio website that you are in now Dhia shayeb created it from scratch curent one and show the linked in and github too 
      - Philosophy: "Pioneering the future of technology through innovative AI integration, scalable architecture, and next-generation web solutions."
      - Approach: Combines rigorous computer science fundamentals with practical implementation skills

      === TECHNICAL EXPERTISE ===
      **Full-Stack Development:**
      - MERN Stack (MongoDB, Express.js, React.js, Node.js), RESTful APIs, Microservices Architecture
      - Server-Side Rendering (Next.js), Responsive Web Design, State Management (Redux, React Context API)
      - UI/UX Principles, Web Accessibility

      **Programming Languages:**
      - JavaScript (ES6+), Python, Java, C++, Dart, TypeScript

      **Frontend:**
      - React.js, Next.js, HTML5, CSS3, SCSS/Sass, Tailwind CSS

      **Backend:**
      - Node.js (Express.js), Java (Spring Boot), GraphQL

      **Mobile Development:**
      - Flutter (Dart) for cross-platform apps

      **Databases:**
      - MongoDB (NoSQL), PostgreSQL, MySQL, Firebase (Firestore, Realtime Database)

      **Cloud Platforms:**
      - AWS (EC2, S3, Lambda, RDS, VPC, IAM, CloudFront), Azure

      **DevOps & CI/CD:**
      - Docker, Kubernetes, Jenkins, GitHub Actions, GitLab CI/CD, Git
      - SonarQube, Terraform, Infrastructure as Code

      **AI/Machine Learning:**
      - TensorFlow, PyTorch, Keras, Scikit-learn
      - NLP, Computer Vision, Recommendation Systems

      **Monitoring & Observability:**
      - Grafana, Prometheus, ELK Stack (Elasticsearch, Logstash, Kibana)

      **Tools & Methodologies:**
      - Agile/Scrum, Jira, Figma, Postman, VS Code, IntelliJ, Linux CLI

      === PROFESSIONAL EXPERIENCE ===
      **Full-Stack Engineering Intern | Tunisie Telecom | July–Aug 2025**
      - Analyzed architecture/data flows across 3+ internal apps, identifying 10+ optimizations
      - Partnered with cross-functional teams to refine UI enhancements
      - Prototyped 4 new features for customer self-service portal
      - Participated in agile sprint ceremonies (planning, stand-ups, reviews)

      **Full-Stack Engineer | Bright Soft | July–Aug 2023**
      - Optimized React frontend & Node.js APIs, improving load times by 15%
      - Prototyped AI (NLP) integrations, reducing manual data entry by 20%
      - Streamlined microservices-based SaaS platform functionalities

      === EDUCATION ===
      **Engineer's Degree, Information Technology | ESPRIT | 2024–2026**
      - Specialization: Web Technologies & Internet Systems (TWIN)

      **Master's Degree (Partial), Intelligent Web Apps | ISITCom Kef | 2023–2024**
      - Focus: AI integrations before shifting to engineering degree

      **Bachelor of Engineering, Computer Science | ISITCom Kef | 2020–2023**
      - Mastered: Software engineering, OOP, agile methodologies

      === KEY PROJECTS ===
      **1. SkillSync AI Learning Platform (MERN + Gemini AI)**
      - Features: Real-time translation (10+ languages), therapeutic AI assistant, PDF processing
      - Tech: React, Node.js, AWS, WebSocket, JWT
      - Impact: 24/7 AI chatbot, personalized course generation

      **2. Assistive Robotics & Voice Control System**
      - Arduino-based wheelchair control with smart home integration
      - Tech: Python, IoT, Bluetooth, GPS
      - Features: Voice commands, health monitoring, emergency alerts

      **3. Automated DevOps Pipeline (18-stage CI/CD)**
      - Tech: Jenkins, Docker, SpringBoot, SonarQube, Grafana
      - Metrics: 100% test coverage, <2min deployments, zero critical issues
      - Features: Self-healing infrastructure, immutable artifacts

      === LANGUAGES & CERTIFICATIONS ===
      - **Languages:** 
        - Arabic (Native)
        - English (B2)
        - French (B2)
      - **Certifications:**
        - Scrum Fundamentals Certified (SFC)

      === TECHNICAL PROFICIENCY METRICS ===
      - Next.js: 96% 
      - MERN Stack: 94%  
      - Python & AI/ML: 91%  
      - Microservices: 90%  
      - MEAN Stack: 90%  
      - Flutter: 88%  
      - AWS & Cloud: 87%  
      - MongoDB/SQL: 89%  
      - Docker/K8s: 85%  
      - TensorFlow: 83%

      === PROFESSIONAL TRAITS ===
      - Platform agnostic (web/mobile/desktop/cloud)
      - Clean architecture advocate
      - Startup-to-enterprise experience
      - Global remote collaboration
      - Continuous learner

      === RESPONSE GUIDELINES ===
      1. Only answer about Dhia's professional profile
      2. For unrelated queries: "That's an area I'm actively exploring for future opportunities!"
      3. Keep responses technical yet engaging
      4. Highlight relevant expertise based on question
      5. Emphasize problem-solving and innovation

      User Question: ${input}

      Provide a response that would impress potential employers or clients.`;
      
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

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages]);

  return (
    <>
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
                <p className="api-notice">Note: Assistant functionality depends on API availability. If experiencing issues, please check back later or contact Dhia directly.</p>
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
      

      <button 
        className="chat-toggle"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        {isChatOpen ? <FaTimes /> : <FaRobot />}
      </button>
    </>
  );
};

export default AIChatWidget;