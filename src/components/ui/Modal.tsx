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
      <div className='bg-white rounded-lg p-3 w-full max-w-md flex flex-col justify-center'>
        <span
          id='modal-title'
          className='text-lg text-black font-semibold mb-4'
        >
          {title}
        </span>
        {children}
        <Button text='Confirm' onClick={onConfirm} />
        <Button text='Close' onClick={onClose} />
      </div>
    </div>,
    document.body
  );
};
