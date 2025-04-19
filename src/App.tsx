import './App.css';

import { useState } from 'react';

import { doctors } from './data/doctors';

import { Doctor } from './types/Doctor';
import { Appointment, TimeSlot } from './types/Appointment';

import DoctorCard from './components/DoctorCard';
import AppointmentModal from './components/AppointmentModal';
import BookedAppointments from './components/BookedAppointments';

function App() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const openModal = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const handleAddAppointment = (selectedTime: TimeSlot) => {
    if (selectedDoctor) {
      setAppointments((prev) => [
        ...prev.filter(({ doctor }) => doctor.name !== selectedDoctor.name),
        { doctor: selectedDoctor, timeSlot: selectedTime },
      ]);
    }
  };

  const closeModal = () => {
    setSelectedDoctor(null);
    setIsModalOpen(false);
  };

  const getAppointmentTimeForDoctor = (doctor: Doctor): TimeSlot | null => {
    const appointment = appointments.find(
      (appointment) => appointment.doctor.name === doctor.name
    );

    return appointment?.timeSlot ?? null;
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
            <DoctorCard key={index} doctor={doctor} onBook={openModal} />
          ))}
        </div>
      </section>
      <section>
        <h2 className='text-center'>Booked appointments</h2>
        <BookedAppointments appointments={appointments} />
      </section>
      {selectedDoctor && (
        <AppointmentModal
          doctor={selectedDoctor}
          isOpen={isModalOpen}
          bookedTime={getAppointmentTimeForDoctor(selectedDoctor)}
          onSubmit={handleAddAppointment}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default App;
