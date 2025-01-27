import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface ModalPropsI {
  isOpen: boolean;
  onClose: Function;
  children: React.ReactNode;
}

const Modal: React.FC<ModalPropsI> = ({ isOpen, onClose, children }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-end md:items-center"
      onClick={() => onClose()}
    >
      <div
        className="relative pt-7 px-5 pb-5 rounded-t-xl md:rounded-xl shadow-lg max-w-md w-full bg-gray-900"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-0 right-0 m-4"
          onClick={() => onClose()}
          aria-label="Close modal"
        >
          <FaTimes />
        </button>
        {children}
      </div>
    </div>
  );
};
export default Modal;
