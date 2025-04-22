import './App.css';

import { useState, useMemo, useEffect, useCallback } from 'react';

import { doctors as doctorsData } from './data/doctors';

import { Doctor } from './types/Doctor';
import { Appointment, TimeSlot } from './types/Appointment';
import { Filter, FilterOptions, ActiveFilters } from './types/Filter';

import DoctorFilter from './components/DoctorFilter';
import DoctorCard from './components/DoctorCard';
import AppointmentModal from './components/AppointmentModal';
import BookedAppointments from './components/BookedAppointments';

import {
  getUniqueSpecialties,
  getUniqueAvailabilityDates,
  getUniqueAvailabilityTimes,
} from './utils/doctor';
import {
  sortSpecialtiesAsc,
  sortDatesAsc,
  sortTimesAsc,
} from './utils/transform';

function App() {
  const [allDoctors] = useState<Doctor[]>(doctorsData);
  const [displayedDoctors, setDisplayedDoctors] = useState<Doctor[]>(doctorsData);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    specialty: null,
    date: null,
    time: null,
  });

  const filterOptions: FilterOptions = useMemo(
    () => ({
      specialty: sortSpecialtiesAsc(getUniqueSpecialties(allDoctors)),
      date: sortDatesAsc(getUniqueAvailabilityDates(allDoctors)),
      time: sortTimesAsc(getUniqueAvailabilityTimes(allDoctors)),
    }),
    [allDoctors]
  );

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

  const handleFilter = useCallback((filter: Filter) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filter.name]: filter.value,
    }));
  }, []);

  useEffect(() => {
    let filteredDoctors = allDoctors;

    if (activeFilters.specialty) {
      filteredDoctors = filteredDoctors.filter(
        (doctor) => doctor.specialty === activeFilters.specialty
      );
    }

    if (activeFilters.date) {
      filteredDoctors = filteredDoctors.filter((doctor) =>
        doctor.availability.some((slot) => slot.date === activeFilters.date)
      );
    }

    if (activeFilters.time) {
      filteredDoctors = filteredDoctors.filter((doctor) =>
        doctor.availability.some((slot) =>
          slot.times.includes(activeFilters.time!)
        )
      );
    }

    setDisplayedDoctors(filteredDoctors);
  }, [activeFilters, allDoctors]);

  return (
    <div className='px-4 sm:px-6 md:px-8 lg:px-16 my-5'>
      <h1 className='text-center text-3xl font-bold tracking-[0.25rem]'>
        Doctor appointment
      </h1>
      <section>
        <h2 className='text-center mb-5'>Doctors</h2>
        <DoctorFilter filters={filterOptions} onSelect={handleFilter} />
        <div className='mt-10 min-h-lvh grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
          {displayedDoctors.length === 0 ? (
            <span className='mx-auto'>No doctors found.</span>
          ) : (
            displayedDoctors.map((doctor) => (
              <DoctorCard key={doctor.name} doctor={doctor} onBook={openModal} />
            ))
          )}
        </div>
      </section>
      <section>
        <h2 className='text-center mb-5'>My appointments</h2>
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
