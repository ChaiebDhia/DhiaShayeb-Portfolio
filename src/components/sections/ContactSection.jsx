import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { 
  FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaRocket, 
  FaCoffee, FaPhone, FaMapMarkerAlt 
} from 'react-icons/fa';
import './ContactSection.scss';
import { motion } from 'framer-motion';

const ContactSection = ({ activeSection }) => {
  const [formData, setFormData] = useState({
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
  
    try {
      const templateParams = {
        name: formData.name,
        from_name: formData.name,
        email: formData.email,
        inquiry_type: formData.inquiryType,
        inquiryType: formData.inquiryType,
        company: formData.company || 'N/A',
        position: formData.position || 'N/A',
        projectType: formData.projectType || 'N/A',
        budget: formData.budget || 'N/A',
        timeline: formData.timeline || 'N/A',
        message: formData.message,
      };

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_8izsisn',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_cfnj4la',
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID || 'VT1K8fZDMjUHS2IAA'
      );
  
      setSubmitStatus({
        success: true,
        message: 'Message sent successfully! A confirmation email has been dispatched.'
      });
  
      // Auto-remove success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
  
      // Reset form
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
      console.error('EmailJS sending error:', error);
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please check your network or contact directly at dhiashayeb6@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }} id="contact" className="contact-section">
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
                <div className="detail-item">
                  <FaMapMarkerAlt className="detail-icon" />
                  <span>Tunis, Tunisia</span>
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
        </motion.section>
  );
};

export default ContactSection;