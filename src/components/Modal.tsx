import React from 'react';

type ModalProps = { open: boolean; onClose: () => void };

const Modal: React.FC<ModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay-modal'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='overlay-modal__container'
      >
        <div className='overlay-modal__text'>
          <h1>NOTE</h1>
          <p>
            This is a practice web application for personal use only. It is{' '}
            <span>not</span> approved by the Donaldson Company.
          </p>
          <p>
            Logo, images, video and drawings are open source. All rights{' '}
            <span>belong</span> to the Donaldson Company.
          </p>
        </div>
        <button className='overlay-modal__closeBtn' onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal;
