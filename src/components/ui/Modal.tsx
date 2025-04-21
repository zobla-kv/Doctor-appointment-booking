import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

interface ModalProps {
  title: string;
  isOpen: boolean;
  description: string;
  focusableElements: HTMLInputElement[];
  onConfirm: () => void;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({
  title,
  isOpen,
  description,
  focusableElements,
  onConfirm,
  onClose,
  children,
}: ModalProps) => {
  const [currentFocusedIndex, setCurrentFocusedIndex] = useState<number>(-1);
  const lastFocusableRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const totalFocusableElements = [
      ...focusableElements,
      lastFocusableRef.current,
    ];

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Tab': {
          e.preventDefault();
          const total = totalFocusableElements.length;
          let nextIndex = currentFocusedIndex;

          if (e.shiftKey) {
            nextIndex = currentFocusedIndex === 0 ? total - 1 : nextIndex - 1;
          } else {
            nextIndex = currentFocusedIndex === total - 1 ? 0 : nextIndex + 1;
          }

          totalFocusableElements[nextIndex]?.focus();
          setCurrentFocusedIndex(nextIndex);
          break;
        }

        case 'Enter': {
          const target = totalFocusableElements[currentFocusedIndex];
          if (target !== lastFocusableRef.current) {
            target?.click();
          }
          break;
        }

        case 'Escape': {
          onClose();
          break;
        }

        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, focusableElements, currentFocusedIndex, onClose]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
      role='dialog'
      aria-modal='true'
      aria-labelledby='modal-title'
      aria-describedby='modal-description'
    >
      <div className='relative bg-gray-800 text-white rounded p-3 mx-5 sm:mx-0 outline-solid w-full max-w-md'>
        <span
          id='modal-title'
          className='block text-center text-xl font-semibold mb-6'
        >
          {title}
        </span>
        <span id='modal-description' className='sr-only'>
          {description}
        </span>
        <span
          className='absolute text-3xl right-[12px] top-[4px] cursor-pointer'
          onClick={onClose}
        >
          x
        </span>
        {children}
        <Button
          text='Confirm'
          onClick={onConfirm}
          styles='block m-auto mt-6'
          ref={lastFocusableRef}
        />
      </div>
    </div>,
    document.body
  );
};

export default Modal;
