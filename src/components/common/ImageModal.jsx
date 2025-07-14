import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './ImageModal.scss';

const ImageModal = ({ showImageModal, setShowImageModal, currentImage }) => {
  if (!showImageModal) return null;

  return (
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
  );
};

export default ImageModal;