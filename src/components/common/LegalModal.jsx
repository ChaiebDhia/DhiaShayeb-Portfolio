import React, { useEffect, useRef } from 'react';
import { FaTimes, FaFileContract, FaLock } from 'react-icons/fa';
import './LegalModal.scss';

const LegalModal = ({ showTerms, showPrivacy, setShowTerms, setShowPrivacy }) => {
  const currentModal = showTerms ? 'terms' : showPrivacy ? 'privacy' : null;
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!currentModal) return undefined;

    closeButtonRef.current?.focus();

    const closeCurrentModal = () => {
      if (currentModal === 'terms') {
        setShowTerms(false);
      } else {
        setShowPrivacy(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeCurrentModal();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [currentModal, setShowPrivacy, setShowTerms]);

  if (!currentModal) return null;

  const closeCurrentModal = () => {
    if (currentModal === 'terms') {
      setShowTerms(false);
    } else {
      setShowPrivacy(false);
    }
  };

  return (
    <div className="legal-modal" role="dialog" aria-modal="true" aria-label={currentModal === 'terms' ? 'Terms of Service' : 'Privacy Protection'}>
      <div className="modal-backdrop" onClick={closeCurrentModal}></div>
      <div className="modal-content">
        <button
          ref={closeButtonRef}
          className="modal-close"
          onClick={closeCurrentModal}
          aria-label="Close legal dialog"
        >
          <FaTimes />
        </button>
        <h3>
          {currentModal === 'terms' ? (
            <><FaFileContract /> Terms of Service</>
          ) : (
            <><FaLock /> Privacy Protection</>
          )}
        </h3>
        <div className="legal-content">
          {currentModal === 'terms' ? (
            <>
              <h4>1. Intellectual Property Ownership</h4>
              <p>All content, designs, code, and creative elements displayed on this portfolio are the exclusive property of Dhia Shayeb. Unauthorized reproduction, distribution, or use of any materials without express written permission is strictly prohibited and will be prosecuted to the fullest extent of international copyright laws.</p>
              
              <h4>2. Professional Use Only</h4>
              <p>This portfolio and its contact mechanisms are intended solely for legitimate business inquiries and professional collaboration opportunities. Any misuse of these channels for spam, unsolicited marketing, or non-professional communication is expressly forbidden.</p>
              
              <h4>3. Liability Disclaimer</h4>
              <p>Dhia Shayeb disclaims all liability for any indirect, incidental, special, consequential or punitive damages resulting from access to or use of this portfolio. All content is provided "as is" without warranty of any kind.</p>
              
              <h4>4. Jurisdiction</h4>
              <p>These terms shall be governed by and construed in accordance with Tunisian law. Any disputes shall be resolved exclusively in the competent courts of Tunisia.</p>
            </>
          ) : (
            <>
              <h4>1. Data Ownership</h4>
              <p>All data submitted through this portfolio becomes the property of Dhia Shayeb for professional communication purposes only. You retain the right to request deletion of your personal data at any time.</p>

              <h4>2. Absolute Confidentiality</h4>
              <p>Contact information and communication content will never be disclosed, sold, or shared with any third parties without explicit consent, except as required by Tunisian law.</p>

              <h4>3. Security Measures</h4>
              <p>This portfolio implements industry-standard security protocols including encrypted data transmission, secure form handling, and regular security audits to protect against unauthorized access.</p>

              <h4>4. Professional Boundaries</h4>
              <p>Only information relevant to potential professional collaboration is collected. The portfolio does not use tracking cookies or analytics that compromise user privacy.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LegalModal;