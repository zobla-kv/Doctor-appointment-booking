import { useEffect, useRef, useState } from 'react';

import Modal from './ui/Modal';

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
  const radioRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    radioRefs.current = [];
  }, [selectedTime]);

  useEffect(() => {
    if (isOpen) {
      setSelectedTime(bookedTime);
    }
  }, [isOpen, bookedTime]);

  const setRadioRef = (element: HTMLInputElement) => {
    if (element) {
      radioRefs.current.push(element);
    }
  };

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
      description='Select a time slot for your appointment.'
      onConfirm={handleConfirm}
      onClose={onClose}
      focusableElements={radioRefs.current}
    >
      <form ref={formRef} onSubmit={handleSubmit}>
        {doctor.availability.map((slot) => (
          <fieldset key={slot.date} className='mt-2'>
            <label className='text-lg ms-1'>{slot.date}</label>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2'>
              {slot.times.map((time) => (
                <label
                  key={time}
                  id={`label-${slot.date}-${time}`}
                  htmlFor={`time-slot-${slot.date}-${time}`}
                  className={`p-2 rounded cursor-pointer ${
                    isSelectedTime({ date: slot.date, time })
                      ? 'time-slot-active'
                      : 'time-slot'
                  }`}
                >
                  <input
                    ref={setRadioRef}
                    id={`time-slot-${slot.date}-${time}`}
                    aria-labelledby={`label-${slot.date}-${time}`}
                    type='radio'
                    name='appointment-time'
                    value={time}
                    checked={isSelectedTime({ date: slot.date, time })}
                    onChange={() => setSelectedTime({ date: slot.date, time })}
                    className='w-0 h-0'
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
