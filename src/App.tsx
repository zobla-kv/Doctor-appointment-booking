import './App.css';

import { doctors } from './data/doctors';

import DoctorCard from './components/DoctorCard';

function App() {
  const handleBookClick = () => {};

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
      </section>
    </div>
  );
}

export default App;
