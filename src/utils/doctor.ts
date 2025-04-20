import { Doctor } from '../types/Doctor';

export const getUniqueSpecialties = (doctors: Doctor[]): Doctor['specialty'][] => {
  const specialties = doctors.map((doctor) => doctor.specialty);

  return [...new Set(specialties)];
};

export const getUniqueAvailabilityDates = (doctors: Doctor[]): string[] => {
  const dates = doctors
    .flatMap((doctor) => doctor.availability
    .map((a) => a.date
  ));

  return [...new Set(dates)];
};

export const getUniqueAvailabilityTimes = (doctors: Doctor[]): string[] => {
  const times = doctors
    .flatMap((doctor) => doctor.availability
    .flatMap((a) => a.times
  ));

  return [...new Set(times)];
};

