import { useEffect, useRef, useState } from 'react';

import { Modal } from './ui/Modal';

import { Doctor } from '../types/Doctor';
import { TimeSlot } from '../types/Appointment';

interface AppointmentModalProps {
  doctor: Doctor;
  isOpen: boolean;
  bookedTime: TimeSlot | null;
  onSubmit: (selectedTime: TimeSlot) => void;
  onClose: () => void;
}

const AppointmentModal = ({
  doctor,
  isOpen,
  bookedTime,
  onSubmit,
  onClose,
}: AppointmentModalProps) => {
  const [selectedTime, setSelectedTime] = useState<TimeSlot | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (isOpen) {
      setSelectedTime(bookedTime);
    }
  }, [isOpen, bookedTime]);

  const isSelectedTime = (time: TimeSlot): boolean =>
    selectedTime?.date === time.date && selectedTime?.time === time.time;

  // Submit form from parent modal since confirmation button is outside <form>
  const handleConfirm = (): void => {
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
        {doctor.availability.map((slot, index) => (
          <fieldset key={index} className='mt-2'>
            <label className='text-lg ms-1'>{slot.date}</label>
            <div className='grid grid-cols-4 gap-2'>
              {slot.times.map((time, index) => (
                <label
                  key={index}
                  className={`p-2 rounded cursor-pointer ${
                    isSelectedTime({ date: slot.date, time })
                      ? 'time-slot'
                      : 'time-slot-inactive'
                  }`}
                >
                  <input
                    type='radio'
                    name='appointment-time'
                    value={time}
                    checked={isSelectedTime({ date: slot.date, time })}
                    onChange={() => setSelectedTime({ date: slot.date, time })}
                    className='hidden'
                  />
                  {time}
                </label>
              ))}
            </div>
          </fieldset>
        ))}
      </form>
    </Modal>
  );
};

export default AppointmentModal;
