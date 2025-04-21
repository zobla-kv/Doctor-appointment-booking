import { useMemo } from 'react';
import { Appointment } from '../types/Appointment';

interface BookedAppointmentsProps {
  appointments: Appointment[];
}

function BookedAppointments({ appointments: ap }: BookedAppointmentsProps) {
  // group appointments by date and sort them
  const appointments = useMemo(() => {
    const grouped = ap.reduce((acc, appointment) => {
      const date = appointment.timeSlot.date;

      if (!acc[date]) {
        acc[date] = [];
      }

      acc[date].push(appointment);

      return acc;
    }, {} as Record<string, Appointment[]>);

    const sorted = Object.entries(grouped).sort(([dateA], [dateB]) => {
      const [monthA, dayA] = dateA.split('.').map(Number);
      const [monthB, dayB] = dateB.split('.').map(Number);

      return monthA === monthB ? dayA - dayB : monthA - monthB;
    });

    return sorted;
  }, [ap]);

  return (
    <div>
      {ap.length === 0 ? (
        <p className='text-center'>No appointments booked yet.</p>
      ) : (
        <ul className='mt-10'>
          {appointments.map(([date, appointments]) => (
            <li key={date} className='mt-5' tabIndex={0}>
              <span
                className='text-xl font-semibold underline'
                aria-label='appointment date'
              >
                {date}
              </span>
              {appointments.map((a) => (
                <div key={a.doctor.name} className='ps-2'>
                  <span className='font-bold'>{a.doctor.name}</span>
                  <span className='mx-1'>-</span>
                  <span>{a.doctor.specialty}</span>
                  <span className='mx-1'>-</span>
                  <span>{a.doctor.location}</span>
                  <span className='mx-1'>-</span>
                  <span aria-label='appointment time'>{a.timeSlot.time}</span>
                </div>
              ))}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookedAppointments;
