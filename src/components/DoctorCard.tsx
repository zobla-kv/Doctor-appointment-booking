import Button from './ui/Button';
import { Doctor } from '../types/Doctor';
import { excludeFields } from '../utils/transform';

interface DoctorCardProps {
  doctor: Doctor;
  onBook: (doctor: Doctor) => void;
}

function DoctorCard({ doctor, onBook }: DoctorCardProps) {
  const filtered = excludeFields(doctor, ['photo', 'name']);

  return (
    <div className='w-64 rounded border p-5'>
      <img
        className='m-auto rounded'
        src={doctor.photo}
        alt={'Dr. ' + doctor.name}
        width='100px'
        height='100px'
      />
      <h3 className='text-center mt-3 font-bold'>{doctor.name}</h3>
      <div className='px-2'>
        <ul className='mt-4 text-center'>
          {Object.entries(filtered).map(([key, value], index) => (
            <li key={index}>
              <span className='capitalize underline'>{key}</span>
              <br />
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button
        text='Book'
        styles='mt-5 mx-auto block'
        onClick={() => onBook(doctor)}
      />
    </div>
  );
}

export default DoctorCard;
