// src/components/Modal.tsx
import React, { ReactNode } from 'react';
import Modal from 'react-modal';
import "./modal.css"

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: ReactNode;
}

const AddAssignmentModal: React.FC<ModalProps> = ({ isOpen, onRequestClose, children }) => {
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
          height: '400px',
          margin: 'auto',
        },
      }}
    >
      <div className="bulkInfo">
           {children}
          </div>
    </Modal>
  );
};

export default AddAssignmentModal;
