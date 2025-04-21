import ReactDOM from 'react-dom';
import Button from './Button';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onConfirm: () => void;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({
  isOpen,
  onConfirm,
  onClose,
  title,
  children,
}: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
      role='dialog'
      aria-modal='true'
      aria-labelledby='modal-title'
    >
      <div className='relative bg-gray-800 text-white rounded p-3 mx-5 sm:mx-0 outline-solid w-full max-w-md'>
        <span
          id='modal-title'
          className='block text-center text-xl font-semibold mb-6'
        >
          {title}
        </span>
        <span
          className='absolute text-3xl right-[12px] top-[4px] cursor-pointer'
          onClick={onClose}
        >
          x
        </span>
        {children}
        <Button text='Confirm' onClick={onConfirm} styles='block m-auto mt-6' />
      </div>
    </div>,
    document.body
  );
};
