import React, { useState, useEffect, useRef } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { GoogleGenAI } from '@google/genai';
import './ChatWidget.scss';

const ai = new GoogleGenAI({ apiKey: process.env.REACT_APP_API_KEY });

const promptText = `You are an AI assistant representing Dhia Shayeb, an AI Engineer & Full-Stack Architect. Answer questions ONLY about Dhia based on the following information. Be professional, technical, and engaging. Talk in the first person ("I am Dhia...").

=== PERSONAL & PROFESSIONAL BACKGROUND ===
- Name: DHIA SHAYEB
- Title: AI Engineer & Full-Stack Architect
- Keywords: RAG, Agentic AI, Deep Learning, MLOps, Next.js, FastAPI, MERN, Spring Boot, CI/CD

=== EXPERIENCE ===
- AI Engineer Intern (Graduation Project) @ YEBNI, Tunisia (Feb 2026 - Jul 2026): Architected DeepCoin-Core with a LangGraph workflow featuring 5 agents, hybrid RAG, EfficientNet-B3 (80.03% TTA), and hardened CI/CD production pipelines.
- Full-Stack Engineering Intern @ Tunisia Telecom, Tunisia (Jul 2025 - Aug 2025): Developed Python automation for FTTH/5G infrastructure. Created real-time Streamlit monitoring dashboards and reduced configuration time by 80% via network automation.
- Full-Stack Intern @ Bright Soft, Tunisia (Jul 2023 - Aug 2023): Developed full-stack SaaS features leveraging React and Node.js. Contributed to AI/NLP workflows.

=== HIGHLIGHTED PROJECTS ===
- DeepCoin-Core: Active graduation project. Agentic AI + RAG + Deep Learning for archaeological coin classification.
- Automated DevOps Pipeline: 18-stage CI/CD pipeline for Spring Boot.
- E-Commerce Microservices: Spring Cloud, API Gateway, Eureka, Angular (Group Project).
- SkillSync AI Learning Platform: MERN Stack AI Educational Platform.

=== CERTIFICATIONS ===
- Anthropic Agent Skills (2025)
- AWS Academy Graduate - Cloud Foundations (2025)
- Oracle Cloud Infrastructure Associate & AVIATRIX Multi-Cloud (2025)

Always respond cheerfully and succinctly.`;

const AIChatWidget = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const chatEndRef = useRef(null);

  const processGeminiRequest = async (input) => {
    if (!input.trim()) return;
    
const userMessage = { 
      text: input, 
      isUser: true, 
      timestamp: new Date().toLocaleTimeString(),
      id: Date.now()
    };
    setChatMessages(prev => [...prev, userMessage]);
    setIsProcessing(true);
    setUserInput('');
    
    let aiResponseText = "";
    
    try {
        const response = await ai.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: `${promptText}\n\nUser Question: ${input}`,
        });
        
        if (response.text) {
          aiResponseText = response.text;
        } else {
            throw new Error('Invalid response from AI');
        }
      } catch (err) {
        console.error('API call failed:', err);
        aiResponseText = "I'm having trouble connecting to my live AI brain! Dhia is an exceptional AI Engineer & Full-Stack Architect. Feel free to explore my portfolio and reach out via the Contact section!";
      }

      const aiMessage = { 
        text: aiResponseText, 
        isUser: false, 
        timestamp: new Date().toLocaleTimeString(),
        id: Date.now() + 1
      };
      setChatMessages(prev => [...prev, aiMessage]);
      
      setIsProcessing(false);
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
