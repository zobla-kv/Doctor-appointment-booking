import { Doctor } from '../types/Doctor';

export const excludeFields = (
  doctor: Doctor,
  excludedFields: (keyof Doctor)[]
): Partial<Doctor> => {
  return Object.fromEntries(
    Object.entries(doctor).filter(
      ([key]) => !excludedFields.includes(key as keyof Doctor)
    )
  );
};
