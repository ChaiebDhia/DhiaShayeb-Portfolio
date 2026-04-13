import React, { useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import './ImageModal.scss';

const ImageModal = ({ showImageModal, setShowImageModal, currentImage }) => {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!showImageModal) return undefined;

    closeButtonRef.current?.focus();

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setShowImageModal(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [showImageModal, setShowImageModal]);

  if (!showImageModal) return null;

  return (
    <div className="image-modal" role="dialog" aria-modal="true" aria-label="Project image preview">
      <div className="modal-backdrop" onClick={() => setShowImageModal(false)}></div>
      <div className="modal-content">
        <button
          ref={closeButtonRef}
          className="modal-close"
          onClick={() => setShowImageModal(false)}
          aria-label="Close image preview"
        >
          <FaTimes />
        </button>
        <img 
          src={currentImage} 
          alt="Project Preview" 
          className="modal-image" 
        />
      </div>
    </div>
  );
};

export default ImageModal;