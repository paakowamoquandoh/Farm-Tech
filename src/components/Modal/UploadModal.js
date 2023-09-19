// src/components/Modal.tsx
import React from 'react';
import Modal from 'react-modal';
import "./modal.css"

const CustomModal = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          width: '400px',
          height: '350px',
          margin: 'auto',
        },
      }}
    >
      <div className="bulkInfo">
            <span>Bulk upload of files</span>
            <p>Upload new user to this platform.</p>
          </div>
      
      <div className='bulkImage'>
            <span>{children}</span>
          </div>
          <div className='uploadNote'>
            <p>
              NOTE: It must have required columns of email, first name, and last
              name.
            </p>
          </div>
    </Modal>
  );
};

export default CustomModal;
