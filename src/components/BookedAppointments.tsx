import { Doctor } from '../types/Doctor';

interface BookedAppointmentsProps {
  appointments: Map<Doctor, string>;
}

function BookedAppointments({ appointments }: BookedAppointmentsProps) {
  return (
    <div>
      {appointments.size === 0 ? (
        <p className='text-center'>No appointments booked yet.</p>
      ) : (
        <ul className='mt-4 text-center'>
          {[...appointments.entries()].map(([doctor, time], index) => (
            <li key={index}>
              <span>
                {doctor.name} - {time}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookedAppointments;
