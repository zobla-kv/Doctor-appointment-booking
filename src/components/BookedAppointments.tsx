import { Appointment } from '../types/Appointment';

interface BookedAppointmentsProps {
  appointments: Appointment[];
}

function BookedAppointments({ appointments }: BookedAppointmentsProps) {
  return (
    <div>
      {appointments.length === 0 ? (
        <p className='text-center'>No appointments booked yet.</p>
      ) : (
        <ul className='mt-4 text-center'>
          {appointments.map((appointment, index) => (
            <li key={index}>
              <span>
                {appointment.doctor.name} - {appointment.timeSlot.time}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookedAppointments;
