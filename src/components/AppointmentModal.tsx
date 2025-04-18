import { useEffect, useRef, useState } from 'react';
import { Modal } from './ui/Modal';
import { Doctor } from '../types/Doctor';

interface AppointmentModalProps {
  doctor: Doctor;
  isOpen: boolean;
  bookedTime: string | null;
  onSubmit: (selectedTime: string) => void;
  onClose: () => void;
}

const AppointmentModal = ({
  doctor,
  isOpen,
  bookedTime,
  onSubmit,
  onClose,
}: AppointmentModalProps) => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (isOpen) {
      setSelectedTime(bookedTime);
    }
  }, [isOpen, bookedTime]);

  const isSelectedTime = (time: string): boolean => selectedTime === time;

  // Submit form from parent modal since confirmation button is outside <form>
  const handleConfirm = () => {
    formRef.current?.requestSubmit();
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!selectedTime) {
      alert('Please select a time');
    } else {
      onSubmit(selectedTime);
      onClose();
    }
  };

  return (
    <Modal
      title={doctor.name}
      isOpen={isOpen}
      onConfirm={handleConfirm}
      onClose={onClose}
    >
      <form ref={formRef} onSubmit={handleSubmit}>
        <fieldset className='grid grid-cols-2 gap-2'>
          {doctor.availability.map((time, index) => (
            <label
              key={index}
              className={`p-2 border rounded-md cursor-pointer ${
                isSelectedTime(time) ? 'bg-blue-600 text-white' : 'bg-gray-100'
              }`}
            >
              <input
                type='radio'
                name='appointment-time'
                value={time}
                checked={isSelectedTime(time)}
                onChange={() => setSelectedTime(time)}
                className='hidden'
              />
              {time}
            </label>
          ))}
        </fieldset>
      </form>
    </Modal>
  );
};

export default AppointmentModal;
