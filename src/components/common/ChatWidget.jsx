import React, { useState, useEffect, useRef } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { GoogleGenAI } from '@google/genai';
import './ChatWidget.scss';

const ai = new GoogleGenAI({ apiKey: "AIzaSyBiGvOvkveJ-rilbku9v2peLUsWnQAEf2c" });

const promptText = `You are an AI assistant representing Dhia Shayeb, an AI Engineer & Full-Stack Architect. Answer questions ONLY about Dhia based on the following information. Be professional, technical, and engaging.

=== PERSONAL & PROFESSIONAL BACKGROUND ===
- Name: DHIA SHAYEB
- Title: AI Engineer & Full-Stack Architect
- Keywords: RAG, Agentic AI, Deep Learning, MLOps, Next.js, FastAPI, MERN, Flutter

=== EXPERIENCE ===
- AI & NLP Intern @ Axxam (June 2024 - Sept 2024): Developed conversational agents using Llama3, LangGraph, and RAG. Engineered automated prompt workflows.
- Full-Stack Intern @ Medianet (Jan 2024 - May 2024): Architected HR tools using MEAN stack, integrated API microservices.
- Full-Stack Intern @ 360-DIGIT (Feb 2023 - May 2023): Built supply chain apps using MERN/React/Node.js linked with IoT.

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
            model: 'gemini-3-flash-preview',
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