import React from 'react';

import Button from './ui/Button';

import { Doctor } from '../types/Doctor';

import { formatList } from '../utils/format';

interface DoctorCardProps {
  doctor: Doctor;
  onBook: (doctor: Doctor) => void;
}

function DoctorCard({ doctor, onBook }: DoctorCardProps) {
  // left for reference
  // const filtered = excludeFields<Doctor>(doctor, ['photo', 'name']);

  const fieldsToRender: (keyof Doctor)[] = [
    'specialty',
    'location',
    'rating',
    'availability',
  ];

  return (
    <div className='rounded border flex flex-col py-5 px-4 mx-auto w-full max-w-[350px]'>
      <img
        className='mx-auto rounded'
        src={doctor.photo}
        alt={`Dr. ${doctor.name}`}
        width='100px'
        height='100px'
      />
      <h3 className='text-center mt-3 font-bold'>{doctor.name}</h3>
      <ul className='my-4'>
        {fieldsToRender.map((key) => (
          <li key={key} className='grid grid-cols-2'>
            <span className='capitalize underline'>{key}:</span>
            {key === 'availability' ? (
              <div className='col-span-2 grid grid-cols-2'>
                {doctor.availability.map((slot, i) => (
                  <React.Fragment key={i}>
                    <span className='font-bold'>{slot.date}</span>
                    <span className='border flex justify-end'>
                      <span>{formatList(slot.times)}</span>
                    </span>
                  </React.Fragment>
                ))}
              </div>
            ) : (
              <span className='text-right'>{doctor[key]}</span>
            )}
          </li>
        ))}
      </ul>
      <Button
        text='Book'
        styles='block mx-auto mt-auto'
        onClick={() => onBook(doctor)}
      />
    </div>
  );
}

export default DoctorCard;
