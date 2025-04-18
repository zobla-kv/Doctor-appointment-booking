import './App.css';

import { useState } from 'react';

import { doctors } from './data/doctors';

import { Doctor } from './types/Doctor';

import DoctorCard from './components/DoctorCard';
import AppointmentModal from './components/AppointmentModal';
import BookedAppointments from './components/BookedAppointments';

function App() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookedAppointments, setBookedAppointments] = useState<
    Map<Doctor, string>
  >(new Map());

  const handleBookClick = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const handleAddAppointment = (selectedTime: string) => {
    if (selectedDoctor) {
      const newMap = new Map(bookedAppointments);
      newMap.set(selectedDoctor, selectedTime);
      setBookedAppointments(newMap);
    }
  };

  const closeModal = () => {
    setSelectedDoctor(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1 className='text-center text-3xl font-bold mt-5 tracking-[0.25rem]'>
        Doctor appointment
      </h1>
      <section>
        <h2 className='text-center'>Doctors</h2>
        <div className='mt-10 flex flex-wrap justify-center gap-15'>
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} onBook={handleBookClick} />
          ))}
        </div>
      </section>
      <section>
        <h2 className='text-center'>Booked appointments</h2>
        <BookedAppointments appointments={bookedAppointments} />
      </section>
      {selectedDoctor && (
        <AppointmentModal
          doctor={selectedDoctor}
          isOpen={isModalOpen}
          bookedTime={bookedAppointments.get(selectedDoctor) || null}
          onSubmit={handleAddAppointment}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default App;
